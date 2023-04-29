import React from 'react';
import { useState, useRef, useEffect } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<UserProps | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    setName('');
  };

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="">{user && user.name}</div>
      <div className="">{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
