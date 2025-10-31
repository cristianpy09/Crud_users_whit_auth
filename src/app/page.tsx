

import React from "react";

import { KeyboardIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// Puedes cambiar por tus íconos

export default function HomePage() {


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-10">Bienvenido a tu Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card Login */}
        <Link href="/auth/login"> 
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer"
         
        >
          <KeyboardIcon className="w-16 h-16 text-indigo-500 mb-4"/>
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <p className="text-gray-400 text-center">Accede a tu cuenta existente para gestionar tus datos.</p>
        </div>
        </Link>

        {/* Card Register */}
        <Link href="/auth/register"> 
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer"
          
        >
          
          <PersonIcon className="w-16 h-16 text-purple-500 mb-4"/>
          <h2 className="text-2xl font-semibold mb-2">Register </h2>
          <p className="text-gray-400 text-center">Crea una cuenta nueva para empezar a usar el dashboard.</p>
        </div>
        </Link>
      </div>
    </div>
  );
}
