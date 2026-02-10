import { LayoutGrid, BarChart3, Table, Shield, ArrowRight } from "lucide-react";

interface AppCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  onClick: () => void;
}

function AppCard({ icon, title, description, badge, onClick }: AppCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "linear-gradient(135deg, #3B82F6 0%, #8b3dff 100%)",
        borderRadius: "12px",
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(105, 0, 239, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "120px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(40%, -40%)",
        }}
      ></div>

      {/* Badge */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            color: "white",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "700",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {badge}
        </div>
      )}

      <div>
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "white",
            margin: "0 0 8px 0",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.85)",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>

      {/* Arrow Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <ArrowRight size={18} color="white" />
        </div>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  const handleAppClick = (appName: string) => {
    console.log(`Clicked on ${appName}`);
    // Navigation logic can be added here
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        maxHeight: "768px",
        background:
          "linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5f7ff 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px)
          `,
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>

      {/* Animated Glow Elements */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(105, 0, 239, 0.08) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
          animation: "pulse 8s ease-in-out infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(105, 0, 239, 0.06) 0%, transparent 70%)",
          bottom: "-150px",
          left: "-150px",
          animation: "pulse 10s ease-in-out infinite 2s",
        }}
      ></div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-20">
        <div className="w-full max-w-7xl">
          {/* Logo & Brand Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "48px",
              animation: "fadeIn 0.6s ease-out",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #3B82F6 0%, #8b3dff 100%)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(105, 0, 239, 0.3)",
                position: "relative",
              }}
            >
              <Shield size={36} color="white" strokeWidth={2.5} />
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  border: "2px solid rgba(105, 0, 239, 0.2)",
                  borderRadius: "18px",
                }}
              ></div>
            </div>
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#1a1a2e",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2",
                  margin: 0,
                }}
              >
                Dr.Reddy's
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#3B82F6",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                LABORATORIES
              </p>
            </div>
          </div>

          {/* Header Section */}
          <div
            style={{
              marginBottom: "56px",
              animation: "fadeIn 0.6s ease-out 0.1s backwards",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-20px",
                top: "10px",
                width: "6px",
                height: "60px",
                background: "linear-gradient(180deg, #3B82F6 0%, #8b3dff 100%)",
                borderRadius: "3px",
                boxShadow: "0 0 20px rgba(105, 0, 239, 0.4)",
              }}
            ></div>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "700",
                color: "#1a1a2e",
                marginBottom: "16px",
                letterSpacing: "-1.5px",
                lineHeight: "1.1",
              }}
            >
              Welcome Back
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#6B7280",
                fontWeight: "500",
                maxWidth: "600px",
              }}
            >
              Choose your application to access the reporting platform
            </p>
          </div>

          {/* App Cards Grid */}
          <div
            style={{
              maxWidth: "1200px",
              animation: "fadeIn 0.6s ease-out 0.3s backwards",
              marginBottom: "48px",
            }}
          >
            {/* Section Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #3B82F6 0%, #8b3dff 100%)",
                  borderRadius: "2px",
                }}
              ></div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#3B82F6",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Applications
              </span>
            </div>

            {/* Cards Layout - Asymmetric Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              <AppCard
                icon={<Table size={36} color="white" strokeWidth={2.5} />}
                title="OPV"
                description="Optimize Production and Variability"
                badge="Popular"
                onClick={() => handleAppClick("OPV")}
              />

              <AppCard
                icon={<LayoutGrid size={36} color="white" strokeWidth={2.5} />}
                title="OPVM"
                description="Optimize Production and Variability Management"
                onClick={() => handleAppClick("OPVM")}
              />

              <AppCard
                icon={<BarChart3 size={36} color="white" strokeWidth={2.5} />}
                title="Mini Tab"
                description="Mini Tab Statistical Analysis"
                onClick={() => handleAppClick("Mini Tab")}
              />
            </div>
          </div>

          {/* Enhanced Footer Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "32px",
              borderTop: "1px solid rgba(105, 0, 239, 0.1)",
              animation: "fadeIn 0.6s ease-out 0.5s backwards",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10B981",
                    borderRadius: "50%",
                    boxShadow: "0 0 8px rgba(16, 185, 129, 0.5)",
                  }}
                ></div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#6B7280",
                    fontWeight: "500",
                  }}
                >
                  All Systems Operational
                </span>
              </div>
              <div style={{ fontSize: "14px", color: "#9CA3AF" }}>•</div>
              <span style={{ fontSize: "14px", color: "#9CA3AF" }}>
                Last updated: Today
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#9CA3AF",
                  margin: 0,
                }}
              >
                Need help?{" "}
                <a
                  href="#"
                  style={{
                    color: "#3B82F6",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
