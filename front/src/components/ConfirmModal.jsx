const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  // Si isOpen es falso, no dibujamos nada en pantalla
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-base-300 border border-base-100">
        <h3 className="font-bold text-lg text-accent">{title}</h3>
        <p className="py-4 text-amber-50">{message}</p>
        <div className="modal-action">
          <button onClick={onCancel} className="btn btn-ghost">
            Cancelar
          </button>
          <button onClick={onConfirm} className="btn btn-error text-white">
            Sí, eliminar
          </button>
        </div>
      </div>
      {/* Fondo oscuro que cierra el modal al hacer clic afuera */}
      <div className="modal-backdrop bg-black/60" onClick={onCancel}></div>
    </dialog>
  );
};

export default ConfirmModal;