import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

import UserDetail from './UserDetail';

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
        <div className="row">
          {users.map((user) => (
            <UserDetail 
              key={user.id} 
              name={user.name}
              email={user.email}
              contact_no={user.contact}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default UsersList;
