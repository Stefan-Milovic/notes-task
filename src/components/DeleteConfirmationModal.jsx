import Modal from "./Modal";
import "../assets/css/delete.css";
import Button from "./Button";

function DeleteConfirmationModal({ isOpen, onClose, onDelete, noteTitle }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isDeleteModal={true}>
      <p className="delete-title">{`Are you sure you want to delete your note "${noteTitle}"?`}</p>
      <Button modalButton onClick={onDelete} className="button-yes">
        Yes
      </Button>
      <Button modalButton onClick={onClose} className="button-no">
        No
      </Button>
    </Modal>
  );
}

export default DeleteConfirmationModal;
