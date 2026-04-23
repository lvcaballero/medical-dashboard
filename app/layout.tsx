import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Required for clickable navigation

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedDash | Medical Management System",
  description: "Professional medical test and clinical data dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="bg-blue-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              
              {/* Logo - Clickable to return home */}
              <div className="flex-shrink-0 flex items-center">
                <Link 
                  href="/" 
                  className="text-2xl font-black tracking-tighter hover:text-blue-300 transition-all cursor-pointer"
                >
                  Med<span className="text-blue-400">Dash</span>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link 
                    href="/medicaltests" 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    Medical Tests
                  </Link>
                  <Link 
                    href="/categories" 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    Categories
                  </Link>
                  <Link 
                    href="/units" 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    Units
                  </Link>
                </div>
              </div>

              {/* Mobile Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-950 rounded-full border border-blue-800 text-xs text-blue-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Live
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MedDash Clinical Systems. All rights reserved.
        </footer>
      </body>
    </html>
  );
}