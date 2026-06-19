import { useEffect, useRef } from "react";
import { ArrowRight, FileText } from "lucide-react";
import athLogo from "../../imports/Final.png";

function BlockchainNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const nodeCount = 38;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 600),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(20,90,50,${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20,90,50,0.35)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
  );
}


function GlassCard({
  title,
  value,
  sub,
  style,
}: {
  title: string;
  value: string;
  sub?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(20,90,50,0.15)",
        borderRadius: "0.875rem",
        padding: "0.75rem 1rem",
        minWidth: 120,
        boxShadow: "0 4px 20px rgba(20,90,50,0.1)",
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#6B7280",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#1E1E1E",
          fontSize: "1rem",
          fontWeight: 700,
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#1E8449",
            fontSize: "0.65rem",
            fontWeight: 600,
            marginTop: 2,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const path = id === "home" ? "/" : `/${id}`;
      if (window.location.pathname !== path) {
        window.history.pushState(null, "", `${path}${window.location.search}`);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #F0F7F3 0%, #E8F4ED 35%, #F5FAF7 65%, #FFFFFF 100%)",
      }}
    >
      <BlockchainNetwork />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 65% 50%, rgba(20,90,50,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(20,90,50,0.08)",
                border: "1px solid rgba(20,90,50,0.2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#1E8449", boxShadow: "0 0 6px rgba(30,132,73,0.6)" }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#145A32",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >Uitility-Driven Blockchain Ecosystem</span>
            </div>

            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E1E1E",
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
              }}
            >
              A utility token built for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #145A32, #1E8449)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                real value
              </span>
            </h1>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#4B5563",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                maxWidth: 520,
                marginBottom: "2.5rem",
              }}
            >Atherium&nbsp;&nbsp;is a utility token designed to power a growing blockchain ecosystem focused on efficiency, accessibility, and user engagement. ATH provides practical benefits such as reward opportunities and access to ecosystem services. As the project evolves, Atherium aims to explore real-world asset tokenization opportunities and expand its ecosystem utility.</p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollTo("ico")}
                className="flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #145A32 0%, #1E8449 100%)",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "0.75rem 1.75rem",
                  borderRadius: "0.625rem",
                  boxShadow: "0 4px 20px rgba(20,90,50,0.3)",
                }}
              >
                Join ICO <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("cta")}
                className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-50 cursor-pointer"
                style={{
                  background: "#FFFFFF",
                  color: "#1E1E1E",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "0.75rem 1.75rem",
                  borderRadius: "0.625rem",
                  border: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <FileText size={16} /> Read Whitepaper
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "ATH Supply", value: "50M" },
                { label: "Backed By", value: "RWA" },
                { label: "Decimals", value: "18" },
                { label: "Access", value: "Global" },
              ].map((m) => (
                <div key={m.label}>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#145A32",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative" style={{ height: 480 }}>
            <div className="relative" style={{ width: 380, height: 380 }}>
              {/* Logo as background layer */}
              <img
                src={athLogo}
                alt="Atherium ATH"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  zIndex: 0,
                  opacity: 0.92,
                }}
              />
              {/* Glass cards on top */}
              <GlassCard
                title="Total Supply"
                value="50M ATH"
                sub="Fixed Cap"
                style={{ bottom: 40, right: -30, zIndex: 2 }}
              />
              <GlassCard
                title="ICO Price"
                value="$0.20"
                sub="+15% Stage Bonus"
                style={{ bottom: 80, left: -20, zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #FFFFFF)" }}
      />
    </section>
  );
}
