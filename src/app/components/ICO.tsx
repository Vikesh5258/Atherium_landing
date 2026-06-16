import { useState } from "react";
import { ArrowRight, Info, CheckCircle2 } from "lucide-react";

const stages = [
  { name: "Seed Sale", price: "$0.08", bonus: "35% Bonus", status: "completed" },
  { name: "Private Sale", price: "$0.12", bonus: "20% Bonus", status: "completed" },
  { name: "Public Sale", price: "$0.20", bonus: "5% Bonus", status: "active" },
];

const currencies = ["ETH", "USDT", "USDC"];

export function ICO() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDT");

  const raised = 2800000;
  const target = 10000000;
  const progress = (raised / target) * 100;

  const athPrice = 0.2;
  const estimatedATH = amount ? (parseFloat(amount) / athPrice).toFixed(2) : "0.00";

  return (
    <section
      id="ico"
      className="relative py-28"
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
              Token Sale
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
            Participate in the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #145A32, #1E8449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ATH ICO
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#6B7280",
              fontSize: "1rem",
              marginTop: "0.75rem",
            }}
          >
            Secure your allocation before the public sale closes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-5">
            <div
              className="rounded-2xl p-7"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(20,90,50,0.1)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.8rem",
                      marginBottom: 4,
                    }}
                  >
                    Total Raised
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                    }}
                  >
                    $2.8M
                  </p>
                </div>
                <div className="text-right">
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.8rem",
                      marginBottom: 4,
                    }}
                  >
                    Target
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    $10M
                  </p>
                </div>
              </div>

              <div
                className="w-full h-3 rounded-full overflow-hidden mb-2"
                style={{ background: "#E9F5EE" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #145A32, #1E8449)",
                    boxShadow: "0 0 8px rgba(30,132,73,0.3)",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#145A32",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                  }}
                >
                  {progress.toFixed(0)}% Funded
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#9CA3AF",
                    fontSize: "0.78rem",
                  }}
                >
                  $7.2M Remaining
                </span>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(20,90,50,0.1)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1E1E1E",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                Sale Stages
              </h3>
              <div className="space-y-3">
                {stages.map((stage, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl p-4"
                    style={{
                      background:
                        stage.status === "active"
                          ? "rgba(20,90,50,0.06)"
                          : "#F9FAFB",
                      border:
                        stage.status === "active"
                          ? "1px solid rgba(20,90,50,0.25)"
                          : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        style={{
                          color:
                            stage.status === "completed"
                              ? "#1E8449"
                              : stage.status === "active"
                              ? "#145A32"
                              : "#D1D5DB",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: stage.status === "active" ? "#1E1E1E" : "#6B7280",
                          fontSize: "0.9rem",
                          fontWeight: stage.status === "active" ? 700 : 500,
                        }}
                      >
                        {stage.name}
                      </span>
                      {stage.status === "active" && (
                        <span
                          className="px-2 py-0.5 rounded-full"
                          style={{
                            background: "#145A32",
                            color: "#FFFFFF",
                            fontSize: "0.62rem",
                            fontWeight: 700,
                            fontFamily: "Inter, sans-serif",
                            letterSpacing: "0.04em",
                          }}
                        >
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#1E1E1E",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                        }}
                      >
                        {stage.price}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#1E8449",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      >
                        {stage.bonus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-7 sticky top-24"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(20,90,50,0.15)",
                boxShadow: "0 8px 40px rgba(20,90,50,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1E1E1E",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                Buy ATH Tokens
              </h3>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9CA3AF",
                  fontSize: "0.78rem",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                Pay With
              </p>
              <div className="flex gap-2 mb-5">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className="flex-1 py-2 rounded-lg transition-all duration-200 focus:outline-none"
                    style={{
                      background: currency === c ? "#145A32" : "#F3F4F6",
                      border: currency === c ? "1px solid #145A32" : "1px solid #E5E7EB",
                      color: currency === c ? "#FFFFFF" : "#374151",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#9CA3AF",
                    fontSize: "0.78rem",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                  }}
                >
                  Amount ({currency})
                </p>
                <div
                  className="flex items-center rounded-xl overflow-hidden"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 px-4 py-3 outline-none focus:outline-none bg-transparent"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "1.05rem",
                      background: "#FFFFFF",
                    }}
                  />
                  <div
                    className="px-4 py-3 flex-shrink-0"
                    style={{
                      background: "#F3F4F6",
                      borderLeft: "1px solid #E5E7EB",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#374151",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      {currency}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-4 mb-5"
                style={{
                  background: "#F0F7F3",
                  border: "1px solid rgba(20,90,50,0.14)",
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                      fontSize: "0.82rem",
                    }}
                  >
                    Estimated ATH
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#1E1E1E",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                      }}
                    >
                      {estimatedATH}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#145A32",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      ATH
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#9CA3AF",
                      fontSize: "0.72rem",
                    }}
                  >
                    Current Price
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                      fontSize: "0.72rem",
                    }}
                  >
                    $0.20 / ATH
                  </span>
                </div>
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #145A32 0%, #1E8449 100%)",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(20,90,50,0.25)",
                }}
              >
                Buy ATH Now <ArrowRight size={16} />
              </button>

              <div className="flex items-start gap-2 mt-4">
                <Info size={13} style={{ color: "#D1D5DB", flexShrink: 0, marginTop: 2 }} />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#9CA3AF",
                    fontSize: "0.72rem",
                    lineHeight: 1.5,
                  }}
                >
                  Tokens will be distributed after ICO completion. Prices may vary across
                  different sale phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
