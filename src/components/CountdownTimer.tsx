import { useState, useEffect } from "react";

const getEndOfDay = () => {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime() - now.getTime();
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getEndOfDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getEndOfDay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const Block = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="bg-foreground text-background font-display font-bold text-xl sm:text-2xl rounded-lg w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Block value={hours} label="Hours" />
      <span className="text-foreground font-bold text-xl mb-4">:</span>
      <Block value={minutes} label="Min" />
      <span className="text-foreground font-bold text-xl mb-4">:</span>
      <Block value={seconds} label="Sec" />
    </div>
  );
};

export default CountdownTimer;
