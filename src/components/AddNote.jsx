import { useState } from "react";
import "../assets/css/add-note.css";
import Button from "./Button";

function AddNote({ setOpen, note, createNotes, updateNotes, isEditing }) {
  const [title, setTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEditing) {
      const updatedNote = {
        ...note,
        title,
        description,
      };

      updateNotes(updatedNote);
    } else {
      const newNote = {
        id: new Date().getTime(),
        title,
        description,
      };
      createNotes(newNote);
    }

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-note">
      <div className="note-wrapper">
        <div className="note-header">
          <h2 className="heading">
            {isEditing ? `Edit your note "${note.title}"` : "Add Note"}
          </h2>
        </div>
        <form className="note-form">
          <input
            required
            type="text"
            placeholder="Title"
            className="input"
            value={title}
            onChange={(e) => {
              const inputTitle = e.target.value;
              if (inputTitle.length <= 30) {
                setTitle(inputTitle);
              }
            }}
          ></input>
          <textarea
            required
            placeholder="Add your note"
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="note-actions">
            <Button
              className="cancel-button"
              onClick={handleCancel}
              modalButton
            >
              Cancel
            </Button>
            <Button
              className="create-button"
              onClick={handleSubmit}
              modalButton
            >
              {isEditing ? "Edit" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
