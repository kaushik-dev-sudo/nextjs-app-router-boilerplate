# Next.js App Router Boilerplate

A clean, production-ready Next.js boilerplate with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Features

- **Next.js 15** - Latest Next.js with App Router
- **React 19** - Latest React version
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Modern utility-first CSS
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Unstyled, accessible component primitives
- **Dark Mode** - Full dark mode support with theme toggle
- **React Hook Form** - Form validation with react-hook-form and Zod
- **NextAuth.js** - Complete authentication solution
- **List Components** - Ready-to-use list components
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turbopack** - Fast bundler for development

## 📦 Dependencies

All dependencies are pre-configured and match the Cardinal project:

- `@radix-ui/*` - UI primitives
- `@tanstack/react-table` - Table component
- `axios` - HTTP client
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class name utilities
- `framer-motion` - Animations
- `lucide-react` - Icons
- `react-toastify` - Toast notifications
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation
- `next-auth` - Authentication library
- And more...

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

Generate a secret with:
```bash
openssl rand -base64 32
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nextjs-app-router-boilerplate/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── auth/          # NextAuth API routes
│   │   ├── auth/              # Authentication pages
│   │   │   └── signin/        # Sign in page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── not-found.tsx
│   ├── components/            # React components
│   │   ├── auth/              # Auth components
│   │   ├── forms/             # Form components
│   │   ├── providers/         # Context providers
│   │   └── ui/                # shadcn/ui components
│   ├── lib/                   # Utility functions
│   ├── types/                 # TypeScript type definitions
│   ├── styles/                # Global styles
│   ├── auth.ts                # NextAuth configuration
│   └── middleware.ts          # Next.js middleware
├── public/                    # Static assets
├── components.json            # shadcn/ui config
├── next.config.ts             # Next.js config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## 🧩 Available UI Components

The following components are already set up:

- `Button` - Button component with variants
- `Card` - Card container component
- `Input` - Input field component
- `Label` - Label component
- `List` - List components (List, ListItem, ListOrdered, ListItemIcon)
- `DropdownMenu` - Dropdown menu component
- `ThemeToggle` - Dark mode toggle component

## 🌙 Dark Mode

Dark mode is fully implemented and ready to use:

- **Theme Provider**: `src/components/theme-provider.tsx`
- **Theme Toggle**: `src/components/theme-toggle.tsx`
- **Three modes**: Light, Dark, and System (follows OS preference)
- **Persistent**: Theme preference is saved in localStorage
- **Automatic**: All components support dark mode via Tailwind CSS

### Using Dark Mode

The theme toggle is already included in the home page. To use it in your components:

```tsx
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

// In your component
const { theme, setTheme } = useTheme();
```

## 📝 React Hook Form

Form validation is set up with react-hook-form and Zod:

- **Example Form**: `src/components/forms/ExampleForm.tsx`
- **Validation**: Zod schema validation
- **Type Safety**: Full TypeScript support

### Using React Hook Form

Example usage:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🔐 NextAuth.js

Authentication is configured with NextAuth.js:

- **Configuration**: `src/auth.ts`
- **API Route**: `src/app/api/auth/[...nextauth]/route.ts`
- **Sign In Page**: `src/app/auth/signin/page.tsx`
- **Middleware**: `src/middleware.ts`

### Demo Credentials

For testing purposes, use:
- **Email**: `demo@example.com`
- **Password**: `demo123`

### Using NextAuth

In your components:

```tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

function MyComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <button onClick={() => signIn()}>Sign In</button>;

  return (
    <div>
      <p>Signed in as {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
```

### Server Components

In server components:

```tsx
import { auth } from "@/auth";

export default async function ServerComponent() {
  const session = await auth();

  if (!session) {
    return <p>Not authenticated</p>;
  }

  return <p>Hello, {session.user.email}!</p>;
}
```

## 📝 Customization

### Styling

- Global styles: `src/styles/globals.css`
- Tailwind config: Uses Tailwind CSS v4 with CSS variables
- Custom input classes: `.input-default` and `.input-password`
- Dark mode: All components automatically support dark mode

### TypeScript

- Path aliases: `@/*` maps to `./src/*`
- Strict mode: Enabled for better type safety

## 🚢 Building for Production

```bash
npm run build
npm start
```

## 📄 License

This is a boilerplate project. Feel free to use it for your projects.

## 🤝 Contributing

This is a boilerplate template. Feel free to fork and customize for your needs.

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui

