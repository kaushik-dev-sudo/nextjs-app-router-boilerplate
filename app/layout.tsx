import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "@/components/providers/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App Router Boilerplate",
  description: "A clean Next.js App Router boilerplate with TypeScript, Tailwind CSS, and shadcn/ui",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <main>{children}</main>
            <ToastContainer position="top-right" autoClose={2000} />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;

