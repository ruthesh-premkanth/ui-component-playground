import { Play, Trash2, Check, ArrowRight, Heart, Star } from 'lucide-react';
import { CopyButton } from './copy-button';

export default function ButtonVariants() {
  const variants = [
    {
      id: 'primary-solid',
      title: 'Primary Solid',
      code: `<!-- Primary Solid Button -->
<button class="btn-primary-solid">
  Click Me
</button>

<style>
.btn-primary-solid {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-primary-solid:hover {
  background: #5500cc;
  transform: translateY(-1px);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Play size={16} />
          Click Me
        </button>
      )
    },
    {
      id: 'gradient',
      title: 'Gradient',
      code: `<!-- Gradient Button -->
<button class="btn-gradient">
  Gradient Button
</button>

<style>
.btn-gradient {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-gradient:hover {
  box-shadow: 0 6px 16px rgba(105, 0, 239, 0.4);
  transform: translateY(-2px);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: '0 4px 12px rgba(105, 0, 239, 0.3)'
        }}>
          Gradient Button
        </button>
      )
    },
    {
      id: 'outline',
      title: 'Outline',
      code: `<!-- Outline Button -->
<button class="btn-outline">
  Outline Button
</button>

<style>
.btn-outline {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: 2px solid #6900ef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-outline:hover {
  background: #6900ef;
  color: #ffffff;
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#6900ef',
          background: 'transparent',
          border: '2px solid #6900ef',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Outline Button
        </button>
      )
    },
    {
      id: 'ghost',
      title: 'Ghost',
      code: `<!-- Ghost Button -->
<button class="btn-ghost">
  Ghost Button
</button>

<style>
.btn-ghost {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-ghost:hover {
  background: rgba(105, 0, 239, 0.1);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#6900ef',
          background: 'transparent',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Ghost Button
        </button>
      )
    },
    {
      id: 'soft',
      title: 'Soft',
      code: `<!-- Soft Button -->
<button class="btn-soft">
  Soft Button
</button>

<style>
.btn-soft {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #f3e8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-soft:hover {
  background: #e9d5ff;
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#6900ef',
          background: '#f3e8ff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Soft Button
        </button>
      )
    },
    {
      id: 'elevated',
      title: 'Elevated',
      code: `<!-- Elevated Button -->
<button class="btn-elevated">
  Elevated Button
</button>

<style>
.btn-elevated {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-elevated:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(105, 0, 239, 0.5);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: '0 8px 24px rgba(105, 0, 239, 0.4)'
        }}>
          Elevated Button
        </button>
      )
    },
    {
      id: 'icon-only',
      title: 'Icon Only',
      code: `<!-- Icon Only Buttons -->
<div class="btn-icon-group">
  <button class="btn-icon-primary">❤️</button>
  <button class="btn-icon-soft">⭐</button>
</div>

<style>
.btn-icon-group {
  display: flex;
  gap: 12px;
}

.btn-icon-primary,
.btn-icon-soft {
  width: 40px;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-primary {
  color: #ffffff;
  background: #6900ef;
}

.btn-icon-primary:hover {
  background: #5500cc;
  transform: scale(1.1);
}

.btn-icon-soft {
  color: #6900ef;
  background: #f3e8ff;
}

.btn-icon-soft:hover {
  background: #e9d5ff;
  transform: scale(1.1);
}
</style>`,
      component: (
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            width: '40px',
            height: '40px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'white',
            background: '#6900ef',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Heart size={18} />
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#6900ef',
            background: '#f3e8ff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Star size={18} />
          </button>
        </div>
      )
    },
    {
      id: 'rounded-full',
      title: 'Rounded Full',
      code: `<!-- Rounded Full Button -->
<button class="btn-rounded-full">
  Rounded Button
</button>

<style>
.btn-rounded-full {
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-rounded-full:hover {
  background: #5500cc;
  transform: scale(1.05);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 28px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Rounded Button
        </button>
      )
    },
    {
      id: 'with-arrow',
      title: 'With Arrow',
      code: `<!-- Button With Arrow -->
<button class="btn-with-arrow">
  Continue →
</button>

<style>
.btn-with-arrow {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-with-arrow:hover {
  background: #5500cc;
  transform: translateX(4px);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          Continue
          <ArrowRight size={16} />
        </button>
      )
    },
    {
      id: 'loading',
      title: 'Loading State',
      code: `<!-- Loading Button -->
<button class="btn-loading" disabled>
  <span class="btn-loading-spinner"></span>
  Loading...
</button>

<style>
.btn-loading {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  opacity: 0.7;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.7
        }}>
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid white',
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          Loading...
        </button>
      )
    },
    {
      id: 'destructive',
      title: 'Destructive',
      code: `<!-- Destructive Button -->
<button class="btn-destructive">
  🗑️ Delete
</button>

<style>
.btn-destructive {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #ef4444;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-destructive:hover {
  background: #dc2626;
  transform: translateY(-1px);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#ef4444',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Trash2 size={16} />
          Delete
        </button>
      )
    },
    {
      id: 'success',
      title: 'Success',
      code: `<!-- Success Button -->
<button class="btn-success">
  ✓ Confirm
</button>

<style>
.btn-success {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-success:hover {
  background: #059669;
  transform: translateY(-1px);
}
</style>`,
      component: (
        <button style={{
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          background: '#10b981',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Check size={16} />
          Confirm
        </button>
      )
    },
    {
      id: 'large',
      title: 'Large',
      code: `<!-- Large Button -->
<button class="btn-large">
  Large Button
</button>

<style>
.btn-large {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-large:hover {
  background: #5500cc;
  transform: translateY(-2px);
}
</style>`,
      component: (
        <button style={{
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Large Button
        </button>
      )
    },
    {
      id: 'small',
      title: 'Small',
      code: `<!-- Small Button -->
<button class="btn-small">
  Small Button
</button>

<style>
.btn-small {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background: #6900ef;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-small:hover {
  background: #5500cc;
  transform: translateY(-1px);
}
</style>`,
      component: (
        <button style={{
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: '600',
          color: 'white',
          background: '#6900ef',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}>
          Small Button
        </button>
      )
    },
    {
      id: 'group',
      title: 'Button Group',
      code: `<!-- Button Group -->
<div class="btn-group">
  <button class="btn-group-item">Left</button>
  <button class="btn-group-item active">Center</button>
  <button class="btn-group-item">Right</button>
</div>

<style>
.btn-group {
  display: inline-flex;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.btn-group-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: #ffffff;
  border: none;
  border-right: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.btn-group-item:last-child {
  border-right: none;
}

.btn-group-item:hover {
  background: #f9fafb;
}

.btn-group-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>`,
      component: (
        <div style={{ display: 'inline-flex', border: '2px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
          <button style={{
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#6900ef',
            background: 'white',
            border: 'none',
            borderRight: '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            Left
          </button>
          <button style={{
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'white',
            background: '#6900ef',
            border: 'none',
            borderRight: '1px solid #e5e7eb',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            Center
          </button>
          <button style={{
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#6900ef',
            background: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            Right
          </button>
        </div>
      )
    }
  ];

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
            Button Style Variants
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6B7280',
            margin: 0
          }}>
            Explore 15 different button styles for your interface
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {variants.map((variant) => (
            <div 
              key={variant.id}
              style={{ 
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                  {variant.title}
                </h3>
                <CopyButton
                  code={variant.code}
                  variantId={variant.id}
                />
              </div>
              {variant.component}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
