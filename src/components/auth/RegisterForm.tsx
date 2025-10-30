"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  number: string;
  password: string;
};

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-5">
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-300">
          Nombre
        </label>
        <div className="relative mt-2">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <input
                {...field}
                id="name"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            )}
          />
          <PersonIcon className="absolute right-3 top-3.5 text-gray-400" />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="relative mt-2">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <input
                {...field}
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            )}
          />
          <EnvelopeClosedIcon className="absolute right-3 top-3.5 text-gray-400" />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Número */}
      <div>
        <label htmlFor="number" className="text-sm font-medium text-gray-300">
          Número de teléfono
        </label>
        <div className="relative mt-2">
          <Controller
            name="number"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <input
                {...field}
                id="number"
                type="tel"
                placeholder="+34 600 123 456"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            )}
          />
          <MobileIcon className="absolute right-3 top-3.5 text-gray-400" />
        </div>
        {errors.number && (
          <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
        )}
      </div>

      {/* Contraseña */}
      <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-300">
          Contraseña
        </label>
        <div className="relative mt-2">
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Este campo es requerido",
              minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                placeholder="••••••"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            )}
          />
          <LockClosedIcon className="absolute right-3 top-3.5 text-gray-400" />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full py-3 mt-2 rounded-lg bg-linear-to-r from-pink-500 to-indigo-600 font-semibold text-white hover:from-pink-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
      >
        Crear cuenta
      </button>
    </form>
  );
}
