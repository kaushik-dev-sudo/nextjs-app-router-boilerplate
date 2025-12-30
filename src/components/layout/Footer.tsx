"use client";

import { useSession } from "next-auth/react";
import { Heart } from "lucide-react";

export function Footer() {
  const { status } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NextApp. All rights reserved.
          </p>

          {/* Center - Made with love */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            Made with using Next.js
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-4 text-sm">
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

