import React, { useState, useEffect } from 'react';
import './App.css';
import UserDetails from './UserDetails';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
//fetching
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <p className='bg-warning'>Userdetails Component will display in bottom after clicking on Edit button</p>
      <UserList users={users} onEditClick={handleEditClick} />
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}

export default App;
