import React from "react";
import Note from "./Note.js";

function notesList({ notes, deleteNote, editNote }) {
  console.log(notes);
  return (
    <div className="noteList">
      {notes.map((note) => {
        return (
          <div>
            <Note
              note={note}
              key={note.id}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          </div>
        );
      })}
    </div>
  );
}
export default notesList;
