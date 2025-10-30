import fs from "fs";
import path from "path";
import Cards from "../../../components/dashboard/cards";


interface User {
  id: number;
  name: string;
  email: string;
}

// Ruta del archivo JSON
const filePath = path.join(process.cwd(), "data", "users.json");

function readData(): User[] {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const users = readData();

  // Buscar el usuario por ID
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
        <h1 className="text-4xl font-bold mb-4">Usuario no encontrado</h1>
        <p className="text-gray-400">
          El usuario con el ID {id} no existe en el sistema.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-indigo-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-500">
        Detalles del Usuario
      </h1>

      <div className="w-full max-w-md">
        <Cards
          name={user.name}
          house={user.email}
          id={user.id}
          w="w-full"
        />
      </div>
    </div>
  );
}
