"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center items-center p-8">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
          Crear Cuenta
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Únete a nuestro panel de administración
        </p>
      </header>

      {/* Card con efecto de cristal */}
      <section className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg w-full max-w-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]">
        <RegisterForm />

        {/* Efecto de luz */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-transparent via-transparent to-white/10"></div>

        {/* Link al login */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-400 hover:text-indigo-500 font-medium transition-colors"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Panel — Desarrollado con{" "}
        <span className="text-pink-400 font-semibold">
          Next.js + TailwindCSS
        </span>
      </footer>
    </main>
  );
}
