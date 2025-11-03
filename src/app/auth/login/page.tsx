"use client";

import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col justify-center items-center p-6">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Iniciar Sesión
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Bienvenido de nuevo al panel de administración
        </p>
      </header>

      {/* Card del formulario */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md w-full max-w-md transition-all duration-300 hover:shadow-lg">
        <SigninForm />

        {/* Divider */}
        <div className="mt-6 border-t border-gray-200"></div>

        {/* Link a registro */}
        <p className="text-gray-600 text-center mt-6 text-sm">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/register"
            className="text-gray-800 font-medium hover:underline"
          >
            Regístrate aquí
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Panel — Desarrollado con{" "}
        <span className="text-gray-700 font-semibold">Next.js + TailwindCSS</span>
      </footer>
    </main>
  );
}
