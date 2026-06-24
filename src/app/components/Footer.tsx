import { Link, useNavigate, useLocation } from "react-router";
import athLogo from "../../imports/Final.png";


function DiscordIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.134 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.008 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.236 2.686.236v2.963h-1.514c-1.491 0-1.956.929-1.956 1.882v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.081 24 18.092 24 12.073z" />
    </svg>
  );
}


const quickLinks = ["About", "Tokenomics", "Roadmap", "FAQ"];
const socials = [
  { icon: <DiscordIcon />, label: "Discord", href: "https://discord.gg/u4QekhjuB" },
  { icon: <InstagramIcon />, label: "Instagram", href: "/" },
  { icon: <FacebookIcon />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590976505747" },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id.toLowerCase()}`);
    } else {
      window.history.pushState(null, "", `/#${id.toLowerCase()}`);
      const el = document.getElementById(id.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
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
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none"
                  style={{
                    background: "#F3F4F6",
                    border: "1px solid #E5E7EB",
                    color: "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#145A32";
                    el.style.borderColor = "#145A32";
                    el.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#F3F4F6";
                    el.style.borderColor = "#E5E7EB";
                    el.style.color = "#6B7280";
                  }}
                >
                  {s.icon}
                </a>
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
            {["Privacy Policy", "Terms of Service"].map((item) => {
              const isTerms = item === "Terms of Service";
              const isPrivacyPolicy = item === "Privacy Policy";
              if (isTerms) {
                return (
                  <Link
                    key={item}
                    to="/terms-conditions"
                    className="focus:outline-none transition-colors duration-200"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.78rem",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#145A32")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#9CA3AF")
                    }
                  >
                    {item}
                  </Link>
                );
              }
              if (isPrivacyPolicy) {
                return (
                  <Link
                    key={item}
                    to="/privacy-policy"
                    className="focus:outline-none transition-colors duration-200"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.78rem",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#145A32")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#9CA3AF")
                    }
                  >
                    {item}
                  </Link>
                );
              }
              return (
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
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
