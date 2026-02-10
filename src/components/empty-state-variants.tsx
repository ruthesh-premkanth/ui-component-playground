import {
  Inbox,
  Search,
  FileText,
  Users,
  Image,
  ShoppingBag,
  Mail,
  Calendar,
  Folder,
  Database,
  Cloud,
  Heart,
  Star,
  Bell,
  Plus,
} from "lucide-react";

import { CopyButton } from "./copy-button";
import { emptyStateCode } from "./emptyStateCodeSnippets";
export default function EmptyStateVariants() {
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
            Empty State Variants
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Explore 15 different empty state designs for when there's no content
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {/* Variant 1: Simple Icon */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.simpleInboxEmptyCode}
              variantId="empty-state-simple-inbox"
            />
            <Inbox
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Messages
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              Your inbox is empty
            </p>
          </div>

          {/* Variant 2: With Button */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.documentEmptyCode}
              variantId="empty-state-simple-file"
            />
            <FileText
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Documents
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Get started by creating a new document
            </p>
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
              Create Document
            </button>
          </div>

          {/* Variant 3: Colored Icon Background */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.teamEmptyCode}
              variantId="empty-state-team"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#f3e8ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Users size={40} color="#3B82F6" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Team Members
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Invite people to collaborate
            </p>
            <button
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#3B82F6",
                background: "#f3e8ff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Invite Team
            </button>
          </div>

          {/* Variant 4: Search Results */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.searchEmptyCode}
              variantId="empty-state-search"
            />
            <Search
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Results Found
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              Try adjusting your search to find what you're looking for
            </p>
          </div>

          {/* Variant 5: Image Gallery */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.galleryEmptyCode}
              variantId="empty-state-gallery"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#dbeafe",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Image size={40} color="#3b82f6" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Photos Yet
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Upload your first photo to get started
            </p>
            <button
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                background: "#3b82f6",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Plus size={16} />
              Upload Photo
            </button>
          </div>

          {/* Variant 6: Shopping Cart */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.cartEmptyCode}
              variantId="empty-state-cart"
            />
            <ShoppingBag
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              Your Cart is Empty
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Add items to get started
            </p>
            <button
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
              Start Shopping
            </button>
          </div>

          {/* Variant 7: Minimal */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.minimalEmptyCode}
              variantId="empty-state-minimal"
            />
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#6B7280",
                margin: 0,
              }}
            >
              No data available
            </h3>
          </div>

          {/* Variant 8: With Illustration Placeholder */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.mailIllustrationEmptyCode}
              variantId="empty-state-simple-inbox"
            />
            <div
              style={{
                width: "120px",
                height: "120px",
                background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Mail size={60} color="#3B82F6" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Messages
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              When you receive messages, they'll appear here
            </p>
          </div>

          {/* Variant 9: Calendar */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.calendarEmptyCode}
              variantId="empty-state-calendar"
            />
            <Calendar
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Events Scheduled
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Create your first event to get started
            </p>
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
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Plus size={16} />
              Add Event
            </button>
          </div>

          {/* Variant 10: Folder */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.folderEmptyCode}
              variantId="empty-state-folder"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#fef3c7",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Folder size={40} color="#f59e0b" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              Folder is Empty
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              Drag and drop files here or click to upload
            </p>
          </div>

          {/* Variant 11: Database */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.databaseEmptyCode}
              variantId="empty-state-database"
            />
            <Database
              size={48}
              color="#d1d5db"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Data
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Start by importing or creating new records
            </p>
            <div
              style={{ display: "flex", gap: "12px", justifyContent: "center" }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#3B82F6",
                  background: "#f3e8ff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Import
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                  background: "#3B82F6",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Create New
              </button>
            </div>
          </div>

          {/* Variant 12: Cloud Storage */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.cloudEmptyCode}
              variantId="empty-state-cloud"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#dbeafe",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Cloud size={40} color="#3b82f6" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              Nothing in Cloud
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 4px 0",
              }}
            >
              Your cloud storage is empty
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                margin: "0 0 20px 0",
              }}
            >
              Upload files to access them anywhere
            </p>
            <button
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
              Upload Files
            </button>
          </div>

          {/* Variant 13: Favorites */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.favoritesEmptyCode}
              variantId="empty-state-favorites"
            />
            <Heart
              size={48}
              color="#fee2e2"
              style={{ margin: "0 auto 16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Favorites Yet
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              Items you favorite will appear here
            </p>
          </div>

          {/* Variant 14: Reviews */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.reviewsEmptyCode}
              variantId="empty-state-reviews"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#fef3c7",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Star size={40} color="#f59e0b" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              No Reviews
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: "0 0 20px 0",
              }}
            >
              Be the first to leave a review
            </p>
            <button
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
              Write Review
            </button>
          </div>

          {/* Variant 15: Notifications */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "48px 32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <CopyButton
              code={emptyStateCode.notificationsEmptyCode}
              variantId="empty-state-notifications"
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#f3e8ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Bell size={40} color="#3B82F6" />
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              All Caught Up!
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
              You have no new notifications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
