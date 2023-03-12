import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../accountcss/deletebutton.css"
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useMsg from "../../hooks/useMsg";

export const DeleteButton = () => {
  const {setMsg} = useMsg();
  const {setlastWindow} = useAuth();
  const [showModal, setShowModal] = useState(false);
  const {auth} = useAuth();
  const {setAuth} = useAuth();

  const handleClose = () => setShowModal(false);
  const handleDelete = () => {
    axios.delete("https://tennis-backend-bnldi3x7oq-uw.a.run.app/api/user?_id="+ String(auth._id))
    .then((response) => {
    setlastWindow("/home")
    setAuth({})
  })  
  .catch(err => {
    console.log(err.message)
    if(!err?.response){
        setMsg("No Server Response")
    }
     else if(err.response.status){
       setMsg("Account Deletion Failed")
     }
   })

    setShowModal(false);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="account-delete-button" style={{ height: 35 }} variant="primary">
        Delete Account
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This action is irreversible and will delete all your data. Are you sure you want to proceed?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
