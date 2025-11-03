"use client";

import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  id: string;
};

type AddFormProps = {
  close: () => void;
  field?: InputEvent;
};

async function Update(id: number, user: FormValues) {
  await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      id: user.id,
    }),
  });
}

async function Post(user: FormValues) {
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      id: user.id,
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
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "" },
  });

  const params = useParams();
  const idURL = params.id;

  const onSubmit = handleSubmit(async (data) => {
    if (idURL) {
      await Update(Number(idURL), data);
      alert("Usuario actualizado correctamente");
    } else {
      await Post(data);
      alert("Usuario agregado correctamente");
    }
    close();
    reset();
    window.location.reload();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md max-w-md w-full"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <Controller
          name="name"
          control={control}
          rules={{ required: { value: true, message: "Campo requerido" } }}
          render={({ field }) => (
            <div className="relative mt-2">
              <PersonIcon className="absolute left-3 top-3 text-gray-400" />
              <input
                {...field}
                placeholder="Ej: Juan Pérez"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
          )}
        />
        {errors.name && (
          <Text className="text-sm text-red-500 mt-1">
            {errors.name.message}
          </Text>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <Controller
          name="email"
          control={control}
          rules={{ required: { value: true, message: "Campo requerido" } }}
          render={({ field }) => (
            <div className="relative mt-2">
              <EnvelopeClosedIcon className="absolute left-3 top-3 text-gray-400" />
              <input
                {...field}
                placeholder="ejemplo@email.com"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
          )}
        />
        {errors.email && (
          <Text className="text-sm text-red-500 mt-1">
            {errors.email.message}
          </Text>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-sm cursor-pointer"
        >
          {idURL ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}




