import React from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import "../assets/css/card.css";

function NotesCard({
  notes,
  setEditNote,
  handleDeleteClick,
  isDeleteModalOpen,
  handleDeleteCancel,
  handleDeleteConfirmation,
  noteToDelete,
}) {
  return (
    <div className="notes-card">
      {notes.map((note) => (
        <div className="notes-card-wrapper" key={note.id}>
          <h2 className="card-title">{note.title}</h2>
          <div className="card-content">
            <p>{note.description}</p>
          </div>
          <div className="card-footer">
            <div className="card-options">
              <div
                className="action-item edit"
                onClick={() => setEditNote(note)}
              >
                Edit 📝
              </div>
              <div
                className="action-item delete"
                onClick={() => handleDeleteClick(note)}
              >
                Delete 🗑️
              </div>
            </div>
          </div>
        </div>
      ))}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirmation}
        noteTitle={noteToDelete ? noteToDelete.title : ""}
      />
    </div>
  );
}

export default NotesCard;
