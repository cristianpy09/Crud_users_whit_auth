import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Ruta absoluta del archivo JSON
const filePath = path.join(process.cwd(), "data", "users.json");

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET → obtener todos los usuarios
export async function GET() {
  const users = readData();
  return NextResponse.json(users);
}

// POST → agregar un usuario nuevo
export async function POST(request: NextRequest) {
  const body = await request.json();
  const users = readData();

  const newUser = {
    id: Date.now(),
    ...body,
  };

  users.push(newUser);
  writeData(users);

  return NextResponse.json(newUser, { status: 201 });
}
