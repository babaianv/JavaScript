import React from 'react';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
  onUserClick: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
  return (
    <ul className="list-group list-group-flush" id="list">
      {users.map((user) => (
        <li key={user.id} className="list-group-item" onClick={() => onUserClick(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
