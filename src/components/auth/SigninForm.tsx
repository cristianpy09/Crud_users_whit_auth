"use client";

import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Flex direction="column" gap="4" className="items-center">
        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: { message: "Campo requerido", value: true } }}
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

          {errors.email && (
            <Text className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </Text>
          )}
        </div>

        {/* Password */}
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: { message: "Campo requerido", value: true },
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
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

          {errors.password && (
            <Text className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </Text>
          )}
        </div>
        <Link href="/dashboard">
        <button
          type="submit"
          className="w-95 py-3 mt-2 rounded-lg bg-linear-to-r from-pink-500 to-indigo-600 font-semibold text-white hover:from-pink-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
        >
          Iniciar session
        </button>
        </Link>
      </Flex>
    </form>
  );
}
