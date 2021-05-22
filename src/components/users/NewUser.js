import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import axios from "axios";

const NewUser = (props) => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userContact, setUserContact] = useState('')

  const hideModal = () => {
    props.onHideModal(false);
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }

  const contactChangeHandler = (event) => {
    setUserContact(event.target.value);
  }

  const createUserData = (event) => {
    event.preventDefault();
    const userData = {
      name: userName,
      email: userEmail,
      contact: userContact
    }
    createUser(userData)
  }

  const createUser = (userData) => {
    axios.post(`http://localhost:3001/api/v1/users`, {user: userData})
    .then(response => {
      window.location.reload();
      console.log(response.data);
    })
    .catch(error => console.log(error.message))
  }

  return(
    <Modal show={props.isEditable} onHide={hideModal}>
      <form onSubmit={createUserData}>
        <ModalHeader>
          <ModalTitle>Create New User</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-control form-control-lg" value={userName} onChange={nameChangeHandler} required="true" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-lg" value={userEmail} onChange={emailChangeHandler} required="true" />
          </div>
          <div className="form-group">
            <label className="form-label">Contact No:</label>
            <input type="text" className="form-control form-control-lg" value={userContact} onChange={contactChangeHandler} required="true" />
          </div>
        </ModalBody> 
        <ModalFooter>
          <button onClick={hideModal} className="btn btn-outline-danger" type="button">Cancel</button>
          <button className="btn btn-success" type="submit">Save</button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default NewUser;
