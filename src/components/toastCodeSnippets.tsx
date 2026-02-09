// toastCode.ts
export const toastCode = {
  successBasicToastCode: `<!-- Success Toast -->
<div class="toast-container">
  <div class="toast toast-success">
    <span class="icon">✔</span>
    <p class="toast-message">Changes saved successfully</p>
    <button class="toast-close">✕</button>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  background: #ffffff;
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-success .icon {
  color: #10b981;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #6B7280;
}

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
</style>`,
  errorSolidToastCode: `<!-- Error Toast - Solid -->
<div class="toast-container">
  <div class="toast toast-error-solid">
    <span class="icon">✖</span>
    <p class="toast-message">Error: Action failed</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-error-solid {
  background: #ef4444;
}

.toast-error-solid .icon {
  color: #ffffff;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
  font-weight: 500;
}

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
</style>`,
  infoLightToastCode: `<!-- Info Toast - Light -->
<div class="toast-container">
  <div class="toast toast-info-light">
    <span class="icon">ℹ</span>
    <p class="toast-message">New update available</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-info-light {
  background: #dbeafe;
  border: 1px solid #3b82f6;
}

.toast-info-light .icon {
  color: #3b82f6;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #1e40af;
  margin: 0;
  flex: 1;
}

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
</style>`,
  warningOutlinedToastCode: `<!-- Warning Toast - Outlined -->
<div class="toast-container">
  <div class="toast toast-warning-outlined">
    <span class="icon">⚠</span>
    <p class="toast-message">Warning: Low storage space</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-warning-outlined {
  background: #ffffff;
  border: 2px solid #f59e0b;
}

.toast-warning-outlined .icon {
  color: #f59e0b;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #92400e;
  margin: 0;
  flex: 1;
}

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
</style>`,
  purpleGradientToastCode: `<!-- Purple Gradient Toast -->
<div class="toast-container">
  <div class="toast toast-purple-gradient">
    <span class="icon">🔔</span>
    <p class="toast-message">Welcome to premium!</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-purple-gradient {
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
}

.toast-purple-gradient .icon {
  color: #ffffff;
  font-size: 18px;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
  font-weight: 500;
}

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
</style>`,
  darkToastCode: `<!-- Dark Toast -->
<div class="toast-container">
  <div class="toast toast-dark">
    <span class="icon">✔</span>
    <p class="toast-message">Task completed</p>
    <span class="close">✖</span>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-dark {
  background: #1f2937;
}

.toast-dark .icon {
  color: #10b981;
}

.toast-dark .close {
  color: #9ca3af;
  cursor: pointer;
}

.toast-message {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  flex: 1;
}

@keyframes slideIn {
  from { transform: translateX(400px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>`,
  actionToastCode: `<!-- Toast With Action -->
<div class="toast-container">
  <div class="toast toast-action">
    <div class="toast-row">
      <span class="icon">✉</span>
      <p class="toast-message">New message received</p>
    </div>
    <button class="toast-action-btn">View Message</button>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-action {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.toast-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.toast-action .icon {
  color: #6900ef;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
  font-weight: 500;
  flex: 1;
}

.toast-action-btn {
  width: 100%;
  padding: 8px;
  background: #f3e8ff;
  color: #6900ef;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
</style>`,
  notificationToastCode: `<!-- Notification Toast -->
<div class="toast-container">
  <div class="toast toast-notification">
    <div class="icon-wrap">🔔</div>
    <div>
      <p class="title">New Notification</p>
      <p class="desc">You have a new notification</p>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-notification {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon-wrap {
  width: 40px;
  height: 40px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px;
}

.desc {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  uploadToastCode: `<!-- Upload Progress Toast -->
<div class="toast-container">
  <div class="toast toast-upload">
    <div class="upload-row">
      <span class="icon">⬆</span>
      <p class="toast-message">Uploading file...</p>
      <span class="percent">75%</span>
    </div>
    <div class="progress">
      <div class="bar"></div>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-upload {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.upload-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.icon {
  color: #6900ef;
}

.percent {
  font-size: 13px;
  color: #6b7280;
}

.progress {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.bar {
  width: 75%;
  height: 100%;
  background: #6900ef;
}
</style>`,
  compactToastCode: `<!-- Compact Toast -->
<div class="toast-container">
  <div class="toast toast-compact">
    <span class="icon">✔</span>
    <p class="toast-message">Saved</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-compact {
  background: #111827;
  border-radius: 6px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.toast-compact .icon {
  color: #10b981;
}

.toast-message {
  font-size: 13px;
  color: #ffffff;
  margin: 0;
}
</style>`,
  likeToastCode: `<!-- Like Toast -->
<div class="toast-container">
  <div class="toast toast-like">
    <div class="heart">♥</div>
    <p class="toast-message">Someone liked your post</p>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
}

.toast-like {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.heart {
  width: 36px;
  height: 36px;
  background: #fee2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
}

.toast-message {
  font-size: 14px;
  color: #111827;
  margin: 0;
}
</style>`,
  achievementToastCode: `<!-- Achievement Toast -->
<div class="toast-container">
  <div class="toast toast-achievement">
    <span class="icon">★</span>
    <div class="content">
      <p class="title">Achievement Unlocked!</p>
      <p class="desc">First milestone reached</p>
    </div>
  </div>
</div>

<style>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
}

.toast {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  animation: slideIn 0.3s ease-out;
}

.toast-achievement {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.toast-achievement .icon {
  font-size: 20px;
  color: #ffffff;
}

.toast-achievement .title {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.toast-achievement .desc {
  font-size: 13px;
  color: rgba(255,255,255,0.9);
  margin: 0;
}

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
</style>`,
};
