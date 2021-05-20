import React, { useState, useEffect, useCallback } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import ContainerLayout from '../UI/ContainerLayout';

const UserDetail = (props) => {
  const userId = props.match.params.id;

  const [user, setUser] = useState({})

  const [isOpen, setIsOpen] = useState(false)

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getUser = useCallback(() => {
    axios.get(`http://localhost:3001/api/v1/users/${userId}`)
    .then(response => {
      setUser(response.data);
      console.log(response.data);
    })
    .catch(error => console.log(error))
  },[]);

  const componentDidMount = useCallback(() => {
    getUser();
  },[])

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  return(
    <ContainerLayout>
      <div className="col-lg-9 mx-lg-auto">
        <div className="card shadow mt-5">
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={`${user.image_url}`} className="img-fluid"/>
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h1>{user.name}</h1>
                <p className="lead font-weight-400">Email: <span className="email-text text-primary">{user.email}</span></p>
                <p className="lead font-weight-400">Contact: <span className="text-primary">{user.contact}</span></p>
                <p className="lead font-weight-400">Account Created On: <span className="text-primary">{user.account_created_at}</span></p>
                <Link to="/users" className="btn btn-primary">Back to Users</Link>
                <button className="btn btn-success ms-3" type="button" onClick={showModal}>Edit User</button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={isOpen} onHide={hideModal}>
          <form>
            <Modal.Header>
              <Modal.Title>Editing User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control form-control-lg" defaultValue={`${user.name}`} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control form-control-lg" defaultValue={`${user.email}`} />
              </div>
              <div className="form-group">
                <label className="form-label">Contact No:</label>
                <input type="text" className="form-control form-control-lg" defaultValue={`${user.contact}`} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal} className="btn btn-outline-danger">Cancel</button>
              <button className="btn btn-success">Save</button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </ContainerLayout>
  )
};

export default UserDetail;
