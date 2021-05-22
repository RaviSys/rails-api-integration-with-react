import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

import UserRow from './UserRow';
import NewUser from './NewUser';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUsers = useCallback(() => {
    axios.get('http://localhost:3001/api/v1/users')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => console.log(error))
  },[]);

  const componentDidMount = useCallback(() => {
    getUsers();
  },[])

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const setModalVisibility = (bool) => {
    setIsModalOpen(bool);
  }

  return(
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-12">
            <button className="btn btn-primary btn-lg mb-3" type="button" onClick={showModal}>Add New User</button>
            <NewUser isEditable={isModalOpen} onHideModal={setModalVisibility} />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Us</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserRow 
                    key={user.id} 
                    name={user.name}
                    email={user.email}
                    contact_no={user.contact}
                    id={user.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UsersList;
