import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Calendar, TrendingUp, Activity, Package } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

export function Screen3TrendsWeekly({ onNext }: ScreenProps) {
  const weeklyData = [
    { date: "Mon", IPDO: 24, Panorama: 18, MasterApps: 12, Cognito: 15 },
    { date: "Tue", IPDO: 28, Panorama: 22, MasterApps: 15, Cognito: 18 },
    { date: "Wed", IPDO: 32, Panorama: 25, MasterApps: 18, Cognito: 20 },
    { date: "Thu", IPDO: 26, Panorama: 20, MasterApps: 14, Cognito: 16 },
    { date: "Fri", IPDO: 30, Panorama: 24, MasterApps: 16, Cognito: 19 },
    { date: "Sat", IPDO: 15, Panorama: 12, MasterApps: 8, Cognito: 10 },
    { date: "Sun", IPDO: 12, Panorama: 10, MasterApps: 6, Cognito: 8 },
  ];

  const stats = [
    { icon: Activity, label: "Total Tickets", value: "856", color: "#2E3192" },
    { icon: Package, label: "Active Portfolios", value: "23", color: "#1EBBD7" },
    { icon: TrendingUp, label: "Daily Average", value: "122", color: "#10B981" },
    { icon: Calendar, label: "Peak Day", value: "Wednesday", color: "#F59E0B" },
  ];

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px', background: '#F8F9FB' }}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
            Ticket Trends – GCC Portfolio (Weekly View)
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
            Ticket distribution and activity for the last 7 days
          </p>
        </div>
        <Select defaultValue="7days">
          <SelectTrigger
            className="w-40"
            style={{
              height: '40px',
              fontSize: '14px',
              borderRadius: '8px',
              border: '1px solid #D3D6E5',
            }}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="14days">Last 14 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-4"
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #D3D6E5',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card
        className="p-6 flex-1"
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #D3D6E5',
        }}
      >
        <h3 className="mb-4" style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#111827' }}>
          Daily Ticket Distribution by Category
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#D3D6E5' }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#D3D6E5' }}
            />
            <Tooltip
              contentStyle={{
                background: '#FFFFFF',
                border: '1px solid #D3D6E5',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            <Bar dataKey="IPDO" fill="#2E3192" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Panorama" fill="#1EBBD7" radius={[4, 4, 0, 0]} />
            <Bar dataKey="MasterApps" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Cognito" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
