"use client";

import {
  EnvelopeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  birthdate: string;
};

type AddFormProps = {
  close: () => void; 
};

async function Post(user: FormValues) {
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
 body: JSON.stringify({
  name: user.name,
  birthdate: user.birthdate,
}),


  });

  if (!res.ok) throw new Error("Error al crear el usuario");
  return await res.json();
}

export default function AddForm({ close }: AddFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      birthdate: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("📤 Enviando datos:", data);
    await Post(data);
    close(); // 👈 cierra el modal al terminar
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="5">
        <label htmlFor="name">Full Name:</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: { value: true, message: "Este campo es requerido" },
          }}
          render={({ field }) => (
            <TextField.Root {...field} placeholder="Name" name="name">
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.name && <Text className="text-red-500">{errors.name.message}</Text>}

        <label htmlFor="birthdate">Birthdate:</label>
        <Controller
          name="birthdate"
          control={control}
          rules={{
            required: { value: true, message: "Este campo es requerido" },
          }}
          render={({ field }) => (
            <TextField.Root {...field} placeholder="YYYY-MM-DD" name="birthdate">
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.birthdate && (
          <Text className="text-red-500">{errors.birthdate.message}</Text>
        )}

        <Button type="submit" className="cursor-pointer">
          Add user
        </Button>
      </Flex>
    </form>
  );
}
