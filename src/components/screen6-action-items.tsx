import { useState } from "react";
import { Plus, Edit2, Trash2, AlertCircle, User } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

interface ActionItem {
  id: string;
  concern: string;
  owner: string;
  ownerInitials: string;
  status: "open" | "in-progress" | "resolved";
  notes: string;
  priority: "high" | "medium" | "low";
}

export function Screen6ActionItems({ onNext }: ScreenProps) {
  const [items, setItems] = useState<ActionItem[]>([
    {
      id: "1",
      concern: "Resource allocation mismatch affecting Q4 delivery timeline",
      owner: "Sarah Johnson",
      ownerInitials: "SJ",
      status: "in-progress",
      notes: "Meeting scheduled with resource management team. Awaiting approval for additional headcount.",
      priority: "high",
    },
    {
      id: "2",
      concern: "Integration delays between IPDO and Master Apps platforms",
      owner: "Michael Chen",
      ownerInitials: "MC",
      status: "open",
      notes: "Technical review completed. API changes required on both platforms.",
      priority: "high",
    },
    {
      id: "3",
      concern: "Compliance documentation incomplete for Panorama updates",
      owner: "Emily Rodriguez",
      ownerInitials: "ER",
      status: "resolved",
      notes: "All documentation submitted and approved by legal team.",
      priority: "medium",
    },
    {
      id: "4",
      concern: "Performance degradation in Cognito platform during peak hours",
      owner: "David Kim",
      ownerInitials: "DK",
      status: "in-progress",
      notes: "Infrastructure team investigating. Scaling strategy being developed.",
      priority: "medium",
    },
  ]);

  const completionRate = Math.round(
    (items.filter((item) => item.status === "resolved").length / items.length) * 100
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "#10B981";
      case "in-progress":
        return "#1EBBD7";
      case "open":
        return "#F59E0B";
      default:
        return "#6B7280";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "#EF4444";
      case "medium":
        return "#F59E0B";
      case "low":
        return "#10B981";
      default:
        return "#6B7280";
    }
  };

  const addNewItem = () => {
    const newItem: ActionItem = {
      id: Date.now().toString(),
      concern: "New concern description",
      owner: "Unassigned",
      ownerInitials: "UN",
      status: "open",
      notes: "",
      priority: "medium",
    };
    setItems([newItem, ...items]);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px', background: '#F8F9FB' }}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
            Action Items for the Concerns Raised
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
            Track resolution status and ownership of key concerns
          </p>
        </div>
        <Button
          onClick={addNewItem}
          className="gap-2"
          style={{
            height: '40px',
            background: '#2E3192',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '8px',
          }}
        >
          <Plus className="w-4 h-4" />
          Add New Action Item
        </Button>
      </div>

      {/* Progress Card */}
      <Card
        className="mb-6 p-4"
        style={{
          background: 'linear-gradient(135deg, #2E3192 0%, #1EBBD7 100%)',
          borderRadius: '12px',
          border: 'none',
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div style={{ fontSize: '14px', lineHeight: '20px', color: '#FFFFFF', opacity: 0.9 }}>
              Overall Completion Rate
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px', color: '#FFFFFF' }}>
              {completionRate}%
            </div>
          </div>
          <div className="flex-1 mx-8">
            <Progress value={completionRate} className="h-3" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <div className="text-right">
            <div style={{ fontSize: '14px', lineHeight: '20px', color: '#FFFFFF', opacity: 0.9 }}>
              {items.filter((item) => item.status === "resolved").length} of {items.length} Resolved
            </div>
          </div>
        </div>
      </Card>

      {/* Action Items Grid */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="p-5 hover:shadow-lg transition-shadow"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #D3D6E5',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" style={{ color: getPriorityColor(item.priority) }} />
                  <Badge
                    style={{
                      background: `${getPriorityColor(item.priority)}15`,
                      color: getPriorityColor(item.priority),
                      border: 'none',
                      fontSize: '11px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.priority}
                  </Badge>
                  <Badge
                    style={{
                      background: `${getStatusColor(item.status)}15`,
                      color: getStatusColor(item.status),
                      border: 'none',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}
                  >
                    {item.status.replace('-', ' ')}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <Edit2 className="w-4 h-4" style={{ color: '#1EBBD7' }} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="p-1 rounded hover:bg-gray-100">
                    <Trash2 className="w-4 h-4" style={{ color: '#EF4444' }} />
                  </button>
                </div>
              </div>

              <h4 className="mb-3" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#111827' }}>
                {item.concern}
              </h4>

              <div className="mb-3 flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarFallback
                    style={{
                      background: '#2E3192',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    {item.ownerInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280' }}>Assigned Owner</div>
                  <div style={{ fontSize: '14px', lineHeight: '20px', color: '#111827' }}>{item.owner}</div>
                </div>
              </div>

              <div>
                <div className="mb-2" style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280', fontWeight: 500 }}>
                  Notes
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: '#F8F9FB',
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#111827',
                    minHeight: '60px',
                  }}
                >
                  {item.notes || "No notes added yet."}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
