import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function CounterStat({
  target,
  suffix,
  label,
  started,
}: {
  target: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(target, 2200, started);
  return (
    <div className="text-center px-6 py-10">
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "0.5rem",
          color: "#1E1E1E",
        }}
      >
        {count.toLocaleString()}
        <span style={{ color: "#145A32" }}>{suffix}</span>
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#9CA3AF",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  );
}

function StaticStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-6 py-10">
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "0.5rem",
          background: "linear-gradient(135deg, #145A32, #1E8449)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#9CA3AF",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ background: "#F7FAF8" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ borderTop: "1px solid rgba(20,90,50,0.1)", borderBottom: "1px solid rgba(20,90,50,0.1)" }}
        >
          {[
            { tag: "counter", target: 50, suffix: "M+", label: "ATH Total Supply" },
            { tag: "static", value: "Global", label: "Investor Access" },
            { tag: "static", value: "24/7", label: "Blockchain Availability" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                borderRight: i < 2 ? "1px solid rgba(20,90,50,0.1)" : "none",
              }}
            >
              {item.tag === "counter" ? (
                <CounterStat
                  target={item.target!}
                  suffix={item.suffix!}
                  label={item.label}
                  started={started}
                />
              ) : (
                <StaticStat value={item.value!} label={item.label} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
