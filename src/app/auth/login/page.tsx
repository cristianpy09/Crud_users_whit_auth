"use client";

import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center items-center p-8">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-indigo-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Iniciar Sesión
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Bienvenido de nuevo al panel de administración
        </p>
      </header>

      {/* Card del formulario */}
      <section className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg w-full max-w-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]">
        <SigninForm />

        {/* Sombra / brillo */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-transparent via-transparent to-white/10"></div>

        {/* Link a registro */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/register"
            className="text-pink-400 hover:text-pink-500 font-medium transition-colors"
          >
            Regístrate aquí
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Panel — Desarrollado con{" "}
        <span className="text-pink-400 font-semibold">Next.js + TailwindCSS</span>
      </footer>
    </main>
  );
}
