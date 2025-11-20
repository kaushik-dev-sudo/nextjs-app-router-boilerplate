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

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nextjs-app-router-boilerplate/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── not-found.tsx
│   ├── components/      # React components
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── public/             # Static assets
├── components.json     # shadcn/ui config
├── next.config.ts      # Next.js config
├── tsconfig.json       # TypeScript config
└── package.json        # Dependencies
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

