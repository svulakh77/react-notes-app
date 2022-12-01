
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


const Note = ({ note, deleteNote }) => {
    function handleDeleteNote(){
        const result = window.confirm("Are you sure you want to delete?")
        if(result){
            deleteNote(note.id)
        }
    }
    
    const [show, setShow] = useState(false);
    console.log(show);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onModalSubmit = (e) => {
        e.stopPropagation();
        handleClose();
      };

    return(
        <div className="noteArea" onClick={handleShow} >

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="modal"
        onHide={onModalSubmit}
      >
    
        <ModalBody className="modalContent">
          <div>{note.title}</div>
          <div>{note.text}</div>
          <Button variant="secondary" onClick={onModalSubmit} className="close">
            Close
          </Button>
        </ModalBody>
        <ModalFooter>
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