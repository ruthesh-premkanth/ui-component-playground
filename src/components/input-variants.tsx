import { Search, Eye, DollarSign } from "lucide-react";
import { CopyButton } from "./copy-button";

export default function InputVariants() {
  const variants = [
    {
      id: "standard",
      title: "Standard Input",
      code: `<!-- Standard Input -->
<div class="input-group">
  <label class="input-label" for="email">Email Address</label>
  <input
    id="email"
    type="email"
    class="input-field"
    placeholder="Enter your email"
  />
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: system-ui, sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.input-field {
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,
      component: (
        <div>
          <label style={{ fontSize: 14, fontWeight: 500 }}>Email Address</label>
          <input
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: 12,
              marginTop: 8,
              borderRadius: 8,
              border: "1px solid #d1d5db",
            }}
          />
        </div>
      ),
    },

    {
      id: "icon-left",
      title: "Icon Left",
      code: `<!-- Input with Left Icon -->
<div class="input-group">
  <label class="input-label">Search</label>

  <div class="input-icon-left">
    <svg
      class="input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>

    <input
      type="text"
      class="input-field"
      placeholder="Search..."
    />
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-icon-left {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.input-field {
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,
      component: (
        <div>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Search
          </label>

          <div style={{ position: "relative" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
              }}
            />

            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                padding: "12px 12px 12px 40px",
                fontSize: "14px",
                color: "#111827",
                background: "#ffffff",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.3s ease",
              }}
            />
          </div>
        </div>
      ),
    },

    {
      id: "password-toggle",
      title: "Password with Icon Right",
      code: `<!-- Password Input -->
<div class="input-group">
  <label class="input-label">Password</label>

  <div class="input-icon-right">
    <input
      type="password"
      class="input-field"
      placeholder="Enter password"
    />

    <svg
      class="input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      stroke-width="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-icon-right {
  position: relative;
}

.input-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.input-field {
  width: 100%;
  padding: 12px 40px 12px 12px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #3b82f6;
}
</style>`,
      component: (
        <div>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Password
          </label>

          <div style={{ position: "relative" }}>
            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "12px 40px 12px 12px",
                fontSize: "14px",
                color: "#111827",
                background: "#ffffff",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.3s ease",
              }}
            />

            <Eye
              size={18}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      ),
    },

    {
      id: "prefix",
      title: "Input with Prefix",
      code: `<!-- Input with Prefix -->
<div class="input-group">
  <label class="input-label">Amount</label>

  <div class="input-prefix">
    <span class="input-prefix-icon">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#374151"
        stroke-width="2"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </span>

    <input
      type="number"
      class="input-field"
      placeholder="0.00"
    />
  </div>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-prefix {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  overflow: hidden;
}

.input-prefix-icon {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f3f4f6;
}

.input-field {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  color: #111827;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>`,
      component: (
        <div>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Amount
          </label>

          <div
            style={{
              display: "flex",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                background: "#f3f4f6",
              }}
            >
              <DollarSign size={16} color="#374151" />
            </span>

            <input
              type="number"
              placeholder="0.00"
              style={{
                flex: 1,
                padding: "12px",
                fontSize: "14px",
                color: "#111827",
                border: "none",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      ),
    },

    {
      id: "textarea",
      title: "Textarea",
      code: `<!-- Textarea -->
<div class="input-group">
  <label class="input-label">Message</label>

  <textarea
    class="input-textarea"
    rows="4"
    placeholder="Enter your message..."
  ></textarea>
</div>

<style>
.input-group {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.input-textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
}
</style>`,
      component: (
        <div>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Message
          </label>

          <textarea
            rows={4}
            placeholder="Enter your message..."
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "14px",
              color: "#111827",
              background: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              resize: "vertical",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "80px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 32 }}>Input Field Variants</h1>

      <div style={{ display: "grid", gap: 24 }}>
        {variants.map((variant) => (
          <div
            key={variant.id}
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 32,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <h3>{variant.title}</h3>
              <CopyButton code={variant.code} variantId={variant.id} />
            </div>
            {variant.component}
          </div>
        ))}
      </div>
    </div>
  );
}
