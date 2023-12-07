import "../assets/css/delete.css";
import Button from "./Button";

function DeleteConfirmationModal({ isOpen, onClose, onDelete, noteTitle }) {
  return (
    <div className={`delete-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p className="modal-title">{`Are you sure you want to delete your note "${noteTitle}"?`}</p>
        <Button modalButton onClick={onDelete} className="button-yes">
          Yes
        </Button>
        <Button modalButton onClick={onClose} className="button-no">
          No
        </Button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
