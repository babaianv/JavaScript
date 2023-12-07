import React, { useState, useEffect, ChangeEvent } from 'react';
import UserList from './components/UserList';
import UserData from './components/UserData';
import './App.css';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err: any) {
        setError(err.message || 'Data Error');
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value.toLowerCase();
    const filteredList = users.filter((user) => user.name.toLowerCase().includes(val));
    setFilteredUsers(filteredList);
  };

  const handleUserClick = (userId: number) => {
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser || null);
  };

  return (
    <div className="container w-50 pt-5">
      <h1>User List</h1>
    
        <>
          <UserList users={filteredUsers} onUserClick={handleUserClick} />
          <UserData user={selectedUser} />
        </>
      
    </div>
  );
};

export default App;
