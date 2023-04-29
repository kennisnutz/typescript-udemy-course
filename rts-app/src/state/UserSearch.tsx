import React from 'react';
import { useState } from 'react';

const users = [
  { name: 'haley', age: 42 },
  { name: 'james', age: 72 },
  { name: 'John', age: 22 },
];

interface UserProps {
  name: string;
  age: number;
}
const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<UserProps | undefined>();
  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    setName('');
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="">{user && user.name}</div>
      <div className="">{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
