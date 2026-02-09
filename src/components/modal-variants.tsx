import { useState } from 'react';
import { X, AlertTriangle, Check, Info, Trash2, Upload, Settings } from 'lucide-react';

export default function ModalVariants() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null;
    
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '100px 80px 80px 80px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ 
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#111827',
            margin: '0 0 12px 0'
          }}>
            Modal Style Variants
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6B7280',
            margin: 0
          }}>
            Explore 12 different modal dialog styles
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {/* Variant 1: Basic Modal */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Basic Modal
            </h3>
            <button
              onClick={() => setOpenModal(1)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 2: Centered */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Centered
            </h3>
            <button
              onClick={() => setOpenModal(2)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 3: Confirmation */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Confirmation
            </h3>
            <button
              onClick={() => setOpenModal(3)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 4: Warning */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Warning
            </h3>
            <button
              onClick={() => setOpenModal(4)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 5: Success */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Success
            </h3>
            <button
              onClick={() => setOpenModal(5)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 6: Form */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Form
            </h3>
            <button
              onClick={() => setOpenModal(6)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 7: Large */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Large
            </h3>
            <button
              onClick={() => setOpenModal(7)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 8: Small */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Small
            </h3>
            <button
              onClick={() => setOpenModal(8)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 9: With Icon */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              With Icon
            </h3>
            <button
              onClick={() => setOpenModal(9)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 10: Destructive */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Destructive
            </h3>
            <button
              onClick={() => setOpenModal(10)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 11: Bottom Sheet */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Bottom Sheet
            </h3>
            <button
              onClick={() => setOpenModal(11)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>

          {/* Variant 12: Full Screen */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Full Screen
            </h3>
            <button
              onClick={() => setOpenModal(12)}
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: '#6900ef',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>

      {/* Modal 1: Basic */}
      <Modal isOpen={openModal === 1} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '400px', padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Modal Title</h3>
            <button onClick={() => setOpenModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <X size={20} color="#6B7280" />
            </button>
          </div>
          <div style={{ padding: '24px' }}>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
              This is a basic modal dialog. You can add any content here.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setOpenModal(null)} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Cancel
              </button>
              <button style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal 2: Centered */}
      <Modal isOpen={openModal === 2} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '400px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>Centered Modal</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            This modal has centered content with no header border.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={() => setOpenModal(null)} style={{ padding: '10px 24px', fontSize: '14px', fontWeight: '600', color: '#6900ef', background: 'transparent', border: '2px solid #6900ef', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button style={{ padding: '10px 24px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Continue
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 3: Confirmation */}
      <Modal isOpen={openModal === 3} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '12px', width: '400px', padding: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>Confirm Action</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Are you sure you want to perform this action? This cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setOpenModal(null)} style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Confirm
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 4: Warning */}
      <Modal isOpen={openModal === 4} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '12px', width: '400px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AlertTriangle size={20} color="#f59e0b" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Warning</h3>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            This action may have consequences. Please review before continuing.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button onClick={() => setOpenModal(null)} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#f59e0b', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Proceed
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 5: Success */}
      <Modal isOpen={openModal === 5} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '400px', padding: '32px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Check size={32} color="#10b981" />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>Success!</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Your action has been completed successfully.
          </p>
          <button onClick={() => setOpenModal(null)} style={{ padding: '12px 32px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#10b981', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Done
          </button>
        </div>
      </Modal>

      {/* Modal 6: Form */}
      <Modal isOpen={openModal === 6} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '480px', padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Add New User</h3>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Name</label>
              <input type="text" placeholder="Enter name" style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Email</label>
              <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setOpenModal(null)} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Cancel
              </button>
              <button style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal 7: Large */}
      <Modal isOpen={openModal === 7} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '700px', maxHeight: '80vh', overflow: 'auto' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'white' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>Large Modal</h3>
            <button onClick={() => setOpenModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <X size={24} color="#6B7280" />
            </button>
          </div>
          <div style={{ padding: '24px' }}>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0', lineHeight: '1.6' }}>
              This is a large modal with more space for content. You can add forms, tables, or any other content here.
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button onClick={() => setOpenModal(null)} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Cancel
              </button>
              <button style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal 8: Small */}
      <Modal isOpen={openModal === 8} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '12px', width: '320px', padding: '20px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>Small Modal</h3>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 20px 0' }}>
            Compact modal for simple messages.
          </p>
          <button onClick={() => setOpenModal(null)} style={{ width: '100%', padding: '10px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Got it
          </button>
        </div>
      </Modal>

      {/* Modal 9: With Icon */}
      <Modal isOpen={openModal === 9} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '16px', width: '400px', padding: '32px', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', background: '#f3e8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Info size={28} color="#6900ef" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>Information</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Here's some important information you should know about this action.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setOpenModal(null)} style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: '#6900ef', background: '#f3e8ff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Understood
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 10: Destructive */}
      <Modal isOpen={openModal === 10} onClose={() => setOpenModal(null)}>
        <div style={{ background: 'white', borderRadius: '12px', width: '400px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', background: '#fee2e2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trash2 size={20} color="#ef4444" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Delete Item</h3>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setOpenModal(null)} style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: '#6B7280', background: '#f3f4f6', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button style={{ flex: 1, padding: '12px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#ef4444', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 11: Bottom Sheet */}
      {openModal === 11 && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'flex-end'
          }}
          onClick={() => setOpenModal(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ 
              background: 'white', 
              borderRadius: '16px 16px 0 0', 
              width: '100%', 
              padding: '24px',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            <div style={{ width: '40px', height: '4px', background: '#e5e7eb', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>Bottom Sheet</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 24px 0', lineHeight: '1.6' }}>
              This modal slides up from the bottom. Great for mobile interfaces.
            </p>
            <button onClick={() => setOpenModal(null)} style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: '600', color: 'white', background: '#6900ef', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal 12: Full Screen */}
      {openModal === 12 && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'white',
            zIndex: 9999,
            overflow: 'auto'
          }}
        >
          <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>Full Screen Modal</h3>
            <button onClick={() => setOpenModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
              <X size={24} color="#6B7280" />
            </button>
          </div>
          <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
              This modal takes up the entire screen. Perfect for complex forms or detailed content.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
