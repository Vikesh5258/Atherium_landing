import { Layers, TrendingUp, Vote, Lock, Globe, Coins } from "lucide-react";

const features = [
  {
    icon: <Layers size={22} />,
    title: "Fractional Ownership",
    desc: "Invest in real-world assets with low barriers to entry. Own fractions of high-value assets previously accessible only to institutions.",
  },
  {
    icon: <Coins size={22} />,
    title: "Asset Backing",
    desc: "Every ATH token is supported by real-world value and verified through transparent on-chain mechanisms and third-party audits.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Enhanced Liquidity",
    desc: "Trade tokenized assets efficiently on decentralized markets — no lock-in periods, no intermediaries, 24/7 availability.",
  },
  {
    icon: <Vote size={22} />,
    title: "Governance",
    desc: "ATH holders actively participate in ecosystem decisions, shaping protocol upgrades, asset listings, and treasury allocations.",
  },
  {
    icon: <Lock size={22} />,
    title: "Secure Infrastructure",
    desc: "Built on battle-tested blockchain infrastructure with multi-sig security, formal audits, and decentralized architecture.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Accessibility",
    desc: "Borderless investment opportunities available to any qualified investor worldwide, with full KYC/AML compliance.",
  },
];

export function WhyAtherium() {
  return (
    <section
      id="why"
      className="relative py-20"
      style={{ background: "#F7FAF8" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-block px-3 py-1 rounded-full mb-5"
            style={{
              background: "rgba(20,90,50,0.07)",
              border: "1px solid rgba(20,90,50,0.18)",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#145A32",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Why Choose Atherium
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#1E1E1E",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 540,
              margin: "0 auto 1rem",
            }}
          >
            Built for the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #145A32, #1E8449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modern Investor
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#6B7280",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Six core pillars that make Atherium the premier platform for real-world asset
            tokenization and decentralized investment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 transition-all duration-300"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(20,90,50,0.1)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(20,90,50,0.3)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(20,90,50,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(20,90,50,0.1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(20,90,50,0.07)",
                  border: "1px solid rgba(20,90,50,0.14)",
                  color: "#145A32",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1E1E1E",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "0.625rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#6B7280",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
