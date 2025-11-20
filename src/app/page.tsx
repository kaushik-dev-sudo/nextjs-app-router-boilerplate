"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { List, ListItem, ListOrdered, ListItemIcon } from "@/components/ui/list";
import { ThemeToggle } from "@/components/theme-toggle";
import { Rocket, Code, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1"></div>
          <ThemeToggle />
        </div>

        {/* Header */}
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
        </div>

        {/* Example Form */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Example Form</CardTitle>
            <CardDescription>
              This is a sample form using shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="input-default"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input-default"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

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

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>Ready to build something amazing? Start editing <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">src/app/page.tsx</code></p>
        </div>
      </div>
    </div>
  );
}

