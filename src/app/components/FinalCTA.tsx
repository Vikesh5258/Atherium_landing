import { ArrowRight, Download } from "lucide-react";

export function FinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="cta"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #F0F7F3 0%, #E4F2EA 40%, #F5FAF7 100%)",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ overflow: "hidden" }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(8rem, 20vw, 18rem)",
            fontWeight: 900,
            color: "rgba(20,90,50,0.04)",
            letterSpacing: "0.05em",
            userSelect: "none",
          }}
        >
          ATH
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#1E1E1E",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "1.5rem",
          }}
        >
          Join the Future of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #145A32, #1E8449)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Asset Tokenization
          </span>
        </h2>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#4B5563",
            fontSize: "1.1rem",
            lineHeight: 1.75,
            maxWidth: 580,
            margin: "0 auto 3rem",
          }}
        >
          Become part of a transparent, secure, and globally accessible investment ecosystem
          powered by blockchain innovation. Secure your ATH allocation today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = "https://athcoins.in/ico"}
            className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #145A32 0%, #1E8449 100%)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              padding: "0.875rem 2.25rem",
              borderRadius: "0.625rem",
              boxShadow: "0 6px 24px rgba(20,90,50,0.3)",
            }}
          >
            Join ICO <ArrowRight size={18} />
          </button>
          <button
            className="flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.7)",
              color: "#1E1E1E",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "0.875rem 2.25rem",
              borderRadius: "0.625rem",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Download size={16} /> Download Whitepaper
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {[
            { label: "Min Purchase", value: "100 ATH" },
            { label: "Current Price", value: "$0.20" },
            // { label: "Sale Ends", value: "Q3 2026" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(20,90,50,0.12)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9CA3AF",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1E1E1E",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
