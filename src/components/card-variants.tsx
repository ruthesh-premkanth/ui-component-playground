import { Table, ArrowRight, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { CopyButton } from './copy-button';

// Variant 1: Minimal Border
function CardVariant1() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 1: Minimal Border
        </h3>
        <CopyButton 
          variantId="card-minimal-border"
          code={`<style>
.card-minimal-border {
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-minimal-border:hover {
  border-color: #6900ef;
}
.card-icon-box {
  width: 40px;
  height: 40px;
  background: #6900ef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-description {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
.card-link {
  font-size: 12px;
  color: #6900ef;
  font-weight: 600;
}
</style>

<div class="card-minimal-border">
  <div>
    <div class="card-icon-box">📊</div>
    <h3 class="card-title">Analytics</h3>
    <p class="card-description">Track performance and insights</p>
  </div>
  <div class="card-link">Learn more →</div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#6900ef';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e5e7eb';
        }}
      >
        <div>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#6900ef',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Table size={24} color="white" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
        <div style={{ fontSize: '12px', color: '#6900ef', fontWeight: '600' }}>Learn more →</div>
      </div>
    </div>
  );
}

// Variant 2: Soft Shadow
function CardVariant2() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 2: Soft Shadow
        </h3>
        <CopyButton 
          variantId="card-soft-shadow"
          code={`<style>
.card-shadow {
  background: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-shadow:hover {
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.15);
  transform: translateY(-4px);
}
.card-shadow .icon-box {
  width: 48px;
  height: 48px;
  background: #f3e8ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
}
.card-shadow h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-shadow p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-shadow">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(105, 0, 239, 0.15)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: '#f3e8ff',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Table size={24} color="#6900ef" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
      </div>
    </div>
  );
}

// Variant 3: Left Border Accent
function CardVariant3() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 3: Left Border Accent
        </h3>
        <CopyButton 
          variantId="card-left-border"
          code={`<style>
.card-left-border {
  background: #ffffff;
  border-left: 4px solid #6900ef;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-left-border:hover {
  background: #fafafa;
}
.card-left-border h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-left-border p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-left-border .badge {
  display: inline-block;
  padding: 4px 12px;
  background: #f3e8ff;
  color: #6900ef;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}
.card-left-border .arrow {
  display: flex;
  justify-content: flex-end;
  color: #6900ef;
}
</style>

<div class="card-left-border">
  <div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
    <span class="badge">Popular</span>
  </div>
  <div class="arrow">→</div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          borderLeft: '4px solid #6900ef',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#fafafa';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'white';
        }}
      >
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0', lineHeight: '1.5' }}>
            Track performance and insights
          </p>
          <div style={{ 
            display: 'inline-block',
            padding: '4px 12px',
            background: '#f3e8ff',
            color: '#6900ef',
            borderRadius: '16px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            Popular
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ArrowRight size={20} color="#6900ef" />
        </div>
      </div>
    </div>
  );
}

// Variant 4: Gradient Background
function CardVariant4() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 4: Gradient Background
        </h3>
        <CopyButton 
          variantId="card-gradient"
          code={`<style>
.card-gradient {
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-gradient:hover {
  transform: scale(1.02);
}
.card-gradient .circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}
.card-gradient .icon-box {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
}
.card-gradient h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
}
.card-gradient p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-gradient">
  <div class="circle"></div>
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
          border: 'none',
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}></div>
        <div>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Table size={24} color="white" />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
      </div>
    </div>
  );
}

// Variant 5: Outlined Hover
function CardVariant5() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 5: Outlined Hover
        </h3>
        <CopyButton 
          variantId="card-outlined-hover"
          code={`<style>
.card-outlined {
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-outlined:hover {
  border-color: #6900ef;
  background: #fafbff;
}
.card-outlined .header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.card-outlined .icon-circle {
  width: 56px;
  height: 56px;
  background: #6900ef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.card-outlined h3 {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.card-outlined p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-outlined">
  <div>
    <div class="header">
      <div class="icon-circle">📊</div>
      <h3>Analytics</h3>
    </div>
    <p>Track performance and insights</p>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: '2px solid transparent',
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#6900ef';
          e.currentTarget.style.background = '#fafbff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.background = 'white';
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: '#6900ef',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Table size={28} color="white" />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: 0 }}>Analytics</h3>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
      </div>
    </div>
  );
}

// Variant 6: Top Stripe
function CardVariant6() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 6: Top Stripe
        </h3>
        <CopyButton 
          variantId="card-top-stripe"
          code={`<style>
.card-top-stripe {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-top: 6px solid #6900ef;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-top-stripe:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.card-top-stripe h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-top-stripe p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-top-stripe .action {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6900ef;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-top-stripe">
  <div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
  <div class="action">
    <span>Select</span>
    <span>›</span>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderTop: '6px solid #6900ef',
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0', lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6900ef', fontSize: '14px', fontWeight: '600' }}>
          <span>Select</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}

