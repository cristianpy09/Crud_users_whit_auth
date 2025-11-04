import Cards from "@/components/dashboard/cards";
import Nodal from "@/components/dashboard/Nodal";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function DashboardPage() {
  const res = await fetch("http://localhost:3001/api/users", {
    cache: "no-store",
  });
  const data: User[] = await res.json();

  return (
    <main className="min-h-screen w-full bg-gray-50 text-gray-800 flex flex-col items-center p-10">
      <header className="w-full max-w-5xl mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Panel de Usuarios</h1>
        <p className="text-gray-500 mt-2">
          Gestiona y visualiza todos los usuarios registrados.
        </p>
      </header>

      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((u: User) => (
          <div
            key={u.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
          >
            <Cards name={u.name} email={u.email} id={u.id} />
          </div>
        ))}
      </section>

      <div className="mt-10">
        <Nodal />
      </div>

      <footer className="mt-16 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Panel de Administración — Desarrollado por{" "}
        <span className="font-semibold text-gray-700">Cristian Celis</span> con{" "}
        <span className="text-gray-600 font-medium">Next.js + TailwindCSS</span>
      </footer>
    </main>
  );
}
