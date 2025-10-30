"use client";

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
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
              <TextField.Root
                {...field}
                name="email"
                placeholder="Email"
                className="mt-1 w-full"
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
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
              <TextField.Root
                {...field}
                type="password"
                name="password"
                placeholder="*****"
                className="mt-1 w-full"
              >
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            )}
          />
          {errors.password && (
            <Text className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </Text>
          )}
        </div>

        <button
        type="submit"
        className="w-full py-3 mt-2 rounded-lg bg-linear-to-r from-pink-500 to-indigo-600 font-semibold text-white hover:from-pink-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
      >
        <Link href="/dashboard" >Iniciar session</Link>
        
      </button>
      </Flex>
    </form>
  );
}
