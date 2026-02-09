import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login clicked', { username, password });
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ 
      maxHeight: '768px',
      background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5f7ff 100%)'
    }}>
      {/* Complex Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(105, 0, 239, 0.02) 2px, rgba(105, 0, 239, 0.02) 4px)
          `,
          width: '100%',
          height: '100%'
        }}></div>
      </div>

      {/* Animated Glow Elements */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(105, 0, 239, 0.08) 0%, transparent 70%)',
        top: '-200px',
        right: '-200px',
        animation: 'pulse 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(105, 0, 239, 0.06) 0%, transparent 70%)',
        bottom: '-150px',
        left: '-150px',
        animation: 'pulse 10s ease-in-out infinite 2s'
      }}></div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        <div className="w-full max-w-6xl flex items-center gap-16">
          
          {/* Left Side - Branding & Info */}
          <div className="flex-1" style={{ animation: 'slideIn 0.6s ease-out' }}>
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-8">
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(105, 0, 239, 0.3)',
                position: 'relative',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <Shield size={32} color="white" strokeWidth={2.5} />
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  border: '2px solid rgba(105, 0, 239, 0.2)',
                  borderRadius: '18px'
                }}></div>
              </div>
              <div>
                <h1 style={{ 
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.2'
                }}>
                  Dr.Reddy's
                </h1>
                <p style={{ 
                  fontSize: '14px',
                  color: '#6900ef',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  LABORATORIES
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#1a1a2e',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '-1px'
            }}>
              Smart Reporting<br />
              <span style={{ color: '#6900ef' }}>Platform</span>
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '450px'
            }}>
              Access powerful analytics and insights with enterprise-grade security. 
              Your data-driven decisions start here.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Real-time Analytics Dashboard',
                'Secure Data Management',
                'Advanced Reporting Tools'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#6900ef',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(105, 0, 239, 0.4)'
                  }}></div>
                  <span style={{
                    fontSize: '14px',
                    color: '#4B5563',
                    fontWeight: '500'
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Features Tags */}
            <div style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              maxWidth: '450px'
            }}>
              {/* Card 1 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid rgba(105, 0, 239, 0.12)',
                boxShadow: '0 4px 12px rgba(105, 0, 239, 0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 12px rgba(105, 0, 239, 0.25)'
                }}>
                  <span style={{ fontSize: '24px' }}>⚡</span>
                </div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '8px'
                }}>
                  Lightning Fast
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  Generate reports in seconds
                </p>
              </div>

              {/* Card 2 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid rgba(105, 0, 239, 0.12)',
                boxShadow: '0 4px 12px rgba(105, 0, 239, 0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 12px rgba(105, 0, 239, 0.25)'
                }}>
                  <span style={{ fontSize: '24px' }}>🌐</span>
                </div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '8px'
                }}>
                  Cloud Access
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  Access anywhere
                </p>
              </div>

              {/* Card 3 */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid rgba(105, 0, 239, 0.12)',
                boxShadow: '0 4px 12px rgba(105, 0, 239, 0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 12px rgba(105, 0, 239, 0.25)'
                }}>
                  <span style={{ fontSize: '24px' }}>📊</span>
                </div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  marginBottom: '8px'
                }}>
                  Smart Analytics
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  lineHeight: '1.5'
                }}>
                  AI-powered insights
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div style={{
            width: '480px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 24px 48px rgba(105, 0, 239, 0.12), 0 0 0 1px rgba(105, 0, 239, 0.08)',
            border: '1px solid rgba(105, 0, 239, 0.1)',
            animation: 'slideIn 0.6s ease-out 0.2s backwards'
          }}>
            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a1a2e',
                marginBottom: '8px'
              }}>
                Welcome Back
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6B7280'
              }}>
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Username Field */}
              <div style={{ marginBottom: '24px' }}>
                <label 
                  htmlFor="username"
                  style={{ 
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '10px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase'
                  }}
                >
                  Username
                </label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: focusedField === 'username' ? '#6900ef' : '#9CA3AF',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s',
                    zIndex: 1
                  }}>
                    <Mail size={20} />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your username"
                    style={{
                      width: '100%',
                      height: '56px',
                      paddingLeft: '52px',
                      paddingRight: '16px',
                      fontSize: '15px',
                      color: '#1a1a2e',
                      backgroundColor: 'white',
                      border: `2px solid ${focusedField === 'username' ? '#6900ef' : '#E5E7EB'}`,
                      borderRadius: '14px',
                      outline: 'none',
                      transition: 'all 0.3s',
                      boxShadow: focusedField === 'username' ? '0 0 0 4px rgba(105, 0, 239, 0.1)' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div style={{ marginBottom: '24px' }}>
                <label 
                  htmlFor="password"
                  style={{ 
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '10px',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase'
                  }}
                >
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: focusedField === 'password' ? '#6900ef' : '#9CA3AF',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s',
                    zIndex: 1
                  }}>
                    <Lock size={20} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your password"
                    style={{
                      width: '100%',
                      height: '56px',
                      paddingLeft: '52px',
                      paddingRight: '52px',
                      fontSize: '15px',
                      color: '#1a1a2e',
                      backgroundColor: 'white',
                      border: `2px solid ${focusedField === 'password' ? '#6900ef' : '#E5E7EB'}`,
                      borderRadius: '14px',
                      outline: 'none',
                      transition: 'all 0.3s',
                      boxShadow: focusedField === 'password' ? '0 0 0 4px rgba(105, 0, 239, 0.1)' : 'none'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#9CA3AF',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#6900ef'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: '#6B7280',
                  cursor: 'pointer'
                }}>
                  <input 
                    type="checkbox" 
                    style={{ 
                      cursor: 'pointer',
                      accentColor: '#6900ef'
                    }} 
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: '14px',
                    color: '#6900ef',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8b3dff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6900ef'}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  height: '56px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: 'white',
                  background: 'linear-gradient(135deg, #6900ef 0%, #8b3dff 100%)',
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 8px 24px rgba(105, 0, 239, 0.3)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(105, 0, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(105, 0, 239, 0.3)';
                }}
              >
                Login to Dashboard
                <ArrowRight size={20} />
              </button>

              {/* Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }}></div>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>OR</span>
                <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }}></div>
              </div>

              {/* SSO Button */}
              <button
                type="button"
                onClick={() => console.log('SSO Login')}
                style={{
                  width: '100%',
                  height: '56px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#6900ef',
                  backgroundColor: 'rgba(105, 0, 239, 0.08)',
                  border: '2px solid rgba(105, 0, 239, 0.2)',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(105, 0, 239, 0.12)';
                  e.currentTarget.style.borderColor = '#6900ef';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(105, 0, 239, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(105, 0, 239, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Login With SSO
              </button>
            </form>

            {/* Footer */}
            <div style={{ 
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #E5E7EB',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '12px',
                color: '#9CA3AF'
              }}>
                Copyrights © Dr.Reddy's 2020. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}