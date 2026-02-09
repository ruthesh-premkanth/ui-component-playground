import { useState } from "react";
import LoginPage from "./components/login-page";
import CardVariants from "./components/card-variants";
import TabVariants from "./components/tab-variants";
import ButtonVariants from "./components/button-variants";
import InputVariants from "./components/input-variants";
import TableVariants from "./components/table-variants";
import ModalVariants from "./components/modal-variants";
import AlertVariants from "./components/alert-variants";
import ToastVariants from "./components/toast-variants";
import SidebarVariants from "./components/sidebar-variants";
import NavbarVariants from "./components/navbar-variants";
import EmptyStateVariants from "./components/empty-state-variants";

type PageType =
  | "login"
  | "cards"
  | "tabs"
  | "buttons"
  | "inputs"
  | "tables"
  | "modals"
  | "alerts"
  | "toasts"
  | "sidebars"
  | "navbars"
  | "empty";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("cards");

  const navItems: { id: PageType; label: string }[] = [
    // { id: 'login', label: 'Login' },
    { id: "cards", label: "Cards" },
    { id: "tabs", label: "Tabs" },
    { id: "buttons", label: "Buttons" },
    { id: "inputs", label: "Inputs" },
    { id: "tables", label: "Tables" },
    { id: "modals", label: "Modals" },
    { id: "alerts", label: "Alerts" },
    { id: "toasts", label: "Toasts" },
    // { id: "sidebars", label: "Sidebars" },
    // { id: "navbars", label: "Navbars" },
    { id: "empty", label: "Empty States" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "cards":
        return <CardVariants />;
      case "tabs":
        return <TabVariants />;
      case "buttons":
        return <ButtonVariants />;
      case "inputs":
        return <InputVariants />;
      case "tables":
        return <TableVariants />;
      case "modals":
        return <ModalVariants />;
      case "alerts":
        return <AlertVariants />;
      case "toasts":
        return <ToastVariants />;
      case "sidebars":
        return <SidebarVariants />;
      case "navbars":
        return <NavbarVariants />;
      case "empty":
        return <EmptyStateVariants />;
      default:
        return <CardVariants />;
    }
  };

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              color: currentPage === item.id ? "white" : "#6900ef",
              background:
                currentPage === item.id
                  ? "linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)"
                  : "transparent",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow:
                currentPage === item.id
                  ? "0 4px 12px rgba(105, 0, 239, 0.3)"
                  : "none",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Page Content */}
      {renderPage()}
    </div>
  );
}
