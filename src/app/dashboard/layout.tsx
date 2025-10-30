"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="flex flex-col transition-all duration-300 bg-linear-to-b from-indigo-800 via-purple-900 to-indigo-950 shadow-lg w-64 min-h-full overflow-hidden hover:w-64">
        <div className="flex items-center justify-center h-20 border-b border-white/10 text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </div>

        <ul className="flex-1 p-4 space-y-2">
          {/* Home */}
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-4 px-3 py-2 rounded-lg transition-colors duration-200 
                ${
                  pathname === "/dashboard"
                    ? "bg-pink-500/40 border border-white/20"
                    : "hover:bg-indigo-700/30"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                className="w-6 h-6"
              >
                <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
                <path d="M9 21V12h6v9" />
              </svg>
              <span>Home</span>
            </Link>
          </li>

          {/* Profile */}
          <li>
            <Link
              href="/dashboard/profile"
              
              className={`flex items-center gap-4 px-3 py-2 rounded-lg transition-colors duration-200 
                ${
                  pathname === "/dashboard/profile"
                    ? "bg-pink-500/40 border border-white/20"
                    : "hover:bg-indigo-700/30"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                className="w-6 h-6"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
              </svg>
              <span>Profile</span>
            </Link>
          </li>

          {/* Más links si deseas */}
        </ul>

        {/* Toggle Drawer */}
        
      </div>

      {/* Contenido */}
      <main className="flex-1 p-0  overflow-auto">{children}</main>
    </div>
  );
}
