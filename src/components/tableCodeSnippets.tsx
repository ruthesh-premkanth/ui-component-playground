export const tableCode = {
  basicBordered: `<!-- Basic Bordered Table -->
<div class="table-card">
  <table class="basic-bordered-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.basic-bordered-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table thead tr {
  background: #f9fafb;
}

.basic-bordered-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table td {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #e5e7eb;
}

.basic-bordered-table td:nth-child(1),
.basic-bordered-table td:nth-child(3),
.basic-bordered-table td:nth-child(4) {
  color: #111827;
}

.basic-bordered-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,
  stripedTableCode: `<!-- Striped Rows Table -->
<div class="table-card">
  <table class="striped-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
      <tr>
        <td>Robert Fox</td>
        <td>robert@example.com</td>
        <td>Editor</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.striped-table {
  width: 100%;
  border-collapse: collapse;
}

.striped-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.striped-table td {
  padding: 12px;
  font-size: 14px;
}

.striped-table td:nth-child(1),
.striped-table td:nth-child(3),
.striped-table td:nth-child(4) {
  color: #111827;
}

.striped-table td:nth-child(2) {
  color: #6B7280;
}

.striped-table tbody tr:nth-child(even) {
  background: #f9fafb;
}
</style>`,
  hoverableTableCode: `<!-- Hoverable Rows Table -->
<div class="table-card">
  <table class="hoverable-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
      <tr>
        <td>Robert Fox</td>
        <td>robert@example.com</td>
        <td>Editor</td>
        <td>Active</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hoverable-table {
  width: 100%;
  border-collapse: collapse;
}

.hoverable-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.hoverable-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.hoverable-table td:nth-child(1),
.hoverable-table td:nth-child(3),
.hoverable-table td:nth-child(4) {
  color: #111827;
}

.hoverable-table td:nth-child(2) {
  color: #6B7280;
}

.hoverable-table tbody tr {
  cursor: pointer;
  transition: background 0.2s ease;
}

.hoverable-table tbody tr:hover {
  background: #f3e8ff;
}
</style>`,
  statusBadgeTableCode: `<!-- Table with Status Badges -->
<div class="table-card">
  <table class="status-badge-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>
          <span class="badge badge-active">Active</span>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>
          <span class="badge badge-inactive">Inactive</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.status-badge-table {
  width: 100%;
  border-collapse: collapse;
}

.status-badge-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.status-badge-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.status-badge-table td:nth-child(1),
.status-badge-table td:nth-child(3) {
  color: #111827;
}

.status-badge-table td:nth-child(2) {
  color: #6B7280;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
}

.badge-active {
  color: #10b981;
  background: #d1fae5;
}

.badge-inactive {
  color: #ef4444;
  background: #fee2e2;
}
</style>`,
  actionsTableCode: `<!-- Table with Actions -->
<div class="table-card">
  <table class="actions-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th class="actions-header">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td class="actions-cell">
          <div class="actions">
            <button class="action-btn action-view">👁</button>
            <button class="action-btn action-edit">✏️</button>
            <button class="action-btn action-delete">🗑</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td class="actions-cell">
          <div class="actions">
            <button class="action-btn action-view">👁</button>
            <button class="action-btn action-edit">✏️</button>
            <button class="action-btn action-delete">🗑</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.actions-table {
  width: 100%;
  border-collapse: collapse;
}

.actions-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.actions-header {
  text-align: right;
}

.actions-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.actions-table td:nth-child(1),
.actions-table td:nth-child(3) {
  color: #111827;
}

.actions-table td:nth-child(2) {
  color: #6B7280;
}

.actions-cell {
  text-align: right;
}

.actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.action-btn {
  padding: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.action-view,
.action-edit {
  color: #3B82F6;
}

.action-delete {
  color: #ef4444;
}
</style>`,
  compactTableCode: `<!-- Compact Table -->
<div class="table-card">
  <table class="compact-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.compact-table {
  width: 100%;
  border-collapse: collapse;
}

.compact-table th {
  padding: 8px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.compact-table td {
  padding: 8px;
  font-size: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.compact-table td:nth-child(1),
.compact-table td:nth-child(3),
.compact-table td:nth-child(4) {
  color: #111827;
}

.compact-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,
  cardStyleTableCode: `<!-- Card Style Table -->
<div class="table-card">
  <div class="card-table">
    <div class="card-row">
      <div class="card-item">
        <span class="label">Name</span>
        <span class="value">John Doe</span>
      </div>
      <div class="card-item">
        <span class="label">Email</span>
        <span class="value">john@example.com</span>
      </div>
      <div class="card-item">
        <span class="label">Role</span>
        <span class="value">Admin</span>
      </div>
      <div class="card-item">
        <span class="label">Status</span>
        <span class="value">Active</span>
      </div>
    </div>

    <div class="card-row">
      <div class="card-item">
        <span class="label">Name</span>
        <span class="value">Jane Smith</span>
      </div>
      <div class="card-item">
        <span class="label">Email</span>
        <span class="value">jane@example.com</span>
      </div>
      <div class="card-item">
        <span class="label">Role</span>
        <span class="value">User</span>
      </div>
      <div class="card-item">
        <span class="label">Status</span>
        <span class="value">Inactive</span>
      </div>
    </div>
  </div>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.card-table {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-row {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.label {
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 4px;
  display: block;
}

.value {
  font-size: 14px;
  color: #111827;
  font-weight: 500;
}
</style>`,
  darkHeaderTableCode: `<!-- Dark Header Table -->
<div class="table-card">
  <table class="dark-header-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.dark-header-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

.dark-header-table thead tr {
  background: #3B82F6;
}

.dark-header-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.dark-header-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.dark-header-table td:nth-child(1),
.dark-header-table td:nth-child(3),
.dark-header-table td:nth-child(4) {
  color: #111827;
}

.dark-header-table td:nth-child(2) {
  color: #6B7280;
}
</style>`,
  checkboxTableCode: `<!-- Table with Checkbox -->
<div class="table-card">
  <table class="checkbox-table">
    <thead>
      <tr>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="checkbox-cell">
          <input type="checkbox" />
        </td>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td class="checkbox-cell">
          <input type="checkbox" />
        </td>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.checkbox-table {
  width: 100%;
  border-collapse: collapse;
}

.checkbox-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.checkbox-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
}

.checkbox-cell {
  width: 40px;
}

.checkbox-table input[type="checkbox"] {
  cursor: pointer;
}

.muted {
  color: #6B7280;
}
</style>`,
  minimalTableCode: `<!-- Minimal Table -->
<div class="table-card">
  <table class="minimal-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.minimal-table {
  width: 100%;
  border-collapse: collapse;
}

.minimal-table th {
  padding: 12px 0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.minimal-table td {
  padding: 12px 0;
  font-size: 14px;
  border-top: 1px solid #f3f4f6;
  color: #111827;
}

.minimal-table tbody tr:first-child td {
  border-top: none;
}

.muted {
  color: #6B7280;
}
</style>`,
  roundedBorderedTableCode: `<!-- Rounded Bordered Table -->
<div class="table-card">
  <div class="rounded-wrapper">
    <table class="rounded-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td class="muted">john@example.com</td>
          <td>Admin</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td class="muted">jane@example.com</td>
          <td>User</td>
          <td>Inactive</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.rounded-wrapper {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.rounded-table {
  width: 100%;
  border-collapse: collapse;
}

.rounded-table thead tr {
  background: #f9fafb;
}

.rounded-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.rounded-table td {
  padding: 12px;
  font-size: 14px;
  border-top: 1px solid #e5e7eb;
  color: #111827;
}

.muted {
  color: #6B7280;
}
</style>`,
  colorfulHeaderTableCode: `<!-- Colorful Header Table -->
<div class="table-card">
  <table class="colorful-header-table">
    <thead>
      <tr>
        <th class="col-name">Name</th>
        <th class="col-email">Email</th>
        <th class="col-role">Role</th>
        <th class="col-status">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td class="muted">john@example.com</td>
        <td>Admin</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td class="muted">jane@example.com</td>
        <td>User</td>
        <td>Inactive</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.colorful-header-table {
  width: 100%;
  border-collapse: collapse;
}

.colorful-header-table th {
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

.col-name {
  background: #f3e8ff;
  border-bottom: 3px solid #3B82F6;
}

.col-email {
  background: #dbeafe;
  border-bottom: 3px solid #3b82f6;
}

.col-role {
  background: #d1fae5;
  border-bottom: 3px solid #10b981;
}

.col-status {
  background: #fee2e2;
  border-bottom: 3px solid #ef4444;
}

.colorful-header-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
  color: #111827;
}

.muted {
  color: #6B7280;
}
</style>`,
};
