import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import axios from "axios";

const EditUser = (props) => {

  useEffect(() => {
    setUser(props.user)
  }, [props])
  
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUserName(props.user.name);
    setUserEmail(props.user.email);
    setUserContact(props.user.contact);
    setUserId(props.user.id);
  }, [props])

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userContact, setUserContact] = useState('')
  const [userId, setUserId] = useState('')

  const hideModal = () => {
    props.onHideModal(false);
  };

  const updateUserData = (event) => {
    event.preventDefault();
    const userData = {
      name: userName,
      email: userEmail,
      contact: userContact
    }
    updateUser(userId, userData);
  }

  const updateUser = (userId, userData) => {
    axios.put(`http://localhost:3001/api/v1/users/${userId}`, {user: userData})
    .then(response => {
      window.location.reload();
    })
    .catch(error => console.log(error))
  }

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  }

  const contactChangeHandler = (event) => {
    setUserContact(event.target.value);
  }

  return(
    <Modal show={props.isEditable} onHide={hideModal}>
      <form onSubmit={updateUserData}>
        <ModalHeader>
          <ModalTitle>Editing User</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-control form-control-lg" value={userName} onChange={nameChangeHandler} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-lg" value={userEmail} onChange={emailChangeHandler} />
          </div>
          <div className="form-group">
            <label className="form-label">Contact No:</label>
            <input type="text" className="form-control form-control-lg" value={userContact} onChange={contactChangeHandler} />
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

export default EditUser;
