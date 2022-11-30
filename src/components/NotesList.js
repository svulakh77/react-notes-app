import React from "react";
import Note from "./Note.js";

function notesList({ notes, addNote, deleteNote }) {
  console.log(notes);
  return (
    <div className="noteList">
      {notes.map((note) => {
        return (
          <div>
            
            <Note
              note={note}
              key={note.id}
              addNote={addNote}
              deleteNote={deleteNote}
            />
          </div>
        );
      })}
    </div>
  );
}
export default notesList;
