import PropTypes from "prop-types";
import "../assets/css/modal.css";

function Modal({ isOpen, onClose, children, isDeleteModal }) {
  if (!isOpen) {
    return null;
  }

  const modalContentClass = isDeleteModal
    ? "delete-modal-content"
    : "modal-content";

  return (
    <div className="modal" onClick={onClose}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isDeleteModal: PropTypes.bool,
};

export default Modal;
