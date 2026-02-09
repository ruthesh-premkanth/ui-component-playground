import { useState } from "react";
import { Sparkles, Plus, Edit2, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface ScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

interface AgendaItem {
  id: string;
  text: string;
  isEditing: boolean;
}

export function Screen2Agenda({ onNext }: ScreenProps) {
  const [agendaName, setAgendaName] = useState("");
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [editingText, setEditingText] = useState("");

  const generateWithAI = () => {
    const defaultItems = [
      "Strategic Review & Alignment",
      "GCC Portfolio Updates",
      "Resource Allocation Review",
      "Key Concerns & Suggestions",
      "Quarterly Deliverables Status",
      "Risk Assessment & Mitigation",
    ];

    const newItems: AgendaItem[] = defaultItems.map((item, index) => ({
      id: Date.now() + index + "",
      text: item,
      isEditing: false,
    }));

    setAgendaItems(newItems);
  };

  const addNewItem = () => {
    const newItem: AgendaItem = {
      id: Date.now() + "",
      text: "New Agenda Item",
      isEditing: true,
    };
    setAgendaItems([...agendaItems, newItem]);
    setEditingText("New Agenda Item");
  };

  const startEdit = (item: AgendaItem) => {
    setAgendaItems(
      agendaItems.map((i) => (i.id === item.id ? { ...i, isEditing: true } : { ...i, isEditing: false }))
    );
    setEditingText(item.text);
  };

  const saveEdit = (itemId: string) => {
    setAgendaItems(
      agendaItems.map((i) => (i.id === itemId ? { ...i, text: editingText, isEditing: false } : i))
    );
  };

  const deleteItem = (itemId: string) => {
    setAgendaItems(agendaItems.filter((i) => i.id !== itemId));
  };

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px', background: '#F8F9FB' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827' }}>
          Agenda Setup
        </h1>
        <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
          Configure today's meeting agenda with AI assistance
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-5 gap-6 h-full">
          {/* Left Section - Agenda Name Input */}
          <div className="col-span-2">
            <Card
              className="p-6 h-full"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #D3D6E5',
              }}
            >
              <div className="mb-6">
                <Label htmlFor="agendaName" style={{ fontSize: '14px', fontWeight: 500 }}>
                  Agenda Name
                </Label>
                <Input
                  id="agendaName"
                  placeholder="e.g., Q4 Governance Review"
                  value={agendaName}
                  onChange={(e) => setAgendaName(e.target.value)}
                  className="mt-2"
                  style={{
                    height: '40px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: '1px solid #D3D6E5',
                  }}
                />
              </div>

              <Button
                onClick={generateWithAI}
                className="w-full gap-2"
                style={{
                  height: '40px',
                  background: '#2E3192',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '8px',
                }}
              >
                <Sparkles className="w-4 h-4" />
                Generate with AI
              </Button>

              <div className="mt-6 p-4 rounded-lg" style={{ background: '#F8F9FB' }}>
                <p style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280' }}>
                  <strong>AI Suggestion:</strong> Based on your recent meetings, the AI will generate relevant agenda items including strategic reviews, portfolio updates, and key discussion points.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Section - Generated Agenda Items */}
          <div className="col-span-3">
            <Card
              className="p-6 h-full flex flex-col"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #D3D6E5',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#111827' }}>
                  Agenda Items
                </h3>
                <Button
                  onClick={addNewItem}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  style={{
                    height: '32px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: '1px solid #2E3192',
                    color: '#2E3192',
                  }}
                >
                  <Plus className="w-4 h-4" />
                  Add New
                </Button>
              </div>

              <div className="flex-1 overflow-auto space-y-3">
                {agendaItems.length === 0 ? (
                  <div className="h-full flex items-center justify-center">
                    <p style={{ fontSize: '14px', color: '#6B7280' }}>
                      No agenda items yet. Click "Generate with AI" to get started.
                    </p>
                  </div>
                ) : (
                  agendaItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-lg border flex items-center gap-4 hover:shadow-md transition-shadow"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D3D6E5',
                      }}
                    >
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#2E3192',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </div>

                      {item.isEditing ? (
                        <Input
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          onBlur={() => saveEdit(item.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEdit(item.id);
                          }}
                          autoFocus
                          className="flex-1"
                          style={{
                            height: '32px',
                            fontSize: '14px',
                            borderRadius: '6px',
                          }}
                        />
                      ) : (
                        <span className="flex-1" style={{ fontSize: '14px', color: '#111827' }}>
                          {item.text}
                        </span>
                      )}

                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(item)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Edit2 className="w-4 h-4" style={{ color: '#1EBBD7' }} />
                        </button>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Trash2 className="w-4 h-4" style={{ color: '#EF4444' }} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
