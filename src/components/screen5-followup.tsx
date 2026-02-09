import { useState } from "react";
import { Plus, Edit2, Trash2, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

interface FollowUpItem {
  id: string;
  item: string;
  status: "pending" | "in-progress" | "completed";
  owner: string;
  comments: string;
  date: string;
}

export function Screen5FollowUp({ onNext }: ScreenProps) {
  const [items, setItems] = useState<FollowUpItem[]>([
    {
      id: "1",
      item: "Review and update portfolio risk assessment matrix",
      status: "in-progress",
      owner: "Sarah Johnson",
      comments: "Waiting for input from stakeholders",
      date: "2024-11-15",
    },
    {
      id: "2",
      item: "Complete integration timeline for Q4 deliverables",
      status: "pending",
      owner: "Michael Chen",
      comments: "Resource allocation pending approval",
      date: "2024-11-12",
    },
    {
      id: "3",
      item: "Finalize compliance documentation for IPDO platform",
      status: "completed",
      owner: "Emily Rodriguez",
      comments: "Submitted to legal team for review",
      date: "2024-11-10",
    },
    {
      id: "4",
      item: "Schedule technical review for Panorama updates",
      status: "in-progress",
      owner: "David Kim",
      comments: "Meeting scheduled for next week",
      date: "2024-11-14",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#10B981";
      case "in-progress":
        return "#1EBBD7";
      case "pending":
        return "#F59E0B";
      default:
        return "#6B7280";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  const addNewItem = () => {
    const newItem: FollowUpItem = {
      id: Date.now().toString(),
      item: "New follow-up item",
      status: "pending",
      owner: "Unassigned",
      comments: "",
      date: new Date().toISOString().split("T")[0],
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
            Follow-up Items from Previous Governance Meetings
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
            Track and manage action items from past meetings
          </p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="all">
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
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
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
            Add New Item
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card
        className="flex-1 overflow-hidden"
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #D3D6E5',
        }}
      >
        <div className="h-full flex flex-col">
          {/* Table Header */}
          <div
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b"
            style={{
              borderColor: '#D3D6E5',
              background: '#F8F9FB',
            }}
          >
            <div className="col-span-4" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Item
            </div>
            <div className="col-span-2" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Status
            </div>
            <div className="col-span-2" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Owner
            </div>
            <div className="col-span-2" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Comments
            </div>
            <div className="col-span-1" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Date
            </div>
            <div className="col-span-1 text-right" style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
              Actions
            </div>
          </div>

          {/* Table Body */}
          <div className="flex-1 overflow-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#D3D6E5' }}
              >
                <div className="col-span-4" style={{ fontSize: '14px', color: '#111827' }}>
                  {item.item}
                </div>
                <div className="col-span-2">
                  <Badge
                    style={{
                      background: `${getStatusColor(item.status)}15`,
                      color: getStatusColor(item.status),
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {getStatusLabel(item.status)}
                  </Badge>
                </div>
                <div className="col-span-2" style={{ fontSize: '14px', color: '#111827' }}>
                  {item.owner}
                </div>
                <div className="col-span-2" style={{ fontSize: '14px', color: '#6B7280' }}>
                  {item.comments}
                </div>
                <div className="col-span-1 flex items-center gap-1" style={{ fontSize: '12px', color: '#6B7280' }}>
                  <Calendar className="w-3 h-3" />
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <Edit2 className="w-4 h-4" style={{ color: '#1EBBD7' }} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="p-1 rounded hover:bg-gray-100">
                    <Trash2 className="w-4 h-4" style={{ color: '#EF4444' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
