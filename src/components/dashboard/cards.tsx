"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Nodal from "./Nodal";

type Prop = {
  name: string;
  email?: string;
  id?: number;
  idUrl?: number;
  img?: string;
  w?:string
};

async function DeleteUser(id: number) {
  if (!id) return console.error("ID inválido");

  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    alert("Usuario eliminado correctamente");
    window.location.reload();
  } else {
    console.error("Error al eliminar usuario:", await res.text());
  }
}

export default function Cards({ name, email, id, idUrl }: Prop) {
  const params = useParams();
  const idURL = params.id;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>

      <div className="border-t border-gray-200 my-2"></div>

      <div className="flex justify-between items-center">
        <Link
          href={`/dashboard/${id}`}
          className="px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
        >
          Ver detalles
        </Link>

        {idURL ? (
          <Nodal idUrl={idUrl} />
        ) : (
          <button
            onClick={() => DeleteUser(id!)}
            className="px-3 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}
