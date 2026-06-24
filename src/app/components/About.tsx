import { Shield, Globe, Layers } from "lucide-react";

function AssetIllustration() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 380 }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(20,90,50,0.06) 0%, transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 400 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", maxWidth: 500 }}
      >
        <rect x="20" y="60" width="160" height="100" rx="12" fill="#FFFFFF" stroke="rgba(20,90,50,0.15)" strokeWidth="1.5" />
        <text x="100" y="97" textAnchor="middle" fill="#9CA3AF" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="1">REAL ESTATE</text>
        <rect x="30" y="107" width="140" height="5" rx="2.5" fill="#E9F5EE" />
        <rect x="30" y="119" width="100" height="5" rx="2.5" fill="#E9F5EE" />
        <rect x="30" y="131" width="120" height="5" rx="2.5" fill="#E9F5EE" />
        <text x="100" y="150" textAnchor="middle" fill="#145A32" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">$12.4M Asset</text>

        <rect x="220" y="60" width="160" height="100" rx="12" fill="#FFFFFF" stroke="rgba(20,90,50,0.15)" strokeWidth="1.5" />
        <text x="300" y="97" textAnchor="middle" fill="#9CA3AF" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="1">COMMODITIES</text>
        <rect x="230" y="107" width="140" height="5" rx="2.5" fill="#E9F5EE" />
        <rect x="230" y="119" width="110" height="5" rx="2.5" fill="#E9F5EE" />
        <text x="300" y="150" textAnchor="middle" fill="#145A32" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">$8.7M Asset</text>

        <rect x="120" y="260" width="160" height="100" rx="12" fill="#FFFFFF" stroke="rgba(20,90,50,0.15)" strokeWidth="1.5" />
        <text x="200" y="297" textAnchor="middle" fill="#9CA3AF" fontSize="9.5" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="1">INFRASTRUCTURE</text>
        <rect x="130" y="307" width="140" height="5" rx="2.5" fill="#E9F5EE" />
        <rect x="130" y="319" width="100" height="5" rx="2.5" fill="#E9F5EE" />
        <text x="200" y="348" textAnchor="middle" fill="#145A32" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">$20.1M Asset</text>

        <line x1="100" y1="160" x2="200" y2="220" stroke="rgba(20,90,50,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="300" y1="160" x2="200" y2="220" stroke="rgba(20,90,50,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="200" y1="260" x2="200" y2="240" stroke="rgba(20,90,50,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />

        <circle cx="200" cy="210" r="32" fill="#145A32" stroke="rgba(30,132,73,0.4)" strokeWidth="1.5" />
        <circle cx="200" cy="210" r="24" fill="#1E8449" />
        <text x="200" y="214" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">ATH</text>
      </svg>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AssetIllustration />

          <div>
            <div
              className="inline-block px-3 py-1 rounded-full mb-6"
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
                About Atherium
              </span>
            </div>

            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E1E1E",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Creating value through{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #145A32, #1E8449)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Utility
              </span>
            </h2>

            <div
              className="rounded-xl p-6 mb-5"
              style={{
                background: "#F8FBF9",
                border: "1px solid rgba(20,90,50,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(20,90,50,0.08)" }}
                >
                  <Shield size={18} style={{ color: "#145A32" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#4B5563",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Atherium's mission is to create a utility-driven blockchain ecosystem that delivers
                    real value to users through accessible digital solutions, transparent operations,
                    and innovative technologies. By building a sustainable platform, Atherium seeks to
                    encourage adoption while laying the foundation for future asset-backed opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-6 mb-8"
              style={{
                background: "#F8FBF9",
                border: "1px solid rgba(20,90,50,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(20,90,50,0.08)" }}
                >
                  <Globe size={18} style={{ color: "#145A32" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#4B5563",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >Our vision is to establish Atherium token that bridges blockchain innovation with real-world asset. Through continuous development, strategic partnerships, and future RWA initiatives, Atherium aims to create long-term value and practical utility for its global community.</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-4">
              {[
                { icon: <Layers size={16} />, label: "Tokenized Assets", value: "100+" },
                { icon: <Globe size={16} />, label: "Countries", value: "50+" },
                { icon: <Shield size={16} />, label: "Security Audits", value: "3x" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "#F8FBF9",
                    border: "1px solid rgba(20,90,50,0.1)",
                  }}
                >
                  <div className="flex justify-center mb-2" style={{ color: "#145A32" }}>
                    {stat.icon}
                  </div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
