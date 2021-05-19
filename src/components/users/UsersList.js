import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

import UserRow from './UserRow';

const UsersList = () => {
  const [users, setUsers] = useState([]);

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

  return(
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
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
    </React.Fragment>
  )
}

export default UsersList;
