"use client";

import React from "react";
import { KeyboardIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-6">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Bienvenido a tu Dashboard
      </h1>

      {/* Contenedor de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card Login */}
        <Link href="/auth/login" className="block">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 cursor-pointer">
            <KeyboardIcon className="w-14 h-14 text-gray-700 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Login</h2>
            <p className="text-gray-600 text-center">
              Accede a tu cuenta existente para gestionar tus datos.
            </p>
          </div>
        </Link>

        {/* Card Register */}
        <Link href="/auth/register" className="block">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 cursor-pointer">
            <PersonIcon className="w-14 h-14 text-gray-700 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Register
            </h2>
            <p className="text-gray-600 text-center">
              Crea una cuenta nueva para empezar a usar el dashboard.
            </p>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Panel — Desarrollado con{" "}
        <span className="text-gray-700 font-semibold">
          Next.js + TailwindCSS
        </span>
      </footer>
    </main>
  );
}
