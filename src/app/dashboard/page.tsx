import Cards from "@/components/dashboard/cards";
import Nodal from "@/components/dashboard/Nodal";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function DashboardPage() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const data: User[] = await res.json();

  return (
    <main className="min-h-screen w-full bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center p-10">
      <header className="w-full max-w-6xl mb-10">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold bg-linear-to-r from-indigo-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Panel de Usuarios
        </h1>
        <p className="text-center text-gray-400 mt-3 text-lg">
          Gestiona y visualiza todos los usuarios registrados.
        </p>
      </header>

      <section className="w-full max-w-400   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((u: User) => (
          <div
            key={u.id}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <Cards name={u.name} email={u.email} id={u.id} />

            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-transparent via-transparent to-white/10"></div>
          </div>
        ))}
      </section>

      <div className="mt-12">
        <Nodal />
      </div>

      <footer className="mt-80 text-gray-500 text-sm">
        © {new Date().getFullYear()} Panel de Administración — Desarrollado con
        ❤️ por{" Cristian Celis "}
        <span className="text-pink-400 font-semibold">
          Next.js + TailwindCSS
        </span>
      </footer>
    </main>
  );
}
