import {
  Info,
  AlertTriangle,
  Check,
  X,
  AlertCircle,
  Bell,
  Zap,
  Heart,
  Star,
  Shield,
} from "lucide-react";
import { CopyButton } from "./copy-button";

export default function AlertVariants() {
  const variants = [
    {
      id: "info-basic",
      title: "Variant 1: Info - Basic",
      code: `<!-- Info Alert - Basic -->
<div class="alert-info-basic">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <p class="alert-message">This is an informational alert message.</p>
</div>

<style>
.alert-info-basic {
  padding: 16px;
  background: #dbeafe;
  border: 1px solid #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-info-basic .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-info-basic .alert-message {
  font-size: 14px;
  color: #1e40af;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#dbeafe",
            border: "1px solid #3b82f6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Info
            size={20}
            color="#3b82f6"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#1e40af",
                margin: 0,
                fontWeight: "500",
              }}
            >
              This is an informational alert message.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "success-title",
      title: "Variant 2: Success - With Title",
      code: `<!-- Success Alert - With Title -->
<div class="alert-success-title">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Success!</h4>
    <p class="alert-message">Your changes have been saved successfully.</p>
  </div>
</div>

<style>
.alert-success-title {
  padding: 16px;
  background: #d1fae5;
  border: 1px solid #10b981;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-title .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-success-title .alert-content {
  flex: 1;
}

.alert-success-title .alert-title {
  font-size: 14px;
  color: #047857;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-success-title .alert-message {
  font-size: 14px;
  color: #059669;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#d1fae5",
            border: "1px solid #10b981",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Check
            size={20}
            color="#10b981"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#047857",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Success!
            </h4>
            <p style={{ fontSize: "14px", color: "#059669", margin: 0 }}>
              Your changes have been saved successfully.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "warning-left-border",
      title: "Variant 3: Warning - Left Border",
      code: `<!-- Warning Alert - Left Border -->
<div class="alert-warning-border">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
  <p class="alert-message">Please review your information before proceeding.</p>
</div>

<style>
.alert-warning-border {
  padding: 16px;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-warning-border .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-warning-border .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            borderRadius: "4px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <AlertTriangle
            size={20}
            color="#f59e0b"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#92400e",
                margin: 0,
                fontWeight: "500",
              }}
            >
              Please review your information before proceeding.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "error-dismissible",
      title: "Variant 4: Error - Dismissible",
      code: `<!-- Error Alert - Dismissible -->
<div class="alert-error-dismissible">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <p class="alert-message">An error occurred while processing your request.</p>
  <button class="alert-close" onclick="this.parentElement.remove()">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991b1b" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>

<style>
.alert-error-dismissible {
  padding: 16px;
  background: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-error-dismissible .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-error-dismissible .alert-message {
  font-size: 14px;
  color: #991b1b;
  margin: 0;
  font-weight: 500;
  flex: 1;
}

.alert-error-dismissible .alert-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.alert-error-dismissible .alert-close:hover {
  transform: scale(1.1);
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#fee2e2",
            border: "1px solid #ef4444",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <AlertCircle
            size={20}
            color="#ef4444"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#991b1b",
                margin: 0,
                fontWeight: "500",
              }}
            >
              An error occurred while processing your request.
            </p>
          </div>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <X size={20} color="#991b1b" />
          </button>
        </div>
      ),
    },
    {
      id: "info-solid",
      title: "Variant 5: Info - Solid",
      code: `<!-- Info Alert - Solid -->
<div class="alert-info-solid">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <p class="alert-message">Check out the latest updates and features.</p>
</div>

<style>
.alert-info-solid {
  padding: 16px;
  background: #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-info-solid .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-info-solid .alert-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#3b82f6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Info
            size={20}
            color="#ffffff"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#ffffff",
                margin: 0,
                fontWeight: "500",
              }}
            >
              Check out the latest updates and features.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "success-minimal",
      title: "Variant 6: Success - Minimal",
      code: `<!-- Success Alert - Minimal -->
<div class="alert-success-minimal">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Payment Successful</h4>
    <p class="alert-message">Your payment has been processed. Reference: #12345</p>
    <button class="alert-action">View Receipt</button>
  </div>
</div>

<style>
.alert-success-minimal {
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-minimal .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-success-minimal .alert-content {
  flex: 1;
}

.alert-success-minimal .alert-title {
  font-size: 14px;
  color: #111827;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-success-minimal .alert-message {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 12px 0;
}

.alert-success-minimal .alert-action {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #10b981;
  background: transparent;
  border: 1px solid #10b981;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-success-minimal .alert-action:hover {
  background: #d1fae5;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Check
            size={20}
            color="#10b981"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#111827",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Payment Successful
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 12px 0",
              }}
            >
              Your payment has been processed. Reference: #12345
            </p>
            <button
              style={{
                padding: "6px 12px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#10b981",
                background: "transparent",
                border: "1px solid #10b981",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              View Receipt
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "warning-top-border",
      title: "Variant 7: Warning - Top Border",
      code: `<!-- Warning Alert - Top Border -->
<div class="alert-warning-top">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Storage Almost Full</h4>
    <p class="alert-message">You're using 95% of your storage. Consider upgrading your plan.</p>
  </div>
</div>

<style>
.alert-warning-top {
  padding: 16px;
  background: #fffbeb;
  border-top: 3px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-warning-top .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-warning-top .alert-content {
  flex: 1;
}

.alert-warning-top .alert-title {
  font-size: 14px;
  color: #78350f;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-warning-top .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#fffbeb",
            borderTop: "3px solid #f59e0b",
            borderRadius: "4px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <AlertTriangle
            size={20}
            color="#f59e0b"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#78350f",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Storage Almost Full
            </h4>
            <p style={{ fontSize: "14px", color: "#92400e", margin: 0 }}>
              You're using 95% of your storage. Consider upgrading your plan.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "error-outlined",
      title: "Variant 8: Error - Outlined",
      code: `<!-- Error Alert - Outlined -->
<div class="alert-error-outlined">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Connection Failed</h4>
    <p class="alert-message">Unable to connect to the server. Please try again.</p>
  </div>
</div>

<style>
.alert-error-outlined {
  padding: 16px;
  background: #ffffff;
  border: 2px solid #ef4444;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-error-outlined .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-error-outlined .alert-content {
  flex: 1;
}

.alert-error-outlined .alert-title {
  font-size: 14px;
  color: #991b1b;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-error-outlined .alert-message {
  font-size: 14px;
  color: #dc2626;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#ffffff",
            border: "2px solid #ef4444",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <AlertCircle
            size={20}
            color="#ef4444"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#991b1b",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Connection Failed
            </h4>
            <p style={{ fontSize: "14px", color: "#dc2626", margin: 0 }}>
              Unable to connect to the server. Please try again.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "purple-info",
      title: "Variant 9: Purple Info",
      code: `<!-- Purple Info Alert -->
<div class="alert-purple-info">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">New Feature Available</h4>
    <p class="alert-message">Try our new dashboard with enhanced analytics.</p>
  </div>
</div>

<style>
.alert-purple-info {
  padding: 16px;
  background: #f3e8ff;
  border: 1px solid #3B82F6;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-purple-info .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-purple-info .alert-content {
  flex: 1;
}

.alert-purple-info .alert-title {
  font-size: 14px;
  color: #5500cc;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-purple-info .alert-message {
  font-size: 14px;
  color: #3B82F6;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#f3e8ff",
            border: "1px solid #3B82F6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Bell
            size={20}
            color="#3B82F6"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#5500cc",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              New Feature Available
            </h4>
            <p style={{ fontSize: "14px", color: "#3B82F6", margin: 0 }}>
              Try our new dashboard with enhanced analytics.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "gradient-bg",
      title: "Variant 10: Gradient Background",
      code: `<!-- Gradient Background Alert -->
<div class="alert-gradient">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Premium Feature</h4>
    <p class="alert-message">Upgrade to unlock advanced analytics and reporting.</p>
  </div>
</div>

<style>
.alert-gradient {
  padding: 16px;
  background: linear-gradient(135deg, #3B82F6 0%, #8b3dff 100%);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-gradient .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-gradient .alert-content {
  flex: 1;
}

.alert-gradient .alert-title {
  font-size: 14px;
  color: #ffffff;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-gradient .alert-message {
  font-size: 14px;
  color: #f3e8ff;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "linear-gradient(135deg, #3B82F6 0%, #8b3dff 100%)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
            boxShadow: "0 4px 12px rgba(105, 0, 239, 0.3)",
          }}
        >
          <Zap
            size={20}
            color="#ffffff"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#ffffff",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Premium Feature
            </h4>
            <p style={{ fontSize: "14px", color: "#f3e8ff", margin: 0 }}>
              Upgrade to unlock advanced analytics and reporting.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "soft-elevated",
      title: "Variant 11: Soft Elevated",
      code: `<!-- Soft Elevated Alert -->
<div class="alert-soft-elevated">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
  <p class="alert-message">Your profile has been updated successfully!</p>
</div>

<style>
.alert-soft-elevated {
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-soft-elevated .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-soft-elevated .alert-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#ffffff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Heart
            size={20}
            color="#10b981"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "14px",
                color: "#111827",
                margin: 0,
                fontWeight: "500",
              }}
            >
              Your profile has been updated successfully!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "compact",
      title: "Variant 12: Compact",
      code: `<!-- Compact Alert -->
<div class="alert-compact">
  <svg class="alert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  <p class="alert-message">You have 3 new notifications</p>
</div>

<style>
.alert-compact {
  padding: 12px 16px;
  background: #dbeafe;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-compact .alert-icon {
  flex-shrink: 0;
}

.alert-compact .alert-message {
  font-size: 13px;
  color: #1e40af;
  margin: 0;
  font-weight: 500;
  flex: 1;
}
</style>`,
      component: (
        <div
          style={{
            padding: "12px 16px",
            background: "#dbeafe",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Star size={16} color="#3b82f6" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "13px",
                color: "#1e40af",
                margin: 0,
                fontWeight: "500",
              }}
            >
              You have 3 new notifications
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "icon-badge",
      title: "Variant 13: Icon Badge Style",
      code: `<!-- Icon Badge Alert -->
<div class="alert-icon-badge">
  <div class="alert-badge">
    <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">Verification Complete</h4>
    <p class="alert-message">Your account has been verified successfully.</p>
  </div>
</div>

<style>
.alert-icon-badge {
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-icon-badge .alert-badge {
  width: 40px;
  height: 40px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.alert-icon-badge .alert-badge .alert-icon {
  stroke: #ffffff;
}

.alert-icon-badge .alert-content {
  flex: 1;
  padding-top: 4px;
}

.alert-icon-badge .alert-title {
  font-size: 14px;
  color: #111827;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-icon-badge .alert-message {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#f9fafb",
            borderRadius: "12px",
            display: "flex",
            alignItems: "start",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "#10b981",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Check size={20} color="#ffffff" />
          </div>
          <div style={{ flex: 1, paddingTop: "4px" }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#111827",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Verification Complete
            </h4>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              Your account has been verified successfully.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      title: "Variant 14: Security Alert",
      code: `<!-- Security Alert -->
<div class="alert-security">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">Security Alert</h4>
    <p class="alert-message">New login detected from Chrome on Windows. If this wasn't you, please change your password immediately.</p>
  </div>
</div>

<style>
.alert-security {
  padding: 16px;
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-security .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-security .alert-content {
  flex: 1;
}

.alert-security .alert-title {
  font-size: 14px;
  color: #78350f;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-security .alert-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#fffbeb",
            borderLeft: "4px solid #f59e0b",
            borderRadius: "4px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Shield
            size={20}
            color="#f59e0b"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#78350f",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              Security Alert
            </h4>
            <p style={{ fontSize: "14px", color: "#92400e", margin: 0 }}>
              New login detected from Chrome on Windows. If this wasn't you,
              please change your password immediately.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "dark-mode",
      title: "Variant 15: Dark Mode",
      code: `<!-- Dark Mode Alert -->
<div class="alert-dark-mode">
  <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
  <div class="alert-content">
    <h4 class="alert-title">System Maintenance</h4>
    <p class="alert-message">Scheduled maintenance on Sunday, 2AM - 4AM UTC.</p>
  </div>
</div>

<style>
.alert-dark-mode {
  padding: 16px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.alert-dark-mode .alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-dark-mode .alert-content {
  flex: 1;
}

.alert-dark-mode .alert-title {
  font-size: 14px;
  color: #f9fafb;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.alert-dark-mode .alert-message {
  font-size: 14px;
  color: #d1d5db;
  margin: 0;
}
</style>`,
      component: (
        <div
          style={{
            padding: "16px",
            background: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "8px",
            display: "flex",
            alignItems: "start",
            gap: "12px",
          }}
        >
          <Info
            size={20}
            color="#60a5fa"
            style={{ flexShrink: 0, marginTop: "2px" }}
          />
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "14px",
                color: "#f9fafb",
                margin: "0 0 4px 0",
                fontWeight: "600",
              }}
            >
              System Maintenance
            </h4>
            <p style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
              Scheduled maintenance on Sunday, 2AM - 4AM UTC.
            </p>
          </div>
        </div>
      ),
    },
  ];

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
            Alert Style Variants
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Explore 15 different alert and notification styles
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {variants.map((variant) => (
            <div
              key={variant.id}
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
                  {variant.title}
                </h3>
                <CopyButton code={variant.code} variantId={variant.id} />
              </div>
              {variant.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
