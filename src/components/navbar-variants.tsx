import {
  Search,
  Bell,
  User,
  Menu,
  Settings,
  Mail,
  ShoppingCart,
  Heart,
  ChevronDown,
} from "lucide-react";

export default function NavbarVariants() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        padding: "100px 80px 80px 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 12px 0",
            }}
          >
            Navbar Style Variants
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Explore 12 different navigation bar styles
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "32px",
          }}
        >
          {/* Variant 1: Simple Light */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 1: Simple Light
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6B7280",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                style={{
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                  background: "#3B82F6",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>
            </nav>
          </div>

          {/* Variant 2: Dark Solid */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 2: Dark Solid
            </h3>
            <nav
              style={{
                background: "#1f2937",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ fontSize: "20px", fontWeight: "700", color: "white" }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#9CA3AF",
                  }}
                >
                  <Search size={20} />
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#9CA3AF",
                    position: "relative",
                  }}
                >
                  <Bell size={20} />
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "8px",
                      height: "8px",
                      background: "#ef4444",
                      borderRadius: "50%",
                    }}
                  />
                </button>
              </div>
            </nav>
          </div>

          {/* Variant 3: Gradient */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 3: Gradient
            </h3>
            <nav
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #8b3dff 100%)",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 8px 24px rgba(105, 0, 239, 0.3)",
              }}
            >
              <div
                style={{ fontSize: "20px", fontWeight: "700", color: "white" }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "rgba(255,255,255,0.9)",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                style={{
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#3B82F6",
                  background: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </nav>
          </div>

          {/* Variant 4: With Search Bar */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 4: With Search Bar
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div style={{ flex: 1, maxWidth: "400px", position: "relative" }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6B7280",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "10px 12px 10px 40px",
                    fontSize: "14px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6B7280",
                  }}
                >
                  <Bell size={20} />
                </button>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#3B82F6",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </nav>
          </div>

          {/* Variant 5: With Icons */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 5: With Icons
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <button
                  style={{
                    padding: "10px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    background: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Search size={16} />
                  Search
                </button>
                <button
                  style={{
                    padding: "10px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    background: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    position: "relative",
                  }}
                >
                  <Bell size={16} />
                  Notifications
                  <span
                    style={{
                      padding: "2px 6px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "white",
                      background: "#ef4444",
                      borderRadius: "10px",
                    }}
                  >
                    3
                  </span>
                </button>
                <button
                  style={{
                    padding: "10px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    background: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Settings size={16} />
                  Settings
                </button>
              </div>
            </nav>
          </div>

          {/* Variant 6: Minimal Bottom Border */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 6: Minimal Bottom Border
            </h3>
            <nav
              style={{
                background: "white",
                borderBottom: "1px solid #e5e7eb",
                borderRadius: "12px 12px 0 0",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "0" }}>
                {["Home", "About", "Services", "Contact"].map((item, idx) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: idx === 0 ? "#3B82F6" : "#6B7280",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "12px 16px",
                      borderBottom:
                        idx === 0
                          ? "2px solid #3B82F6"
                          : "2px solid transparent",
                      marginBottom: "-17px",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div style={{ width: "100px" }} />
            </nav>
          </div>

          {/* Variant 7: Two-Row */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 7: Two-Row Layout
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  borderBottom: "1px solid #e5e7eb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#3B82F6",
                  }}
                >
                  Logo
                </div>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#6B7280",
                    }}
                  >
                    <Search size={20} />
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#6B7280",
                    }}
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#3B82F6",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "12px 24px",
                  display: "flex",
                  gap: "24px",
                }}
              >
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6B7280",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Variant 8: E-commerce */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 8: E-commerce
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Store
              </div>
              <div style={{ flex: 1, maxWidth: "500px", position: "relative" }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6B7280",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  style={{
                    width: "100%",
                    padding: "10px 12px 10px 40px",
                    fontSize: "14px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6B7280",
                    position: "relative",
                  }}
                >
                  <Heart size={22} />
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6B7280",
                    position: "relative",
                  }}
                >
                  <ShoppingCart size={22} />
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      padding: "2px 6px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "white",
                      background: "#3B82F6",
                      borderRadius: "10px",
                    }}
                  >
                    2
                  </span>
                </button>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#3B82F6",
                    background: "transparent",
                    border: "2px solid #3B82F6",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Sign In
                </button>
              </div>
            </nav>
          </div>

          {/* Variant 9: With Dropdown */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 9: With Dropdown Menu
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div
                style={{ display: "flex", gap: "24px", alignItems: "center" }}
              >
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Home
                </a>
                <button
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Products
                  <ChevronDown size={16} />
                </button>
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  About
                </a>
                <a
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6B7280",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Contact
                </a>
              </div>
              <button
                style={{
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                  background: "#3B82F6",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </nav>
          </div>

          {/* Variant 10: Mobile Menu */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 10: Mobile-Friendly
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6B7280",
                }}
              >
                <Menu size={24} />
              </button>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6B7280",
                  }}
                >
                  <Search size={20} />
                </button>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#3B82F6",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </div>
            </nav>
          </div>

          {/* Variant 11: Transparent Overlay */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 11: Transparent/Glass
            </h3>
            <nav
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                style={{
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                  background: "#3B82F6",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(105, 0, 239, 0.3)",
                }}
              >
                Get Started
              </button>
            </nav>
          </div>

          {/* Variant 12: Centered */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Variant 12: Centered Layout
            </h3>
            <nav
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#3B82F6",
                }}
              >
                Logo
              </div>
              <div style={{ display: "flex", gap: "32px" }}>
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6B7280",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
