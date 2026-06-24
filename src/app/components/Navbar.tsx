import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import athLogo from "../../imports/Final.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "Roadmap", id: "roadmap" },
    { label: "FAQ", id: "faq" },
    { label: "Whitepaper", id: "cta" },
  ];

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      window.history.pushState(null, "", `/#${id}`);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(20,90,50,0.12)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          className="flex items-center gap-2.5 focus:outline-none"
          onClick={() => scrollTo("home")}
        >
          <img src={athLogo} alt="Atherium logo" style={{ height: 36, width: "auto", objectFit: "contain" }} />
        </button>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="transition-all duration-200 focus:outline-none cursor-pointer"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#4B5563",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = "#145A32")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color = "#4B5563")
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => window.location.href = "https://athcoins.in/ico"}
            className="transition-all duration-200 hover:opacity-90 focus:outline-none cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #145A32 0%, #1E8449 100%)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Join ICO
          </button>
        </div>

        <button
          className="md:hidden focus:outline-none"
          style={{ color: "#1E1E1E" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 min-h-screen"
          style={{
            background: "white",
            borderTop: "1px solid rgba(20,90,50,0.1)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-3 focus:outline-none"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#374151",
                fontSize: "0.9rem",
                borderBottom: "1px solid rgba(20,90,50,0.08)",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => window.location.href = "https://athcoins.in/ico"}
            className="mt-4 w-full py-2.5 rounded-lg focus:outline-none"
            style={{
              background: "linear-gradient(135deg, #145A32 0%, #1E8449 100%)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            Join ICO
          </button>
        </div>
      )}
    </nav>
  );
}
