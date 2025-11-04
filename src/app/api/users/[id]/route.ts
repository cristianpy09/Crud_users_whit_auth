import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Definición de tipo para los usuarios
interface User {
  id: number;
  name: string;
  email?: string;
}

// Ruta al archivo JSON
const filePath = path.join(process.cwd(), "data", "users.json");

function readData(): User[] {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeData(data: User[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ✅ FIX: usar "context" sin tipar explícitamente
export async function GET(request: NextRequest, context: any) {
  const { id } = context.params;
  const users = readData();

  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, context: any) {
  const { id } = context.params;
  const body = await request.json();
  const users = readData();

  const index = users.findIndex((u) => String(u.id) === String(id));

  if (index === -1) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  users[index] = { ...users[index], ...body };
  writeData(users);

  return NextResponse.json(users[index]);
}

export async function DELETE(request: NextRequest, context: any) {
  const { id } = context.params;
  const users = readData();

  const filtered = users.filter((u) => String(u.id) !== String(id));

  if (filtered.length === users.length) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  writeData(filtered);

  return NextResponse.json({ message: `Usuario con id ${id} eliminado correctamente` });
}
