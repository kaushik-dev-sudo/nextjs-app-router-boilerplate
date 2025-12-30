"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { DataTable, Badge, Column } from "@/components/ui/data-table";
import { toast } from "react-toastify";
import { Send, RotateCcw } from "lucide-react";

// Define user type
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

// Sample data for the table
const sampleUsers: User[] = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Amit Kumar", email: "amit@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Sneha Gupta", email: "sneha@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Vikram Singh", email: "vikram@example.com", role: "Admin", status: "Active" },
];

// Column configuration for the table
const userColumns: Column<User>[] = [
  {
    key: "id",
    header: "ID",
    width: "w-[60px]",
  },
  {
    key: "name",
    header: "Name",
  },
  {
    key: "email",
    header: "Email",
    render: (value) => (
      <span className="text-gray-500 dark:text-gray-400">{value as string}</span>
    ),
  },
  {
    key: "role",
    header: "Role",
    render: (value) => {
      const role = value as string;
      let variant: "purple" | "info" | "default" = "default";
      if (role === "Admin") variant = "purple";
      else if (role === "Editor") variant = "info";
      return <Badge variant={variant}>{role}</Badge>;
    },
  },
  {
    key: "status",
    header: "Status",
    align: "right",
    render: (value) => {
      const status = value as string;
      const variant = status === "Active" ? "success" : "error";
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];

export default function DemoPage() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    message: "",
    gender: "",
    notifications: false,
    terms: false,
  });

  const departmentOptions = [
    { value: "engineering", label: "Engineering" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
    { value: "hr", label: "Human Resources" },
    { value: "finance", label: "Finance" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in required fields!");
      return;
    }
    
    if (!formData.terms) {
      toast.error("Please accept the terms and conditions!");
      return;
    }
    
    toast.success("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      message: "",
      gender: "",
      notifications: false,
      terms: false,
    });
    toast.info("Form has been reset");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Demo Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This page demonstrates various UI components including form elements and data table.
            Try the dark/light theme toggle in the header!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Demo Form */}
          <Card>
            <CardHeader>
              <CardTitle>Demo Form</CardTitle>
              <CardDescription>
                A sample form with various input elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Department Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    id="department"
                    name="department"
                    options={departmentOptions}
                    placeholder="Select department"
                    value={formData.department}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Gender Radio Buttons */}
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <div className="flex gap-6">
                    <Radio
                      name="gender"
                      value="male"
                      label="Male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                    />
                    <Radio
                      name="gender"
                      value="female"
                      label="Female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                    />
                    <Radio
                      name="gender"
                      value="other"
                      label="Other"
                      checked={formData.gender === "other"}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <Checkbox
                    name="notifications"
                    label="Send me email notifications"
                    checked={formData.notifications}
                    onChange={handleInputChange}
                  />
                  <Checkbox
                    name="terms"
                    label="I agree to the terms and conditions *"
                    checked={formData.terms}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </Button>
                  <Button type="button" variant="outline" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Sample Table - Using Reusable DataTable Component */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Data Table</CardTitle>
              <CardDescription>
                Using reusable DataTable component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={sampleUsers}
                columns={userColumns}
                caption="List of registered users"
                onRowClick={(user) => toast.info(`Clicked: ${user.name}`)}
              />
            </CardContent>
          </Card>
        </div>

        {/* Theme Info Card */}
        <Card className="mt-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Theme Switching</CardTitle>
            <CardDescription>
              Dark and Light mode support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Click the <strong>sun/moon icon</strong> in the header to switch between Light, Dark, and System theme modes. 
              The theme preference is saved in your browser and persists across sessions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