// Variant 7: Glass Morphism
function CardVariant7() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 7: Glass Morphism
        </h3>
        <CopyButton 
          variantId="card-glass-morphism"
          code={`<style>
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(105, 0, 239, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-glass:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
}
.card-glass .icon-box {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #6900ef, #8b3dff);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 26px;
}
.card-glass h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-glass p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-glass">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 8px 32px rgba(105, 0, 239, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div>
          <div style={{ 
            width: '52px', 
            height: '52px', 
            background: 'linear-gradient(135deg, #6900ef, #8b3dff)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Table size={26} color="white" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
      </div>
    </div>
  );
}

// Variant 8: Compact Horizontal
function CardVariant8() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 8: Compact Horizontal
        </h3>
        <CopyButton 
          variantId="card-compact-horizontal"
          code={`<style>
.card-compact {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-compact:hover {
  border-color: #6900ef;
  background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
}
.card-compact .header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.card-compact .icon-box {
  width: 44px;
  height: 44px;
  background: #f3e8ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 22px;
}
.card-compact h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-compact p {
  font-size: 13px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
.card-compact .button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #6900ef;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-compact">
  <div class="header">
    <div class="icon-box">📊</div>
    <div>
      <h3>Analytics</h3>
      <p>Track performance and insights</p>
    </div>
  </div>
  <div class="button">Access Now</div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#6900ef';
          e.currentTarget.style.background = 'linear-gradient(135deg, #fafbff 0%, white 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e5e7eb';
          e.currentTarget.style.background = 'white';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ 
            width: '44px', 
            height: '44px', 
            background: '#f3e8ff',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Table size={22} color="#6900ef" />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
              Track performance and insights
            </p>
          </div>
        </div>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          background: '#6900ef',
          borderRadius: '8px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          Access Now
        </div>
      </div>
    </div>
  );
}

// Variant 9: Minimal Dark
function CardVariant9() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 9: Minimal Dark
        </h3>
        <CopyButton 
          variantId="card-minimal-dark"
          code={`<style>
.card-dark {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-dark:hover {
  border-color: #6900ef;
  box-shadow: 0 0 20px rgba(105, 0, 239, 0.3);
}
.card-dark .icon-box {
  width: 40px;
  height: 40px;
  background: #6900ef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 22px;
}
.card-dark h3 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
}
.card-dark p {
  font-size: 14px;
  color: #9CA3AF;
  margin: 0;
  line-height: 1.5;
}
.card-dark .arrow-circle {
  width: 32px;
  height: 32px;
  background: rgba(105, 0, 239, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>

<div class="card-dark">
  <div>
    <div class="icon-box">📊</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
  <div class="arrow-circle">→</div>
</div>`}
        />
      </div>
      <div
        style={{
          background: '#1a1a2e',
          border: '1px solid #2a2a3e',
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#6900ef';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(105, 0, 239, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#2a2a3e';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#6900ef',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Table size={22} color="white" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
        <div style={{ 
          width: '32px',
          height: '32px',
          background: 'rgba(105, 0, 239, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ArrowRight size={16} color="#6900ef" />
        </div>
      </div>
    </div>
  );
}

// Variant 10: Badge Style
function CardVariant10() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 10: Badge Style
        </h3>
        <CopyButton 
          variantId="card-badge-style"
          code={`<style>
.card-badge {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.card-badge .badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #6900ef;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}
.card-badge .icon {
  font-size: 32px;
  margin-bottom: 16px;
}
.card-badge h3 {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-badge p {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="card-badge">
  <div class="badge">POPULAR</div>
  <div>
    <div class="icon">✨</div>
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: '#6900ef',
          color: 'white',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '700'
        }}>
          POPULAR
        </div>
        <div>
          <Sparkles size={32} color="#6900ef" strokeWidth={2} style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
            Track performance and insights
          </p>
        </div>
      </div>
    </div>
  );
}

// Variant 11: Icon Background
function CardVariant11() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 11: Icon Background
        </h3>
        <CopyButton 
          variantId="card-icon-background"
          code={`<style>
.card-icon-bg {
  background: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.card-icon-bg:hover {
  box-shadow: 0 8px 24px rgba(105, 0, 239, 0.12);
}
.card-icon-bg .bg-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  opacity: 0.05;
  font-size: 120px;
}
.card-icon-bg .content {
  position: relative;
  z-index: 1;
}
.card-icon-bg h3 {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
}
.card-icon-bg p {
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
}
.card-icon-bg .link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #6900ef;
  font-size: 14px;
  font-weight: 600;
}
</style>

<div class="card-icon-bg">
  <div class="bg-icon">📊</div>
  <div class="content">
    <h3>Analytics</h3>
    <p>Track performance and insights</p>
    <div class="link">
      <span>Get started</span>
      <span>→</span>
    </div>
  </div>
</div>`}
        />
      </div>
      <div
        style={{
          background: 'white',
          border: 'none',
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(105, 0, 239, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
        }}
      >
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          opacity: 0.05
        }}>
          <Table size={120} color="#6900ef" strokeWidth={1} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>Analytics</h3>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0', lineHeight: '1.5' }}>
            Track performance and insights
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#6900ef',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            <span>Get started</span>
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Variant 12: Split Design
function CardVariant12() {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '0',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#6900ef';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      <div style={{
        background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: 0 }}>Analytics</h3>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Table size={22} color="white" />
        </div>
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
        <div style={{
          padding: '8px 16px',
          border: '2px solid #6900ef',
          borderRadius: '8px',
          color: '#6900ef',
          fontSize: '14px',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Select Application
        </div>
      </div>
    </div>
  );
}

// Variant 13: Light Purple Gradient
function CardVariant13() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
        border: 'none',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(105, 0, 239, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '50%'
      }}></div>
      <div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          background: '#6900ef',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Table size={24} color="white" />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: '0 0 8px 0' }}>Analytics</h3>
        <p style={{ fontSize: '14px', color: '#7c3aed', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
      </div>
    </div>
  );
}

// Variant 14: Soft Blue Gradient
function CardVariant14() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        border: 'none',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.6)',
        borderRadius: '50%'
      }}></div>
      <div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          background: '#3b82f6',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Table size={24} color="white" />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e40af', margin: '0 0 8px 0' }}>Analytics</h3>
        <p style={{ fontSize: '14px', color: '#2563eb', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
      </div>
    </div>
  );
}

// Variant 15: Pastel Gradient
function CardVariant15() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
        border: 'none',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(236, 72, 153, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '50%'
      }}></div>
      <div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          background: '#ec4899',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Table size={24} color="white" />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#be185d', margin: '0 0 8px 0' }}>Analytics</h3>
        <p style={{ fontSize: '14px', color: '#db2777', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
      </div>
    </div>
  );
}

// Variant 16: Mint Gradient
function CardVariant16() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
        border: 'none',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '50%'
      }}></div>
      <div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          background: '#10b981',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Table size={24} color="white" />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#047857', margin: '0 0 8px 0' }}>Analytics</h3>
        <p style={{ fontSize: '14px', color: '#059669', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
      </div>
    </div>
  );
}

// Variant 17: Peach Gradient
function CardVariant17() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
        border: 'none',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.4)',
        borderRadius: '50%'
      }}></div>
      <div>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          background: '#f97316',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}>
          <Table size={24} color="white" />
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#c2410c', margin: '0 0 8px 0' }}>Analytics</h3>
        <p style={{ fontSize: '14px', color: '#ea580c', margin: 0, lineHeight: '1.5' }}>
          Track performance and insights
        </p>
      </div>
    </div>
  );
}

export default function CardVariants() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5f7ff 100%)',
      minHeight: '100vh',
      padding: '40px 80px'
    }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#111827', margin: '0 0 12px 0' }}>
          Card Design Variants
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>
          Choose your preferred card style (1-12)
        </p>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px'
      }}>
        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 1 - Minimal Border
          </div>
          <CardVariant1 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 2 - Soft Shadow
          </div>
          <CardVariant2 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 3 - Left Border Accent
          </div>
          <CardVariant3 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 4 - Gradient Background
          </div>
          <CardVariant4 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 5 - Outlined Hover
          </div>
          <CardVariant5 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 6 - Top Stripe
          </div>
          <CardVariant6 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 7 - Glass Morphism
          </div>
          <CardVariant7 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 8 - Compact Horizontal
          </div>
          <CardVariant8 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 9 - Minimal Dark
          </div>
          <CardVariant9 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 10 - Badge Style
          </div>
          <CardVariant10 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 11 - Icon Background
          </div>
          <CardVariant11 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 12 - Split Design
          </div>
          <CardVariant12 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 13 - Light Purple Gradient
          </div>
          <CardVariant13 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 14 - Soft Blue Gradient
          </div>
          <CardVariant14 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 15 - Pastel Gradient
          </div>
          <CardVariant15 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 16 - Mint Gradient
          </div>
          <CardVariant16 />
        </div>

        <div>
          <div style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '700', color: '#6900ef' }}>
            VARIANT 17 - Peach Gradient
          </div>
          <CardVariant17 />
        </div>
      </div>
    </div>
  );
}