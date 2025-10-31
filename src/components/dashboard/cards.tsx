"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import Nodal from "./Nodal";


type Prop = {
  name: string;
  img?: string;
  description?: string;
  species?: string;
  age?: string;
  email?: string;
  gender?: string;
  status?: string;
  id?: number;
  w?: string;
  idUrl?:number
};






async function DeleteUser(id: number) {
  if (!id) return console.error("ID inválido");

  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    alert(" Usuario eliminado correctamente");
    window.location.reload(); // Refresca el dashboard
  } else {
    console.error(" Error al eliminar usuario:", await res.text());
  }
}


export default function Cards(props: Prop) {
 
  
  const { name, img, email, id,idUrl } = props;
  const params = useParams();
  const idURL = params.id; 
  return (
    <div
      className={`relative group rounded-2xl p-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]`}
    >
      {/* Imagen superior (si existe) */}
      {img && (
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={img}
            alt={name}
            className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          {name}
        </h2>
        <p className="text-sm text-gray-300">{email}</p>

        {/* Divider */}
        <div className="border-t border-white/10 my-2"></div>

        {/* Acciones */}
        <div className="flex justify-between  mt-5 gap-3">
          
          <Link
            href={`/dashboard/${id}`}
            className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          >
            Ver detalles
            </Link>
            {idURL?   <Nodal idUrl={idUrl}  /> :  <button
          
          onClick={() => DeleteUser(id!)}
          className="px-3 py-1.5 bg-linear-to-r from-red-500 to-red-600 rounded-lg text-sm font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 cursor-pointer"
        >
          Eliminar
          
        </button> }
         
        </div>
      </div>

      {/* Efecto luminoso al pasar el mouse */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
