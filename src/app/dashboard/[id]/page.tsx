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
  const idURL = Number(id);
  const users = readData();

  // Buscar el usuario por ID
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-3xl font-semibold mb-4">Usuario no encontrado</h1>
        <p className="text-gray-500">
          El usuario con el ID {id} no existe en el sistema.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Detalles del Usuario
        </h1>
        <p className="text-gray-500 text-base">
          Visualiza la información completa del usuario seleccionado.
        </p>
      </header>

      <section className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <Cards
          idUrl={idURL}
          name={user.name}
          email={user.email}
          id={user.id}
          w="w-full"
        />
      </section>

      <footer className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} Panel de Administración —{" "}
        <span className="font-medium text-gray-500">Cristian Celis</span>
      </footer>
    </main>
  );
}
