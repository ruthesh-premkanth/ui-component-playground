export const emptyStateCode = {
  simpleInboxEmptyCode: `<!-- Empty State: Simple Inbox -->
<div class="empty-card">
  <div class="icon">📥</div>
  <h3>No Messages</h3>
  <p>Your inbox is empty</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.empty-card .icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

.empty-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

.empty-card p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  documentEmptyCode: `<!-- Empty State: Documents -->
<div class="empty-card">
  <div class="icon">📄</div>
  <h3>No Documents</h3>
  <p>Get started by creating a new document</p>
  <button class="primary-btn">Create Document</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.primary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  teamEmptyCode: `<!-- Empty State: Team -->
<div class="empty-card">
  <div class="icon-wrap">👥</div>
  <h3>No Team Members</h3>
  <p>Invite people to collaborate</p>
  <button class="secondary-btn">Invite Team</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon-wrap {
  width: 80px;
  height: 80px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.secondary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  searchEmptyCode: `<!-- Empty State: Search -->
<div class="empty-card">
  <div class="icon">🔍</div>
  <h3>No Results Found</h3>
  <p>Try adjusting your search to find what you're looking for</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  galleryEmptyCode: `<!-- Empty State: Gallery -->
<div class="empty-card">
  <div class="image-wrap">🖼️</div>
  <h3>No Photos Yet</h3>
  <p>Upload your first photo to get started</p>
  <button class="primary-blue-btn">➕ Upload Photo</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.image-wrap {
  width: 80px;
  height: 80px;
  background: #dbeafe;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px 0;
}

.primary-blue-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  cartEmptyCode: `<!-- Empty State: Shopping Cart -->
<div class="empty-card">
  <div class="icon">🛍️</div>
  <h3>Your Cart is Empty</h3>
  <p>Add items to get started</p>
  <button class="primary-green-btn">Start Shopping</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-green-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  minimalEmptyCode: `<!-- Empty State: Minimal -->
<div class="empty-card minimal">
  <h3>No data available</h3>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.minimal h3 {
  font-size: 16px;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
}
</style>`,
  mailIllustrationEmptyCode: `<!-- Empty State: Illustration -->
<div class="empty-card">
  <div class="illustration">✉️</div>
  <h3>No Messages</h3>
  <p>When you receive messages, they'll appear here</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.illustration {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  margin: 0 auto 20px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  calendarEmptyCode: `<!-- Empty State: Calendar -->
<div class="empty-card">
  <div class="icon">📅</div>
  <h3>No Events Scheduled</h3>
  <p>Create your first event to get started</p>
  <button class="primary-btn">➕ Add Event</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  folderEmptyCode: `<!-- Empty State: Folder -->
<div class="empty-card">
  <div class="folder-wrap">📁</div>
  <h3>Folder is Empty</h3>
  <p>Drag and drop files here or click to upload</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.folder-wrap {
  width: 80px;
  height: 80px;
  background: #fef3c7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  databaseEmptyCode: `<!-- Empty State: Database -->
<div class="empty-card">
  <div class="icon">🗄️</div>
  <h3>No Data</h3>
  <p>Start by importing or creating new records</p>
  <div class="btn-row">
    <button class="secondary-btn">Import</button>
    <button class="primary-btn">Create New</button>
  </div>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.btn-row {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.primary-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.secondary-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  cloudEmptyCode: `<!-- Empty State: Cloud -->
<div class="empty-card">
  <div class="cloud-wrap">☁️</div>
  <h3>Nothing in Cloud</h3>
  <p>Your cloud storage is empty</p>
  <small>Upload files to access them anywhere</small>
  <button class="primary-blue-btn">Upload Files</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.cloud-wrap {
  width: 80px;
  height: 80px;
  background: #dbeafe;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px;
}

small {
  display: block;
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 20px;
}

.primary-blue-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  favoritesEmptyCode: `<!-- Empty State: Favorites -->
<div class="empty-card">
  <div class="icon heart">❤️</div>
  <h3>No Favorites Yet</h3>
  <p>Items you favorite will appear here</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.heart {
  color: #ef4444;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
  reviewsEmptyCode: `<!-- Empty State: Reviews -->
<div class="empty-card">
  <div class="review-wrap">⭐</div>
  <h3>No Reviews</h3>
  <p>Be the first to leave a review</p>
  <button class="primary-yellow-btn">Write Review</button>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.review-wrap {
  width: 80px;
  height: 80px;
  background: #fef3c7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 20px;
}

.primary-yellow-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #f59e0b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>`,
  notificationsEmptyCode: `<!-- Empty State: Notifications -->
<div class="empty-card">
  <div class="notify-wrap">🔔</div>
  <h3>All Caught Up!</h3>
  <p>You have no new notifications</p>
</div>

<style>
.empty-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.notify-wrap {
  width: 80px;
  height: 80px;
  background: #f3e8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 16px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
}

p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}
</style>`,
};
