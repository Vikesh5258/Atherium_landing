import { CheckCircle2, Clock } from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "Project Launch",
    status: "active",
    items: [
      "Launch ATH Token",
      "Complete ICO",
      "Deploy Smart Contracts",
      "Establish Ecosystem Infrastructure",
      "Begin Community Growth",
    ],
  },
  {
    year: "2027",
    title: "Utility Expansion",
    status: "upcoming",
    items: [
      "Platform Utility Features",
      "Reward Programs",
      "Strategic Partnerships",
      "Strengthen Ecosystem Adoption",
    ],
  },
  {
    year: "2028",
    title: "Ecosystem Development",
    status: "upcoming",
    items: [
      "Expand Platform Capabilities",
      "Enhance User Engagement",
      "Increase ATH Utility",
      "Onboard New Participants",
    ],
  },
  {
    year: "2029",
    title: "RWA Infrastructure",
    status: "upcoming",
    items: [
      "RWA Integration Research",
      "Develop Asset Frameworks",
      "Industry Partnerships",
      "Prepare Ecosystem for Expansion",
    ],
  },
  {
    year: "2030",
    title: "Future Growth",
    status: "upcoming",
    items: [
      "Advanced Ecosystem Services",
      "Selected RWA Opportunities",
      "Expand ATH Utility",
      "Multi-Platform Functions",
    ],
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FFFFFF" }}
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
              Development Timeline
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
            }}
          >
            Strategic{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #145A32, #1E8449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Roadmap
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(20,90,50,0.2) 10%, rgba(20,90,50,0.2) 90%, transparent)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10 items-stretch">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: m.status === "active" ? "#145A32" : "#FFFFFF",
                      border:
                        m.status === "active"
                          ? "2px solid #1E8449"
                          : "2px solid #E5E7EB",
                      boxShadow:
                        m.status === "active" ? "0 0 16px rgba(20,90,50,0.3)" : "none",
                    }}
                  >
                    {m.status === "active" ? (
                      <CheckCircle2 size={14} style={{ color: "#FFFFFF" }} />
                    ) : (
                      <Clock size={13} style={{ color: "#D1D5DB" }} />
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: m.status === "active" ? "#145A32" : "#9CA3AF",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {m.year}
                  </span>
                </div>

                <div
                  className="w-full rounded-2xl p-5 transition-all duration-300 flex-1"
                  style={{
                    background: m.status === "active" ? "#F0F7F3" : "#FAFAFA",
                    border:
                      m.status === "active"
                        ? "1px solid rgba(20,90,50,0.25)"
                        : "1px solid #E5E7EB",
                    boxShadow:
                      m.status === "active" ? "0 4px 20px rgba(20,90,50,0.1)" : "none",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {m.title}
                  </h3>
                  <ul className="space-y-2">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                          style={{
                            background:
                              m.status === "active" ? "#1E8449" : "#D1D5DB",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            color:
                              m.status === "active" ? "#374151" : "#9CA3AF",
                            fontSize: "0.78rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
