import React from 'react';
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName(' ');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>GuestList</h3>
      {guests.map((guest) => (
        <h2>{guest}</h2>
      ))}

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder={name}
        value={name}
      />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
