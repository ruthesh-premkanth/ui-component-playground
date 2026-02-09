import { Card } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { CheckCircle, Clock, TrendingUp, Target } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

export function Screen4TrendsTotal({ onNext }: ScreenProps) {
  const categoryData = [
    { name: "IPDO", value: 1245, color: "#2E3192" },
    { name: "Panorama", value: 892, color: "#1EBBD7" },
    { name: "Master Apps", value: 654, color: "#10B981" },
    { name: "Cognito & Jarvis", value: 543, color: "#F59E0B" },
  ];

  const totalTickets = categoryData.reduce((sum, item) => sum + item.value, 0);

  const summaryStats = [
    { icon: CheckCircle, label: "Completion Rate", value: "87.5%", color: "#10B981" },
    { icon: Clock, label: "Open Tickets", value: "412", color: "#F59E0B" },
    { icon: Target, label: "Closed Tickets", value: "2,922", color: "#2E3192" },
    { icon: TrendingUp, label: "Avg Resolution Time", value: "2.3 days", color: "#1EBBD7" },
  ];

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px', background: '#F8F9FB' }}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
            Ticket Trends – GCC Portfolio (Till Date)
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
            Cumulative ticket distribution from start date to current date
          </p>
        </div>
        <Select defaultValue="total">
          <SelectTrigger
            className="w-48"
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
            <SelectItem value="total">All Time</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="qtd">Quarter to Date</SelectItem>
            <SelectItem value="mtd">Month to Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Chart Section */}
        <Card
          className="p-6"
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #D3D6E5',
          }}
        >
          <h3 className="mb-4" style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#111827' }}>
            Ticket Distribution by Category
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #D3D6E5',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Stats Section */}
        <div className="flex flex-col gap-6">
          {/* Total Tickets Card */}
          <Card
            className="p-6 text-center"
            style={{
              background: 'linear-gradient(135deg, #2E3192 0%, #1EBBD7 100%)',
              borderRadius: '12px',
              border: 'none',
            }}
          >
            <div style={{ fontSize: '14px', lineHeight: '20px', color: '#FFFFFF', opacity: 0.9 }}>
              Total Tickets Processed
            </div>
            <div style={{ fontSize: '48px', fontWeight: 600, lineHeight: '56px', color: '#FFFFFF', margin: '8px 0' }}>
              {totalTickets.toLocaleString()}
            </div>
            <div style={{ fontSize: '12px', lineHeight: '16px', color: '#FFFFFF', opacity: 0.8 }}>
              Since Program Inception
            </div>
          </Card>

          {/* Summary Stats Grid */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {summaryStats.map((stat, index) => (
              <Card
                key={index}
                className="p-4 flex flex-col items-center justify-center text-center"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #D3D6E5',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: `${stat.color}15` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280' }}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
