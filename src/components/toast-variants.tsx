import { useState } from "react";
import {
  Check,
  X,
  Info,
  AlertTriangle,
  Bell,
  Mail,
  Upload,
  Download,
  Heart,
  Star,
} from "lucide-react";
import { CopyButton } from "./copy-button";
import { toastCode } from "./toastCodeSnippets";

export default function ToastVariants() {
  const [toasts, setToasts] = useState<{ id: number; type: string }[]>([]);

  const showToast = (type: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const ToastContainer = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "400px",
      }}
    >
      {children}
    </div>
  );

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
            Toast Notification Variants
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Click buttons to preview 12 different toast notification styles
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {/* Variant 1 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Success - Basic
              </h3>

              <CopyButton
                code={toastCode.successBasicToastCode}
                variantId="toast-success-basic"
              />
            </div>
            <button
              onClick={() => showToast("success-basic")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#10b981",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 2 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Error - Solid
              </h3>

              <CopyButton
                code={toastCode.errorSolidToastCode}
                variantId="toast-error-solid"
              />
            </div>
            <button
              onClick={() => showToast("error-solid")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#ef4444",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 3 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Info - Light
              </h3>

              <CopyButton
                code={toastCode.infoLightToastCode}
                variantId="toast-info-light"
              />
            </div>
            <button
              onClick={() => showToast("info-light")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 4 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Warning - Outlined
              </h3>

              <CopyButton
                code={toastCode.warningOutlinedToastCode}
                variantId="toast-warning-outlined"
              />
            </div>
            <button
              onClick={() => showToast("warning-outlined")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#f59e0b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 5 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Purple - Gradient
              </h3>

              <CopyButton
                code={toastCode.purpleGradientToastCode}
                variantId="toast-purple-gradient"
              />
            </div>
            <button
              onClick={() => showToast("purple-gradient")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 6 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Dark Theme
              </h3>

              <CopyButton
                code={toastCode.darkToastCode}
                variantId="toast-dark-theme"
              />
            </div>
            <button
              onClick={() => showToast("dark")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#111827",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 7 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                With Action
              </h3>

              <CopyButton
                code={toastCode.actionToastCode}
                variantId="toast-with-action"
              />
            </div>
            <button
              onClick={() => showToast("with-action")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 8 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Notification
              </h3>

              <CopyButton
                code={toastCode.notificationToastCode}
                variantId="toast-notification"
              />
            </div>
            <button
              onClick={() => showToast("notification")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 9 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Upload Progress
              </h3>

              <CopyButton
                code={toastCode.uploadToastCode}
                variantId="toast-success-basic"
              />
            </div>
            <button
              onClick={() => showToast("upload")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 10 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Compact
              </h3>

              <CopyButton
                code={toastCode.compactToastCode}
                variantId="toast-compact"
              />
            </div>
            <button
              onClick={() => showToast("compact")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 11 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Like Notification
              </h3>

              <CopyButton
                code={toastCode.likeToastCode}
                variantId="toast-like"
              />
            </div>
            <button
              onClick={() => showToast("like")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>

          {/* Variant 12 */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Achievement
              </h3>

              <CopyButton
                code={toastCode.achievementToastCode}
                variantId="toast-achievement"
              />
            </div>
            <button
              onClick={() => showToast("achievement")}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#6900ef",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Show Toast
            </button>
          </div>
        </div>
      </div>

      {/* Toast Containers */}
      <ToastContainer>
        {toasts.map((toast) => {
          if (toast.type === "success-basic") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  border: "1px solid #10b981",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Check size={20} color="#10b981" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#111827",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  Changes saved successfully
                </p>
                <button
                  onClick={() =>
                    setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  <X size={16} color="#6B7280" />
                </button>
              </div>
            );
          }

          if (toast.type === "error-solid") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "#ef4444",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <X size={20} color="white" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "white",
                    margin: 0,
                    flex: 1,
                    fontWeight: "500",
                  }}
                >
                  Error: Action failed
                </p>
              </div>
            );
          }

          if (toast.type === "info-light") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "#dbeafe",
                  border: "1px solid #3b82f6",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Info size={20} color="#3b82f6" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#1e40af",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  New update available
                </p>
              </div>
            );
          }

          if (toast.type === "warning-outlined") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  border: "2px solid #f59e0b",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <AlertTriangle size={20} color="#f59e0b" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#92400e",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  Warning: Low storage space
                </p>
              </div>
            );
          }

          if (toast.type === "purple-gradient") {
            return (
              <div
                key={toast.id}
                style={{
                  background:
                    "linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 8px 24px rgba(105, 0, 239, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Bell size={20} color="white" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "white",
                    margin: 0,
                    flex: 1,
                    fontWeight: "500",
                  }}
                >
                  Welcome to premium!
                </p>
              </div>
            );
          }

          if (toast.type === "dark") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "#1f2937",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Check size={20} color="#10b981" />
                <p
                  style={{
                    fontSize: "14px",
                    color: "white",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  Task completed
                </p>
                <button
                  onClick={() =>
                    setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  <X size={16} color="#9CA3AF" />
                </button>
              </div>
            );
          }

          if (toast.type === "with-action") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Mail size={20} color="#6900ef" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#111827",
                      margin: 0,
                      flex: 1,
                      fontWeight: "500",
                    }}
                  >
                    New message received
                  </p>
                </div>
                <button
                  style={{
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6900ef",
                    background: "#f3e8ff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  View Message
                </button>
              </div>
            );
          }

          if (toast.type === "notification") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#f3e8ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Bell size={20} color="#6900ef" />
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#111827",
                      margin: "0 0 4px 0",
                      fontWeight: "600",
                    }}
                  >
                    New Notification
                  </p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
                    You have a new notification
                  </p>
                </div>
              </div>
            );
          }

          if (toast.type === "upload") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <Upload size={20} color="#6900ef" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#111827",
                      margin: 0,
                      flex: 1,
                      fontWeight: "500",
                    }}
                  >
                    Uploading file...
                  </p>
                  <span style={{ fontSize: "13px", color: "#6B7280" }}>
                    75%
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    background: "#e5e7eb",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "100%",
                      background: "#6900ef",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
              </div>
            );
          }

          if (toast.type === "compact") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "#111827",
                  borderRadius: "6px",
                  padding: "10px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Check size={16} color="#10b981" />
                <p style={{ fontSize: "13px", color: "white", margin: 0 }}>
                  Saved
                </p>
              </div>
            );
          }

          if (toast.type === "like") {
            return (
              <div
                key={toast.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#fee2e2",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Heart size={18} color="#ef4444" />
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#111827",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  Someone liked your post
                </p>
              </div>
            );
          }

          if (toast.type === "achievement") {
            return (
              <div
                key={toast.id}
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 8px 24px rgba(245, 158, 11, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                <Star size={20} color="white" fill="white" />
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "white",
                      margin: "0 0 2px 0",
                      fontWeight: "600",
                    }}
                  >
                    Achievement Unlocked!
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.9)",
                      margin: 0,
                    }}
                  >
                    First milestone reached
                  </p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </ToastContainer>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
