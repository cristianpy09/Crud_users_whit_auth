import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 🧩 Definición de tipo para los usuarios
interface User {
  id: number;
  name: string;
  email?: string;
}

// 🗂️ Ruta al archivo JSON
const filePath = path.join(process.cwd(), "data", "users.json");

// 📖 Leer el archivo JSON
function readData(): User[] {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// ✍️ Escribir en el archivo JSON
function writeData(data: User[]) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// 🔍 GET: Obtener un usuario por id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const users = readData();

  // Convertimos ambos a string para asegurar coincidencia
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

// ✏️ PUT: Actualizar un usuario por id
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await request.json();
  const users = readData();

  const index = users.findIndex((u) => String(u.id) === String(id));

  if (index === -1) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  users[index] = { ...users[index], ...body };
  writeData(users);

  return NextResponse.json(users[index]);
}

// 🗑️ DELETE: Eliminar un usuario por id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const users = readData();

  const filtered = users.filter((u) => String(u.id) !== String(id));

  // Si no se eliminó nada, el usuario no existía
  if (filtered.length === users.length) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  writeData(filtered);

  return NextResponse.json({
    message: `✅ Usuario con id ${id} eliminado correctamente`,
  });
}
