"use client";
import AddForm from "./AddForm";

export default function Nodal() {
  // abrimos y cerramos usando el <dialog>
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
      <button className="btn" onClick={openModal}>
        open modal
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* 👇 Pasamos la función close al formulario */}
          <AddForm close={closeModal} />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
