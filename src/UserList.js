import React from 'react';

const UserList = ({ users, onEditClick }) => {
  return (
    <div className="container my-5 ">
      <h1 className="text-center mb-4 ">User List</h1>
      <div className="row gx-5">
        {users.map((user) => (
          <div key={user.id} className="card border col-md-6 col-lg-4 col-sm-12 p-3 mb-4 shadow-sm">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button
              onClick={() => onEditClick(user)}
              className="rounded-3 border-1 px-2 py-1 position-absolute bottom-0 end-0 m-2"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
