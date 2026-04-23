import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medical Test Management System",
  description: "Database & Next.js Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="bg-blue-900 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <span className="text-xl font-bold tracking-tight text-blue-200">
                  MedDash
                </span>
                <div className="flex space-x-4">
                  <a 
                    href="/medicaltests" 
                    className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Medical Tests
                  </a>
                  <a 
                    href="/categories" 
                    className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Categories
                  </a>
                  <a 
                    href="/units" 
                    className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Units
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}