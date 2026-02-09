import { useState } from "react";
import { Shield, Briefcase, Users, UserCheck } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface Role {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  sampleNames: string[];
}

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: "admin",
      name: "Admin",
      description: "Full system access and configuration control",
      icon: Shield,
      color: "#2E3192",
      sampleNames: ["Rajesh Kumar", "Priya Sharma"],
    },
    {
      id: "manager",
      name: "Manager",
      description: "Team oversight and project management",
      icon: Briefcase,
      color: "#1EBBD7",
      sampleNames: ["Amit Patel", "Sneha Reddy"],
    },
    {
      id: "employee",
      name: "Employee",
      description: "Standard access for daily operations",
      icon: Users,
      color: "#10B981",
      sampleNames: ["Karthik Singh", "Divya Menon"],
    },
    {
      id: "hr",
      name: "HR",
      description: "Employee records and recruitment management",
      icon: UserCheck,
      color: "#F59E0B",
      sampleNames: ["Anjali Rao", "Vikram Joshi"],
    },
  ];

  const handleSelectRole = (roleId: string) => {
    setSelectedRole(roleId);
    console.log("Selected role:", roleId);
  };

  return (
    <div className="h-full flex flex-col" style={{ padding: '32px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: '#111827', marginBottom: '8px' }}>
          Select Your Role
        </h1>
        <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
          Choose your role to access the system
        </p>
      </div>

      {/* Role Cards Grid - 2 columns × 2 rows */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '100%' }}>
        {roles.map((role) => (
          <Card
            key={role.id}
            className="hover:shadow-lg transition-all duration-300"
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #D3D6E5',
              padding: '16px',
            }}
          >
            {/* Icon and Role Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${role.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <role.icon style={{ width: '24px', height: '24px', color: role.color }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#111827', marginBottom: '4px' }}>
                  {role.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>
                  {role.description}
                </p>
              </div>
            </div>

            {/* Sample Names Section */}
            <div
              style={{
                background: '#F8F9FB',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', lineHeight: '16px', color: '#6B7280', marginBottom: '8px', fontWeight: 500 }}>
                Sample Users:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {role.sampleNames.map((name, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: role.color,
                      }}
                    />
                    <span style={{ fontSize: '14px', lineHeight: '20px', color: '#111827' }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Select Button */}
            <Button
              onClick={() => handleSelectRole(role.id)}
              style={{
                width: '100%',
                height: '40px',
                minWidth: '120px',
                borderRadius: '8px',
                padding: '12px 16px',
                background: '#2E3192',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Select
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
