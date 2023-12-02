import React, { useState, useEffect } from "react";
import "./assets/css/app.css";
import Navigation from "./components/Navigation";
import NotesCard from "./components/NotesCard";
import AddNote from "./components/AddNote";

function App() {
  const [onCreateNote, setOnCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const createNotes = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
    setOnCreateNote(false);
    setCurrentNote(null);
    setIsEditing(false);
  };

  const updateNotes = (updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
      saveNotesToLocalStorage(updatedNotes);
      return updatedNotes;
    });
    setOnCreateNote(false);
    setCurrentNote(null);
    setIsEditing(false);
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== noteId);
      saveNotesToLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const handleDeleteClick = (note) => {
    setNoteToDelete(note);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    deleteNote(noteToDelete.id);
    setDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  return (
    <div className="app">
      <Navigation
        onAddNoteClick={() => {
          setOnCreateNote(true);
          setCurrentNote(null);
          setIsEditing(false);
        }}
      />
      <div className="container wrapper">
        <div className="notes-wrapper">
          <NotesCard
            setEditNote={(note) => {
              setOnCreateNote(true);
              setCurrentNote(note);
              setIsEditing(true);
            }}
            handleDeleteClick={handleDeleteClick}
            notes={notes}
            isDeleteModalOpen={isDeleteModalOpen}
            handleDeleteCancel={handleDeleteCancel}
            handleDeleteConfirmation={handleDeleteConfirmation}
            noteToDelete={noteToDelete}
          />
        </div>
        {onCreateNote && (
          <AddNote
            note={currentNote}
            createNotes={createNotes}
            updateNotes={updateNotes}
            setOpen={setOnCreateNote}
            isEditing={isEditing}
          />
        )}
      </div>
    </div>
  );
}

export default App;
