import React, { useState } from "react";
import UserDetail from './UserDetail';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Ravi Singh',
    email: 'ravi@gmail.com',
    contact: '+91 344-543-3454'
  },
  {
    id: 'u2',
    name: 'Shifali Singh',
    email: 'shafali@gmail.com',
    contact: '+91 344-543-3454'
  },
  {
    id: 'u3',
    name: 'Shifali Singh',
    email: 'shafali@gmail.com',
    contact: '+91 344-543-3454'
  },
  {
    id: 'u4',
    name: 'Shifali Singh',
    email: 'shafali@gmail.com',
    contact: '+91 344-543-3454'
  }
]

const UsersList = () => {
  const [users, setUsers] = useState(DUMMY_USERS);

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
