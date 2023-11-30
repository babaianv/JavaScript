import React from 'react';

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDataProps {
  user: User | null;
}

const UserData: React.FC<UserDataProps> = ({ user }) => {
  return (
    <div id="userData">
      <h2>Информация:</h2>
      {user ? (
        <>
          <p>Имя: {user.name}</p>
          <p>Имя пользователя: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Телефон: {user.phone}</p>
          <p>Веб-сайт: {user.website}</p>
        </>
      ) : (
        <div className="info">Пользователь не выбран</div>
      )}
    </div>
  );
};

export default UserData;
