import { useState } from 'react';
import { Home, Search, Heart, Star, Calendar, FileText, Database, Cloud, Lock, Zap, User } from 'lucide-react';
import { CopyButton } from './copy-button';

// Tab Variant 1: Underline Style
function TabVariant1() {
  const [active, setActive] = useState(0);
  const tabs = ['Dashboard', 'Analytics', 'Reports', 'Settings'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 1: Underline Style
        </h3>
        <CopyButton 
          variantId="tab-underline"
          code={`<!-- Underline Style Tabs -->
<div class="tabs-underline">
  <button class="tab-underline-item active">Dashboard</button>
  <button class="tab-underline-item">Analytics</button>
  <button class="tab-underline-item">Reports</button>
  <button class="tab-underline-item">Settings</button>
</div>

<style>
.tabs-underline {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #e5e7eb;
  padding: 0 8px;
}

.tab-underline-item {
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-underline-item:hover {
  color: #6900ef;
}

.tab-underline-item.active {
  font-weight: 600;
  color: #6900ef;
  border-bottom-color: #6900ef;
}
</style>`}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '8px',
        borderBottom: '2px solid #e5e7eb',
        padding: '0 8px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: active === idx ? '600' : '500',
              color: active === idx ? '#6900ef' : '#6B7280',
              background: 'transparent',
              border: 'none',
              borderBottom: active === idx ? '3px solid #6900ef' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.3s',
              marginBottom: '-2px'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 2: Pill Style
function TabVariant2() {
  const [active, setActive] = useState(0);
  const tabs = ['Overview', 'Activity', 'Team', 'Billing'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 2: Pill Style
        </h3>
        <CopyButton 
          variantId="tab-pill"
          code={`<!-- Pill Style Tabs -->
<div class="tabs-pill-container">
  <button class="tab-pill-item active">Overview</button>
  <button class="tab-pill-item">Activity</button>
  <button class="tab-pill-item">Team</button>
  <button class="tab-pill-item">Billing</button>
</div>

<style>
.tabs-pill-container {
  display: flex;
  gap: 8px;
  background: #f3f4f6;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
}

.tab-pill-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-pill-item:hover {
  color: #6900ef;
}

.tab-pill-item.active {
  color: #ffffff;
  background: #6900ef;
  box-shadow: 0 2px 8px rgba(105, 0, 239, 0.3);
}
</style>`}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '8px',
        background: '#f3f4f6',
        padding: '6px',
        borderRadius: '12px',
        width: 'fit-content'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6B7280',
              background: active === idx ? '#6900ef' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: active === idx ? '0 2px 8px rgba(105, 0, 239, 0.3)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 3: Boxed Style
function TabVariant3() {
  const [active, setActive] = useState(0);
  const tabs = ['Projects', 'Tasks', 'Calendar', 'Files'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 3: Boxed Style
        </h3>
        <CopyButton 
          variantId="tab-boxed"
          code={`<!-- Boxed Style Tabs -->
<div class="tabs-boxed-container">
  <button class="tab-boxed-item active">Projects</button>
  <button class="tab-boxed-item">Tasks</button>
  <button class="tab-boxed-item">Calendar</button>
  <button class="tab-boxed-item">Files</button>
</div>

<style>
.tabs-boxed-container {
  display: flex;
  gap: 12px;
}

.tab-boxed-item {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-boxed-item:hover {
  border-color: #6900ef;
}

.tab-boxed-item.active {
  color: #6900ef;
  background: #f3e8ff;
  border-color: #6900ef;
}
</style>`}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '12px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? '#6900ef' : '#6B7280',
              background: active === idx ? '#f3e8ff' : 'white',
              border: active === idx ? '2px solid #6900ef' : '2px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 4: Minimal Dot Indicator
function TabVariant4() {
  const [active, setActive] = useState(0);
  const tabs = ['Home', 'Explore', 'Favorites', 'Profile'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 4: Minimal Dot Indicator
        </h3>
        <CopyButton 
          variantId="tab-dot"
          code={`<!-- Minimal Dot Indicator Tabs -->
<div class="tabs-dot-container">
  <button class="tab-dot-item active">
    Home
    <span class="tab-dot"></span>
  </button>
  <button class="tab-dot-item">
    Explore
  </button>
  <button class="tab-dot-item">
    Favorites
  </button>
  <button class="tab-dot-item">
    Profile
  </button>
</div>

<style>
.tabs-dot-container {
  display: flex;
  gap: 32px;
}

.tab-dot-item {
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-dot-item:hover {
  color: #6900ef;
}

.tab-dot-item.active {
  font-weight: 600;
  color: #6900ef;
}

.tab-dot {
  width: 6px;
  height: 6px;
  background: #6900ef;
  border-radius: 50%;
}
</style>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '8px 0',
              fontSize: '14px',
              fontWeight: active === idx ? '600' : '500',
              color: active === idx ? '#6900ef' : '#6B7280',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {tab}
            {active === idx && (
              <div style={{
                width: '6px',
                height: '6px',
                background: '#6900ef',
                borderRadius: '50%'
              }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 5: Icon + Text
function TabVariant5() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: 'Home', icon: Home },
    { label: 'Messages', icon: Search },
    { label: 'Notifications', icon: Heart },
    { label: 'Settings', icon: Star }
  ];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 5: Icon + Text
        </h3>
        <CopyButton 
          variantId="tab-icon-text"
          code={`<!-- Icon + Text Tabs -->
<div class="tabs-icon-text">
  <button class="tab-icon-text-item active">
    🏠 Home
  </button>
  <button class="tab-icon-text-item">
    🔍 Messages
  </button>
  <button class="tab-icon-text-item">
    ❤️ Notifications
  </button>
  <button class="tab-icon-text-item">
    ⭐ Settings
  </button>
</div>

<style>
.tabs-icon-text {
  display: flex;
  gap: 8px;
}

.tab-icon-text-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-icon-text-item:hover {
  background: #f9fafb;
}

.tab-icon-text-item.active {
  color: #6900ef;
  background: #f3e8ff;
}
</style>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          return (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                color: active === idx ? '#6900ef' : '#6B7280',
                background: active === idx ? '#f3e8ff' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Tab Variant 6: Gradient Active
function TabVariant6() {
  const [active, setActive] = useState(0);
  const tabs = ['Stats', 'Charts', 'Trends', 'Summary'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 6: Gradient Active
        </h3>
        <CopyButton 
          variantId="tab-gradient"
          code={`<!-- Gradient Active Tabs -->
<div class="tabs-gradient">
  <button class="tab-gradient-item active">Stats</button>
  <button class="tab-gradient-item">Charts</button>
  <button class="tab-gradient-item">Trends</button>
  <button class="tab-gradient-item">Summary</button>
</div>

<style>
.tabs-gradient {
  display: flex;
  gap: 12px;
}

.tab-gradient-item {
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.tab-gradient-item:hover {
  border-color: #6900ef;
}

.tab-gradient-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(105, 0, 239, 0.3);
}
</style>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6B7280',
              background: active === idx 
                ? 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)' 
                : 'white',
              border: active === idx ? 'none' : '1px solid #e5e7eb',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: active === idx ? '0 4px 12px rgba(105, 0, 239, 0.3)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 7: Vertical Pills
function TabVariant7() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: 'Dashboard', icon: Home },
    { label: 'Search', icon: Search },
    { label: 'Favorites', icon: Heart },
    { label: 'Account', icon: User }
  ];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 7: Vertical Pills
        </h3>
        <CopyButton 
          variantId="tab-vertical"
          code={`<style>
.tab-vertical-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 200px;
  background: #f9fafb;
  padding: 8px;
  border-radius: 12px;
}
.tab-vertical-item {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-vertical-item:hover {
  background: rgba(105, 0, 239, 0.05);
}
.tab-vertical-item.active {
  color: #6900ef;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>

<div class="tab-vertical-container">
  <button class="tab-vertical-item active">
    🏠 Dashboard
  </button>
  <button class="tab-vertical-item">
    🔍 Search
  </button>
  <button class="tab-vertical-item">
    ❤️ Favorites
  </button>
  <button class="tab-vertical-item">
    👤 Account
  </button>
</div>`}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '6px',
        width: '200px',
        background: '#f9fafb',
        padding: '8px',
        borderRadius: '12px'
      }}>
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          return (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: '600',
                color: active === idx ? '#6900ef' : '#6B7280',
                background: active === idx ? 'white' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                boxShadow: active === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Tab Variant 8: Border Shift
function TabVariant8() {
  const [active, setActive] = useState(0);
  const tabs = ['All', 'Active', 'Completed', 'Archived'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 8: Border Shift
        </h3>
        <CopyButton 
          variantId="tab-border-shift"
          code={`<style>
.tab-border-shift-container {
  display: inline-flex;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 4px;
}
.tab-border-shift-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-border-shift-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>

<div class="tab-border-shift-container">
  <button class="tab-border-shift-item active">All</button>
  <button class="tab-border-shift-item">Active</button>
  <button class="tab-border-shift-item">Completed</button>
  <button class="tab-border-shift-item">Archived</button>
</div>`}
        />
      </div>
      <div style={{ 
        display: 'inline-flex',
        border: '2px solid #e5e7eb',
        borderRadius: '10px',
        padding: '4px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6B7280',
              background: active === idx ? '#6900ef' : 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 9: Icon Only (Minimal)
function TabVariant9() {
  const [active, setActive] = useState(0);
  const tabs = [
    { icon: Star },
    { icon: Calendar },
    { icon: FileText },
    { icon: Database }
  ];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 9: Icon Only (Minimal)
        </h3>
        <CopyButton 
          variantId="tab-icon-only"
          code={`<style>
.tab-icon-only-container {
  display: flex;
  gap: 8px;
}
.tab-icon-only-item {
  width: 48px;
  height: 48px;
  color: #6B7280;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-icon-only-item:hover {
  border-color: #6900ef;
}
.tab-icon-only-item.active {
  color: #6900ef;
  background: #f3e8ff;
  border-color: #6900ef;
}
</style>

<div class="tab-icon-only-container">
  <button class="tab-icon-only-item active">⭐</button>
  <button class="tab-icon-only-item">📅</button>
  <button class="tab-icon-only-item">📄</button>
  <button class="tab-icon-only-item">💾</button>
</div>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          return (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                width: '48px',
                height: '48px',
                fontSize: '14px',
                fontWeight: '600',
                color: active === idx ? '#6900ef' : '#6B7280',
                background: active === idx ? '#f3e8ff' : 'white',
                border: active === idx ? '2px solid #6900ef' : '2px solid #e5e7eb',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Tab Variant 10: Segmented with Shadow
function TabVariant10() {
  const [active, setActive] = useState(0);
  const tabs = ['Week', 'Month', 'Quarter', 'Year'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 10: Segmented with Shadow
        </h3>
        <CopyButton 
          variantId="tab-segmented"
          code={`<style>
.tab-segmented-container {
  display: inline-flex;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 6px;
}
.tab-segmented-item {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-segmented-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, #6900ef 0%, #8b3dff 100%);
  box-shadow: 0 2px 8px rgba(105, 0, 239, 0.3);
}
</style>

<div class="tab-segmented-container">
  <button class="tab-segmented-item active">Week</button>
  <button class="tab-segmented-item">Month</button>
  <button class="tab-segmented-item">Quarter</button>
  <button class="tab-segmented-item">Year</button>
</div>`}
        />
      </div>
      <div style={{ 
        display: 'inline-flex',
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '12px',
        padding: '6px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6B7280',
              background: active === idx 
                ? 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)' 
                : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: active === idx ? '0 2px 8px rgba(105, 0, 239, 0.3)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 11: Badge Count Style
function TabVariant11() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: 'Inbox', count: 12 },
    { label: 'Unread', count: 5 },
    { label: 'Important', count: 3 },
    { label: 'Sent', count: 0 }
  ];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 11: Badge Count Style
        </h3>
        <CopyButton 
          variantId="tab-badge"
          code={`const [active, setActive] = useState(0);
const tabs = [
  { label: 'Inbox', count: 12 },
  { label: 'Unread', count: 5 },
  { label: 'Important', count: 3 },
  { label: 'Sent', count: 0 }
];

<div style={{ display: 'flex', gap: '8px' }}>
  {tabs.map((tab, idx) => (
    <button
      key={idx}
      onClick={() => setActive(idx)}
      style={{
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        color: active === idx ? '#6900ef' : '#6B7280',
        background: active === idx ? '#f3e8ff' : 'white',
        border: active === idx ? '2px solid #6900ef' : '2px solid #e5e7eb',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        position: 'relative'
      }}
    >
      {tab.label}
      {tab.count > 0 && (
        <span style={{
          background: active === idx ? '#6900ef' : '#e5e7eb',
          color: active === idx ? 'white' : '#6B7280',
          fontSize: '12px',
          fontWeight: '700',
          padding: '2px 8px',
          borderRadius: '12px',
          minWidth: '24px',
          textAlign: 'center'
        }}>
          {tab.count}
        </span>
      )}
    </button>
  ))}
</div>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? '#6900ef' : '#6B7280',
              background: active === idx ? '#f3e8ff' : 'white',
              border: active === idx ? '2px solid #6900ef' : '2px solid #e5e7eb',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative'
            }}
          >
            {tab.label}
            {tab.count > 0 && (
              <span style={{
                background: active === idx ? '#6900ef' : '#e5e7eb',
                color: active === idx ? 'white' : '#6B7280',
                fontSize: '12px',
                fontWeight: '700',
                padding: '2px 8px',
                borderRadius: '12px',
                minWidth: '24px',
                textAlign: 'center'
              }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 12: Top Border Accent
function TabVariant12() {
  const [active, setActive] = useState(0);
  const tabs = ['General', 'Security', 'Privacy', 'Advanced'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 12: Top Border Accent
        </h3>
        <CopyButton 
          variantId="tab-top-border"
          code={`<style>
.tab-top-border-container {
  display: flex;
  gap: 4px;
}
.tab-top-border-item {
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  background: #f9fafb;
  border: none;
  border-top: 3px solid transparent;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-top-border-item.active {
  color: #111827;
  background: #ffffff;
  border-top-color: #6900ef;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}
</style>

<div class="tab-top-border-container">
  <button class="tab-top-border-item active">General</button>
  <button class="tab-top-border-item">Security</button>
  <button class="tab-top-border-item">Privacy</button>
  <button class="tab-top-border-item">Advanced</button>
</div>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? '#111827' : '#6B7280',
              background: active === idx ? 'white' : '#f9fafb',
              border: 'none',
              borderTop: active === idx ? '3px solid #6900ef' : '3px solid transparent',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: active === idx ? '0 -2px 8px rgba(0,0,0,0.05)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 13: Rounded Outline
function TabVariant13() {
  const [active, setActive] = useState(0);
  const tabs = ['Photos', 'Videos', 'Documents', 'Music'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 13: Rounded Outline
        </h3>
        <CopyButton 
          variantId="tab-rounded-outline"
          code={`<style>
.tab-rounded-outline-container {
  display: flex;
  gap: 12px;
}
.tab-rounded-outline-item {
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #6900ef;
  background: transparent;
  border: 2px solid #6900ef;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.tab-rounded-outline-item.active {
  color: #ffffff;
  background: #6900ef;
}
</style>

<div class="tab-rounded-outline-container">
  <button class="tab-rounded-outline-item active">Photos</button>
  <button class="tab-rounded-outline-item">Videos</button>
  <button class="tab-rounded-outline-item">Documents</button>
  <button class="tab-rounded-outline-item">Music</button>
</div>`}
        />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 28px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6900ef',
              background: active === idx ? '#6900ef' : 'transparent',
              border: '2px solid #6900ef',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tab Variant 14: Icon Top (Mobile Style)
function TabVariant14() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: 'Cloud', icon: Cloud },
    { label: 'Lock', icon: Lock },
    { label: 'Zap', icon: Zap },
    { label: 'User', icon: User }
  ];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 14: Icon Top (Mobile Style)
        </h3>
        <CopyButton 
          variantId="tab-icon-top"
          code={`const [active, setActive] = useState(0);
const tabs = [
  { label: 'Cloud', icon: Cloud },
  { label: 'Lock', icon: Lock },
  { label: 'Zap', icon: Zap },
  { label: 'User', icon: User }
];

<div style={{ 
  display: 'flex', 
  gap: '8px',
  background: '#f9fafb',
  padding: '12px',
  borderRadius: '12px',
  width: 'fit-content'
}}>
  {tabs.map((tab, idx) => {
    const Icon = tab.icon;
    return (
      <button
        key={idx}
        onClick={() => setActive(idx)}
        style={{
          padding: '16px 20px',
          fontSize: '12px',
          fontWeight: '600',
          color: active === idx ? '#6900ef' : '#6B7280',
          background: active === idx ? 'white' : 'transparent',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          minWidth: '80px',
          boxShadow: active === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
        }}
      >
        <Icon size={20} />
        {tab.label}
      </button>
    );
  })}
</div>`}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '8px',
        background: '#f9fafb',
        padding: '12px',
        borderRadius: '12px',
        width: 'fit-content'
      }}>
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          return (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                padding: '16px 20px',
                fontSize: '12px',
                fontWeight: '600',
                color: active === idx ? '#6900ef' : '#6B7280',
                background: active === idx ? 'white' : 'transparent',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                minWidth: '80px',
                boxShadow: active === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              <Icon size={20} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Tab Variant 15: Sliding Background
function TabVariant15() {
  const [active, setActive] = useState(0);
  const tabs = ['Sales', 'Marketing', 'Support', 'Engineering'];
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          Variant 15: Sliding Background
        </h3>
        <CopyButton 
          variantId="tab-sliding-background"
          code={`const [active, setActive] = useState(0);
const tabs = ['Sales', 'Marketing', 'Support', 'Engineering'];

<div style={{ 
  display: 'inline-flex',
  position: 'relative',
  background: '#f3f4f6',
  borderRadius: '12px',
  padding: '4px'
}}>
  {tabs.map((tab, idx) => (
    <button
      key={idx}
      onClick={() => setActive(idx)}
      style={{
        padding: '10px 24px',
        fontSize: '14px',
        fontWeight: '600',
        color: active === idx ? 'white' : '#6B7280',
        background: active === idx ? '#6900ef' : 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        zIndex: 1
      }}
    >
      {tab}
    </button>
  ))}
</div>`}
        />
      </div>
      <div style={{ 
        display: 'inline-flex',
        position: 'relative',
        background: '#f3f4f6',
        borderRadius: '12px',
        padding: '4px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: '600',
              color: active === idx ? 'white' : '#6B7280',
              background: active === idx ? '#6900ef' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              zIndex: 1
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TabVariants() {
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
            Tab Style Variants
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6B7280',
            margin: 0
          }}>
            Explore 15 different tab navigation styles for your interface
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gap: '32px'
        }}>
          {/* Row 1 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant1 />
          </div>

          {/* Row 2 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant2 />
          </div>

          {/* Row 3 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant3 />
          </div>

          {/* Row 4 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant4 />
          </div>

          {/* Row 5 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant5 />
          </div>

          {/* Row 6 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant6 />
          </div>

          {/* Row 7 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant7 />
          </div>

          {/* Row 8 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant8 />
          </div>

          {/* Row 9 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant9 />
          </div>

          {/* Row 10 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant10 />
          </div>

          {/* Row 11 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant11 />
          </div>

          {/* Row 12 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant12 />
          </div>

          {/* Row 13 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant13 />
          </div>

          {/* Row 14 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant14 />
          </div>

          {/* Row 15 */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <TabVariant15 />
          </div>
        </div>
      </div>
    </div>
  );
}