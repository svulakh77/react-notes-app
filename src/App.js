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
  const editNote = (noteId, newNoteTitle, newNoteText) => {
    const editedNote = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, title: newNoteTitle, text: newNoteText, date:date};
      }
    });
    console.log(editedNote)
    setNotes(editedNote);
  };

  return (
    <div className="noteContainer">
      <Form addNote={addNote} editNote={editNote}/>
      <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
