import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderPayload {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  quantity: number;
  payment_method: string;
  total_amount: number;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: OrderPayload = await req.json();

    // Validate
    const required = ["customer_name", "phone", "email", "address", "city", "quantity", "payment_method", "total_amount"];
    for (const field of required) {
      if (!payload[field as keyof OrderPayload]) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Save order to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: order, error: dbError } = await supabase
      .from("orders")
      .insert({
        customer_name: payload.customer_name,
        phone: payload.phone,
        email: payload.email,
        address: payload.address,
        city: payload.city,
        quantity: payload.quantity,
        payment_method: payload.payment_method,
        payment_status: "confirmed",
        total_amount: payload.total_amount,
      })
      .select()
      .single();

    if (dbError) {
      console.error("DB Error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save order" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send confirmation email to store owner
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const emailHtml = `
        <h2>🛒 New Order Received — Rawaan Store</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Order ID</td><td style="padding:8px;border:1px solid #ddd;">${order.id}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Customer</td><td style="padding:8px;border:1px solid #ddd;">${payload.customer_name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${payload.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${payload.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${payload.address}, ${payload.city}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Product</td><td style="padding:8px;border:1px solid #ddd;">WGP Mini UPS × ${payload.quantity}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Total</td><td style="padding:8px;border:1px solid #ddd;">PKR ${payload.total_amount.toLocaleString()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Payment</td><td style="padding:8px;border:1px solid #ddd;">${payload.payment_method} — Confirmed</td></tr>
        </table>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Rawaan Store <orders@resend.dev>",
          to: ["rawaanstore11@gmail.com"],
          subject: `New Order #${order.id.slice(0, 8)} — ${payload.customer_name}`,
          html: emailHtml,
        }),
      });
    } else {
      console.log("RESEND_API_KEY not set — skipping email. Order saved successfully.");
    }

    return new Response(
      JSON.stringify({ success: true, order_id: order.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
