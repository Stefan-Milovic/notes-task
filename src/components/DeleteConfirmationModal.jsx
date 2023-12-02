import "../assets/css/delete.css";

function DeleteConfirmationModal({ isOpen, onClose, onDelete, noteTitle }) {
  return (
    <div className={`delete-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p className="modal-title">{`Are you sure you want to delete your note "${noteTitle}"?`}</p>
        <button onClick={onDelete} className="modal-btn yes">
          Yes
        </button>
        <button onClick={onClose} className="modal-btn no">
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
