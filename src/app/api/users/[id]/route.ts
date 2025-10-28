import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// PUT → actualizar usuario
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();

  const users = readData();
  const index = users.findIndex((u: any) => u.id == id);

  if (index === -1) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  users[index] = { ...users[index], ...body };
  writeData(users);

  return NextResponse.json(users[index]);
}

// DELETE → eliminar usuario
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const users = readData();
  const filtered = users.filter((u: any) => u.id != id);

  writeData(filtered);

  return NextResponse.json({ message: "Usuario eliminado correctamente" });
}
