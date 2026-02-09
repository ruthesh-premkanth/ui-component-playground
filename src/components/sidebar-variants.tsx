import { Home, BarChart, Settings, Users, Mail, Calendar, FileText, Heart, Star, Search } from 'lucide-react';

export default function SidebarVariants() {
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
            Sidebar Navigation Variants
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6B7280',
            margin: 0
          }}>
            Explore 10 different sidebar navigation styles
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px'
        }}>
          {/* Variant 1: Light Minimal */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 1: Light Minimal
            </h3>
            <div style={{ 
              width: '240px',
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? '#f3e8ff' : 'transparent',
                    color: idx === 0 ? '#6900ef' : '#6B7280'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 2: Dark Theme */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 2: Dark Theme
            </h3>
            <div style={{ 
              width: '240px',
              background: '#1f2937',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? '#6900ef' : 'transparent',
                    color: idx === 0 ? 'white' : '#9CA3AF'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 3: With Icons Only */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 3: Icons Only (Collapsed)
            </h3>
            <div style={{ 
              width: '72px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px 12px'
            }}>
              <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: '#6900ef', borderRadius: '8px', margin: '0 auto' }} />
              </div>
              {[Home, BarChart, Users, Settings].map((Icon, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    background: idx === 0 ? '#f3e8ff' : 'transparent',
                    color: idx === 0 ? '#6900ef' : '#6B7280'
                  }}
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Variant 4: With Badges */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 4: With Badges
            </h3>
            <div style={{ 
              width: '240px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard', badge: null },
                { icon: Mail, label: 'Messages', badge: '12' },
                { icon: Users, label: 'Team', badge: '3' },
                { icon: Settings, label: 'Settings', badge: null }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? '#f3e8ff' : 'transparent',
                    color: idx === 0 ? '#6900ef' : '#6B7280',
                    position: 'relative'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500', flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{
                      padding: '2px 8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'white',
                      background: '#ef4444',
                      borderRadius: '12px'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Variant 5: Gradient Accent */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 5: Gradient Accent
            </h3>
            <div style={{ 
              width: '240px',
              background: 'linear-gradient(180deg, #6900ef 0%, #8b3dff 100%)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? 'rgba(255,255,255,0.2)' : 'transparent',
                    color: 'white'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 6: Left Border Accent */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 6: Left Border Accent
            </h3>
            <div style={{ 
              width: '240px',
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    borderLeft: idx === 0 ? '3px solid #6900ef' : '3px solid transparent',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? 'white' : 'transparent',
                    color: idx === 0 ? '#6900ef' : '#6B7280'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 7: With Dividers */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 7: With Dividers
            </h3>
            <div style={{ 
              width: '240px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Main
                </div>
                {[
                  { icon: Home, label: 'Dashboard' },
                  { icon: BarChart, label: 'Analytics' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginBottom: '4px',
                      background: idx === 0 ? '#f3e8ff' : 'transparent',
                      color: idx === 0 ? '#6900ef' : '#6B7280'
                    }}
                  >
                    <item.icon size={18} />
                    <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Other
                </div>
                {[
                  { icon: Users, label: 'Team' },
                  { icon: Settings, label: 'Settings' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginBottom: '4px',
                      color: '#6B7280'
                    }}
                  >
                    <item.icon size={18} />
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Variant 8: Floating */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 8: Floating
            </h3>
            <div style={{ 
              width: '240px',
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    background: idx === 0 ? '#6900ef' : 'transparent',
                    color: idx === 0 ? 'white' : '#6B7280',
                    boxShadow: idx === 0 ? '0 4px 12px rgba(105, 0, 239, 0.3)' : 'none'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 9: With Search */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 9: With Search
            </h3>
            <div style={{ 
              width: '240px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: '0 0 16px 0' }}>Logo</h2>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} />
                  <input
                    type="text"
                    placeholder="Search..."
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 36px',
                      fontSize: '13px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              {[
                { icon: Home, label: 'Dashboard' },
                { icon: BarChart, label: 'Analytics' },
                { icon: Users, label: 'Team' },
                { icon: Settings, label: 'Settings' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '4px',
                    background: idx === 0 ? '#f3e8ff' : 'transparent',
                    color: idx === 0 ? '#6900ef' : '#6B7280'
                  }}
                >
                  <item.icon size={20} />
                  <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant 10: Bottom Profile */}
          <div style={{ 
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Variant 10: Bottom Profile
            </h3>
            <div style={{ 
              width: '240px',
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              height: '400px'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#6900ef', margin: 0 }}>Logo</h2>
              </div>
              <div style={{ flex: 1 }}>
                {[
                  { icon: Home, label: 'Dashboard' },
                  { icon: BarChart, label: 'Analytics' },
                  { icon: Users, label: 'Team' },
                  { icon: Settings, label: 'Settings' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginBottom: '4px',
                      background: idx === 0 ? '#f3e8ff' : 'transparent',
                      color: idx === 0 ? '#6900ef' : '#6B7280'
                    }}
                  >
                    <item.icon size={20} />
                    <span style={{ fontSize: '14px', fontWeight: idx === 0 ? '600' : '500' }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 'auto',
                padding: '12px',
                background: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}>
                <div style={{ width: '36px', height: '36px', background: '#6900ef', borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>John Doe</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>john@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
