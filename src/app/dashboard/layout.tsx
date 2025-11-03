"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-20 flex items-center justify-center border-b border-gray-200">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/dashboard"
                ? "bg-gray-200 text-gray-900"
                : "hover:bg-gray-100"
            }`}
          >
            🏠 Inicio
          </Link>

          <Link
            href="/dashboard/profile"
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === "/dashboard/profile"
                ? "bg-gray-200 text-gray-900"
                : "hover:bg-gray-100"
            }`}
          >
            👤 Perfil
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
