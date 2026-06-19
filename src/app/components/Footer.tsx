import athLogo from "../../imports/Final.png";

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.632 5.906-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.134 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinks = ["About", "Tokenomics", "Roadmap", "FAQ"];
const socials = [
  { icon: <XIcon />, label: "X (Twitter)" },
  { icon: <TelegramIcon />, label: "Telegram" },
  { icon: <DiscordIcon />, label: "Discord" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const path = id.toLowerCase() === "home" ? "/" : `/${id.toLowerCase()}`;
      if (window.location.pathname !== path) {
        window.history.pushState(null, "", `${path}${window.location.search}`);
      }
    }
  };

  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid rgba(20,90,50,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between md:flex-row flex-col gap-12 mb-12">
          <div>
            <div className="flex items-center mb-5">
              <img src={athLogo} alt="Atherium" style={{ height: 32, width: "auto", objectFit: "contain" }} />
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#6B7280",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              A next-generation Real World Asset backed blockchain ecosystem bridging
              traditional finance and decentralized investment.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E1E1E",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="transition-colors duration-200 focus:outline-none"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                      fontSize: "0.875rem",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLButtonElement).style.color = "#145A32")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLButtonElement).style.color = "#6B7280")
                    }
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E1E1E",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: "1.25rem",
              }}
            >
              Community
            </h4>
            <div className="flex gap-3 flex-wrap mb-6">
              {socials.map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none"
                  style={{
                    background: "#F3F4F6",
                    border: "1px solid #E5E7EB",
                    color: "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = "#145A32";
                    el.style.borderColor = "#145A32";
                    el.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = "#F3F4F6";
                    el.style.borderColor = "#E5E7EB";
                    el.style.color = "#6B7280";
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>

            {/* <div
              className="p-4 rounded-xl"
              style={{
                background: "#F8FBF9",
                border: "1px solid rgba(20,90,50,0.1)",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9CA3AF",
                  fontSize: "0.72rem",
                  lineHeight: 1.6,
                }}
              >
                Investment in crypto assets carries risk. Past performance is not indicative
                of future results. Always conduct your own due diligence.
              </p>
            </div> */}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: "1px solid #F3F4F6" }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#9CA3AF",
              fontSize: "0.82rem",
            }}
          >
            © 2026 Atherium. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Risk Disclosure"].map((item) => (
              <button
                key={item}
                className="focus:outline-none transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9CA3AF",
                  fontSize: "0.78rem",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "#145A32")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "#9CA3AF")
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
