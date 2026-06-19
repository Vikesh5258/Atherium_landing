import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Atherium?",
    a: "Atherium (ATH) is a utility token powering an efficient, user-focused blockchain ecosystem. It provides fee discounts, rewards, and access to essential platform services. The project aims to expand its utility and explore real-world asset tokenization as it grows.",
  },
  {
    q: "Why is Atherium built on BSC?",
    a: "Atherium utilizes BSC for its fast transaction speeds, low gas fees, and strong ecosystem, ensuring seamless user experience and efficient token transactions.",
  },
  {
    q: "Is Atherium a secure platform?",
    a: "Yes, Atherium operates on blockchain technology, ensuring transparency, security, and decentralized transactions governed by smart contracts.",
  },
  {
    q: "What payment options are available for Atherium?",
    a: "Atherium supports payments using BNB (Binance Coin) and USDT (Tether) on the Binance Smart Chain (BSC).",
  },
  {
    q: "Are there any transaction fees when paying with BNB or USDT?",
    a: "Yes, BSC charges a small gas fee for transactions, which is significantly lower compared to other blockchain networks.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28"
      style={{ background: "#F7FAF8" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              Common Questions
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
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #145A32, #1E8449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "#FFFFFF",
                border: openIndex === i ? "1px solid rgba(20,90,50,0.25)" : "1px solid #E5E7EB",
                boxShadow:
                  openIndex === i
                    ? "0 4px 20px rgba(20,90,50,0.08)"
                    : "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#1E1E1E",
                    fontSize: "1rem",
                    fontWeight: openIndex === i ? 700 : 600,
                    lineHeight: 1.4,
                    paddingRight: "1rem",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: openIndex === i ? "#145A32" : "#F3F4F6",
                    color: openIndex === i ? "#FFFFFF" : "#374151",
                  }}
                >
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px mb-4" style={{ background: "#F3F4F6" }} />
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#4B5563",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
