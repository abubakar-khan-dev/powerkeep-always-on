import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const YOUTUBE_VIDEO_ID = "1lmecRXkgZk";

const DemoVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Demo</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">See How It Works</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card"
        >
          {playing ? (
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Product Demo Video"
              />
            </div>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="relative w-full group"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                alt="Demo video thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 hover:bg-foreground/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </button>
          )}
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-4">
          Watch how the Mini UPS keeps your WiFi router running during power outages.
        </p>
      </div>
    </section>
  );
};

export default DemoVideoSection;
