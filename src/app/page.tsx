"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ListItem, ListOrdered, ListItemIcon } from "@/components/ui/list";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExampleForm } from "@/components/forms/ExampleForm";
import { Rocket, Code, Zap, CheckCircle2, Shield, FormInput, LogIn } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Show sign in button for unauthenticated users
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to NextApp
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Please sign in to continue
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={() => router.push("/auth/signin")} size="lg">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js App Router Boilerplate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A clean, production-ready boilerplate with TypeScript, Tailwind CSS, and shadcn/ui components
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Next.js 15</CardTitle>
              <CardDescription>
                Built with the latest Next.js App Router and React 19
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Full TypeScript support with strict type checking
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FormInput className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>React Hook Form</CardTitle>
              <CardDescription>
                Form validation with react-hook-form and Zod schema validation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>NextAuth.js</CardTitle>
              <CardDescription>
                Complete authentication solution with session management
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Production Ready</CardTitle>
              <CardDescription>
                Pre-configured with best practices and modern tooling
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* React Hook Form Example */}
        <div className="mb-12">
          <ExampleForm />
        </div>

        {/* NextAuth Session Info */}
        {status === "authenticated" && (
          <Card className="max-w-md mx-auto mb-12">
            <CardHeader>
              <CardTitle>NextAuth Session</CardTitle>
              <CardDescription>
                Your current session information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <strong>Email:</strong> {session?.user?.email}
                </div>
                <div>
                  <strong>Name:</strong> {session?.user?.name || "N/A"}
                </div>
                <div>
                  <strong>User ID:</strong> {session?.user?.id || "N/A"}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* List Examples */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Unordered List</CardTitle>
              <CardDescription>
                Example of an unordered list with icons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>TypeScript support</span>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>Dark mode enabled</span>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>shadcn/ui components</span>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>Tailwind CSS v4</span>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>React Hook Form + Zod</span>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>NextAuth.js Authentication</span>
                  </ListItemIcon>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ordered List</CardTitle>
              <CardDescription>
                Example of an ordered list
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ListOrdered>
                <ListItem>Install dependencies</ListItem>
                <ListItem>Run development server</ListItem>
                <ListItem>Start building your app</ListItem>
                <ListItem>Deploy to production</ListItem>
              </ListOrdered>
            </CardContent>
          </Card>
        </div>

        {/* Simple List Example */}
        <Card className="max-w-md mx-auto mb-12">
          <CardHeader>
            <CardTitle>Simple List</CardTitle>
            <CardDescription>
              A simple list without icons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <List>
              <ListItem>Next.js 15 with App Router</ListItem>
              <ListItem>React 19</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Tailwind CSS v4</ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

