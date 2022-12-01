
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


const Note = ({ note, deleteNote }) => {
    console.log(note.text);
    function handleDeleteNote(){
        const result = window.confirm("Are you sure you want to delete?")
       if(result){
        deleteNote(note.id)
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="noteArea" onClick={handleShow} >

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal"
      >
    
        <ModalBody>
          <div>{note.title}</div>
          <div>{note.text}</div>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </ModalFooter>
      </Modal>

    
        
        <div className="noteInfo">
            <div className="noteData">{note.title}</div>
            <div className="noteData req" >{note.text}</div>
            <h3 className="noteData">{note.date.toString()}</h3>
            <button className="deleteButton" onClick = {handleDeleteNote}>Delete Note</button>
        </div>
        </div>
        
    )
    }
   
export default Note;