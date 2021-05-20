import React, { useState, useEffect, useCallback } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import ContainerLayout from '../UI/ContainerLayout';
import EditUser from "./EditUser";

const UserDetail = (props) => {
  const userId = props.match.params.id;

  const [user, setUser] = useState({})
  const [editable, setEditable] = useState(false)

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

  
  const showModal = () => {
    setEditable(true);
  }

  const setModalVisibility = (bool) => {
    setEditable(bool);
  }

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
        <EditUser user={user} isEditable={editable} onHideModal={setModalVisibility}/>
      </div>
    </ContainerLayout>
  )
};

export default UserDetail;
