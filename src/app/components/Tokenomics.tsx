import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Flame, BarChart2, Vote, Gift, Tag, Layers } from "lucide-react";

const allocationData = [
  { name: "RWA Reserve & Liquidity", value: 35, color: "#145A32" },
  { name: "Public Sale & Community", value: 20, color: "#1E8449" },
  { name: "Ecosystem Rewards", value: 15, color: "#27AE60" },
  { name: "Strategic Partners", value: 10, color: "#2ECC71" },
  { name: "Team & Founders", value: 10, color: "#52BE80" },
  { name: "Marketing & Development", value: 5, color: "#7DCEA0" },
  { name: "Treasury Reserve", value: 5, color: "#A9DFBF" },
];

const tokenInfo = [
  { label: "Token Name", value: "Atherium" },
  { label: "Symbol", value: "ATH" },
  { label: "Type", value: "Utility Token" },
  { label: "Decimals", value: "18" },
  { label: "Total Supply", value: "50,000,000 ATH" },
  { label: "Network", value: "BSC (BEP-20)" },
];

const utilities = [
  { icon: <BarChart2 size={16} />, label: "Staking" },
  { icon: <Vote size={16} />, label: "Governance" },
  { icon: <Gift size={16} />, label: "Rewards" },
  { icon: <Tag size={16} />, label: "Fee Discounts" },
  { icon: <Layers size={16} />, label: "Asset Access" },
  { icon: <BarChart2 size={16} />, label: "Ecosystem" },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(20,90,50,0.15)",
          borderRadius: "0.5rem",
          padding: "0.6rem 0.9rem",
          fontFamily: "Inter, sans-serif",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ color: "#1E1E1E", fontSize: "0.8rem", fontWeight: 600 }}>
          {payload[0].name}
        </p>
        <p style={{ color: "#145A32", fontSize: "1rem", fontWeight: 700 }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="relative py-28"
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
              Token Distribution
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
            ATH{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #145A32, #1E8449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tokenomics
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 items-stretch">
          <div
            className="rounded-2xl p-6 h-full"
            style={{
              background: "#F8FBF9",
              border: "1px solid rgba(20,90,50,0.1)",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E1E1E",
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Token Information
            </h3>
            <div className="space-y-3">
              {tokenInfo.map((t) => (
                <div
                  key={t.label}
                  className="flex justify-between items-center py-2"
                  style={{ borderBottom: "1px solid rgba(20,90,50,0.07)" }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                      fontSize: "0.82rem",
                    }}
                  >
                    {t.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#1E1E1E",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 h-full">
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: "#F8FBF9",
                border: "1px solid rgba(20,90,50,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#1E1E1E",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Token Allocation
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div style={{ flexShrink: 0 }}>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={allocationData}
                      cx={100}
                      cy={100}
                      innerRadius={55}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </div>

                <div className="flex-1 space-y-2 w-full">
                  {allocationData.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-3 h-3 rounded-sm"
                        style={{ background: item.color }}
                      />
                      <span
                        className="flex-1"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#4B5563",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#1E1E1E",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
