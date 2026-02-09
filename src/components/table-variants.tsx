import { MoreVertical, Edit, Trash2, Eye, Check, X, Star } from "lucide-react";
import { CopyButton } from "./copy-button";
import { tableCode } from "./tableCodeSnippets";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
  },
];
const thStyle = {
  padding: "12px",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: "600",
  color: "#374151",
  border: "1px solid #e5e7eb",
};

const tdDark = {
  padding: "12px",
  fontSize: "14px",
  color: "#111827",
  border: "1px solid #e5e7eb",
};

const tdMuted = {
  ...tdDark,
  color: "#6B7280",
};

export default function TableVariants() {
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
            Table Style Variants
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Explore 12 different table styles for displaying data
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "32px",
          }}
        >
          {/* Variant 1: Basic Bordered */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 1: Basic Bordered
              </h3>

              <CopyButton
                code={tableCode.basicBordered}
                variantId="table-basic-bordered"
              />
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid #e5e7eb",
              }}
            >
              <thead>
                <tr style={{ background: "#f9fafb" }}>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Role</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td style={tdDark}>{row.name}</td>
                    <td style={tdMuted}>{row.email}</td>
                    <td style={tdDark}>{row.role}</td>
                    <td style={tdDark}>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 2: Striped Rows */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 2: Striped Rows
              </h3>

              <CopyButton
                code={tableCode.stripedTableCode}
                variantId="table-striped"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, idx) => (
                  <tr
                    key={row.id}
                    style={{ background: idx % 2 === 0 ? "white" : "#f9fafb" }}
                  >
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 3: Hoverable Rows */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 3: Hoverable Rows
              </h3>

              <CopyButton
                code={tableCode.hoverableTableCode}
                variantId="table-hoverable"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr
                    key={row.id}
                    style={{ cursor: "pointer", transition: "background 0.2s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f3e8ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "white")
                    }
                  >
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 4: With Status Badges */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 4: With Status Badges
              </h3>

              <CopyButton
                code={tableCode.statusBadgeTableCode}
                variantId="table-status-badges"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          fontSize: "12px",
                          fontWeight: "600",
                          color:
                            row.status === "Active" ? "#10b981" : "#ef4444",
                          background:
                            row.status === "Active" ? "#d1fae5" : "#fee2e2",
                          borderRadius: "12px",
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 5: With Actions */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 5: With Actions
              </h3>

              <CopyButton
                code={tableCode.actionsTableCode}
                variantId="table-actions"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "right",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        borderBottom: "1px solid #e5e7eb",
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          style={{
                            padding: "6px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#6900ef",
                          }}
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          style={{
                            padding: "6px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#6900ef",
                          }}
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          style={{
                            padding: "6px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "#ef4444",
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 6: Compact */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 6: Compact
              </h3>

              <CopyButton
                code={tableCode.compactTableCode}
                variantId="table-compact"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "8px",
                        fontSize: "12px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        fontSize: "12px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        fontSize: "12px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        fontSize: "12px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 7: Card Style */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 7: Card Style
              </h3>

              <CopyButton
                code={tableCode.cardStyleTableCode}
                variantId="table-card-style"
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {sampleData.map((row) => (
                <div
                  key={row.id}
                  style={{
                    padding: "16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "4px",
                      }}
                    >
                      Name
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#111827",
                        fontWeight: "500",
                      }}
                    >
                      {row.name}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </div>
                    <div style={{ fontSize: "14px", color: "#111827" }}>
                      {row.email}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "4px",
                      }}
                    >
                      Role
                    </div>
                    <div style={{ fontSize: "14px", color: "#111827" }}>
                      {row.role}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "4px",
                      }}
                    >
                      Status
                    </div>
                    <div style={{ fontSize: "14px", color: "#111827" }}>
                      {row.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 8: Dark Header */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 8: Dark Header
              </h3>

              <CopyButton
                code={tableCode.darkHeaderTableCode}
                variantId="table-dark-header"
              />
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr style={{ background: "#6900ef" }}>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 9: With Checkbox */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 9: With Checkbox
              </h3>

              <CopyButton
                code={tableCode.checkboxTableCode}
                variantId="table-checkbox"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                      width: "40px",
                    }}
                  >
                    <input type="checkbox" style={{ cursor: "pointer" }} />
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      <input type="checkbox" style={{ cursor: "pointer" }} />
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 10: Minimal */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 10: Minimal
              </h3>

              <CopyButton
                code={tableCode.minimalTableCode}
                variantId="table-minimal"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px 0",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px 0",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px 0",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px 0",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, idx) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#111827",
                        borderTop: idx === 0 ? "none" : "1px solid #f3f4f6",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderTop: idx === 0 ? "none" : "1px solid #f3f4f6",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#111827",
                        borderTop: idx === 0 ? "none" : "1px solid #f3f4f6",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#111827",
                        borderTop: idx === 0 ? "none" : "1px solid #f3f4f6",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Variant 11: Rounded Bordered */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 11: Rounded Bordered
              </h3>

              <CopyButton
                code={tableCode.roundedBorderedTableCode}
                variantId="table-rounded-bordered"
              />
            </div>
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f9fafb" }}>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      Name
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      Email
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      Role
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.map((row, idx) => (
                    <tr key={row.id}>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "#111827",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        {row.name}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "#6B7280",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        {row.email}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "#111827",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        {row.role}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          color: "#111827",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Variant 12: Colorful Headers */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
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
                Variant 12: Colorful Headers
              </h3>

              <CopyButton
                code={tableCode.colorfulHeaderTableCode}
                variantId="table-colorful-headers"
              />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#111827",
                      background: "#f3e8ff",
                      borderBottom: "3px solid #6900ef",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#111827",
                      background: "#dbeafe",
                      borderBottom: "3px solid #3b82f6",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#111827",
                      background: "#d1fae5",
                      borderBottom: "3px solid #10b981",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#111827",
                      background: "#fee2e2",
                      borderBottom: "3px solid #ef4444",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#6B7280",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.email}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.role}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        fontSize: "14px",
                        color: "#111827",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
