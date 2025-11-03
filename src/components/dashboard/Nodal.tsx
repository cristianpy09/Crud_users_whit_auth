"use client";

import AddForm from "./AddForm";

type Props = {
  idUrl?: string | number;
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
      {/* Botón para abrir modal */}
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-sm"
        >
          {idUrl ? "Actualizar" : "Agregar Usuario"}
        </button>
      </div>

      {/* Modal */}
      <dialog
        id="my_modal_1"
        className="modal flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      >
        <div className="modal-box bg-white border border-gray-200 rounded-xl shadow-lg max-w-md w-full p-6 relative text-gray-800">
          <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
            {idUrl ? "Actualizar Usuario" : "Crear Usuario Nuevo"}
          </h2>

          {/* Formulario */}
          <AddForm close={closeModal} />

          {/* Botón cerrar */}
          <div className="modal-action mt-8 flex justify-center">
            <form method="dialog">
              <button
                onClick={closeModal}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
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
