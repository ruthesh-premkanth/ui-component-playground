import { Target, TrendingUp, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

export function Screen1Focus({ onNext }: ScreenProps) {
  const focusItems = [
    {
      icon: Target,
      label: "Strategy",
      title: "Q4 Strategic Alignment",
      description: "Review portfolio performance and align with annual objectives",
      color: "#2E3192",
    },
    {
      icon: TrendingUp,
      label: "Progress",
      title: "85% Portfolio Completion",
      description: "On track for quarterly delivery goals with 3 weeks remaining",
      color: "#1EBBD7",
    },
    {
      icon: AlertCircle,
      label: "Concerns",
      title: "2 High-Priority Items",
      description: "Resource allocation and integration timeline need attention",
      color: "#EF4444",
    },
  ];

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px', background: '#F8F9FB' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
          Today's Focus
        </h1>
        <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
          Governance Meeting Overview • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-3 gap-6">
            {focusItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #D3D6E5',
                }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280', fontWeight: 500 }}>
                    {item.label}
                  </div>
                  <h3 className="mb-2" style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#111827' }}>
                    {item.title}
                  </h3>
                  <p className="flex-1" style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <Card
            className="mt-6 p-6"
            style={{
              background: 'linear-gradient(135deg, #2E3192 0%, #1EBBD7 100%)',
              borderRadius: '12px',
              border: 'none',
            }}
          >
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#FFFFFF' }}>
                  23
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#FFFFFF', opacity: 0.9 }}>
                  Active Portfolios
                </div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#FFFFFF' }}>
                  156
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#FFFFFF', opacity: 0.9 }}>
                  Open Tickets
                </div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#FFFFFF' }}>
                  12
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#FFFFFF', opacity: 0.9 }}>
                  Action Items
                </div>
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#FFFFFF' }}>
                  85%
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#FFFFFF', opacity: 0.9 }}>
                  Completion Rate
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
