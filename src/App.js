import { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import NotesList from "./components/NotesList.js";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    const newArray = [...notes, newNote];
    setNotes(newArray);
  };

  const deleteNote = (noteId) => {
    const deletedNote = notes.filter((note) => note.id !== noteId);
    setNotes(deletedNote);
  };
  const editNote = (noteId, newNoteTitle, newNoteText, date, newDate) => {
    const editedNote = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          title: newNoteTitle,
          text: newNoteText,
          date: date,
          updatedDate: newDate,
        };
      }
      return note;
    });
    setNotes(editedNote);
  };

  return (
    <div className="noteContainer">
      <Form addNote={addNote} editNote={editNote} />
      <NotesList
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        key={notes.id}
      />
    </div>
  );
}

export default App;
