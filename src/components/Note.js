import React from "react";

const Note = ({ note, deleteNote }) => {
    console.log(note.text);
    const handleDeleteNote = () =>{
        deleteNote(note.id)

    }
    return(
        <div className="noteArea">
        <div className="noteInfo">
            <div className="noteData">{note.text}</div>
            <h3 className="noteData">{note.date.toString()}</h3>
            <button onClick = {handleDeleteNote}>Delete Note</button>
        </div>
        </div>
    )
    }
export default Note;