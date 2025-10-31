'use client';

import AddForm from "./AddForm";

type Props = {
  idUrl?: string | number; // puede venir como string o número
};

export default function Nodal({ idUrl }: Props) {
  const openModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.close();
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {idUrl ? "Actualizar" : "Agregar Usuario"}
        </button>
      </div>

      <dialog
        id="my_modal_1"
        className="modal flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      >
        <div className="modal-box bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-white animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            {idUrl ? "Actualizar Usuario" : "Crear Usuario Nuevo"}
          </h2>

          <AddForm close={closeModal} />

          <div className="modal-action mt-8 flex justify-center">
            <form method="dialog">
              <button
                className="px-5 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
