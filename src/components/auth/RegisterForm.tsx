"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";

import React from "react";
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

  const onsubmit =handleSubmit(data=>{
    console.log(data);
    
  })

  return (
    <form  onSubmit={onsubmit}>
      <Flex direction="column" gap="5">
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          rules={
            { required:{ 
              message:"este campo es requerido",
              value:true}

            }
          }
          render={({ field }) => {
            return (
              <TextField.Root {...field} placeholder="Name" name="name">
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.name && <Text className="text-red-500" >{errors.name.message}</Text>}
        <label htmlFor="name">Email:</label>

        <Controller
          name="email"
          control={control}
          rules={
            { required:{ 
              message:"este campo es requerido",
              value:true}

            }
          }
          
          render={({ field }) => {
            return (
              <TextField.Root {...field} placeholder="Email" name="email">
                <TextField.Slot>
                  <EnvelopeClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.email && <Text className="text-red-500" >{errors.email.message}</Text>}
        <label htmlFor="name">Number:</label>
        <Controller
          name="number"
          control={control}
          rules={
            { required:{ 
              message:"este campo es requerido",
              value:true}

            }
          }
          render={({ field }) => {
            return (
              <TextField.Root {...field} name="number" placeholder="Number">
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.number && <Text className="text-red-500" >{errors.number.message}</Text>}
        <label htmlFor="password">Password</label>

        <Controller
          name="password"
          control={control}
          rules={
            { required:{ 
              message:"este campo es requerido",
              value:true},
              minLength:{
                value:6,
                message:"debe tener al menos 6 caracteres"
              }

            }
          }
          render={({ field }) => {
            return (
              <TextField.Root type="password" {...field} name="password" placeholder="*****">
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.password && <Text className="text-red-500" >{errors.password.message}</Text>}
        <Button type="submit" className="cursor-pointer">
          Sign in
        </Button>
      </Flex>
    </form >
  );
}
