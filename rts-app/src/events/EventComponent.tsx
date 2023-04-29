//just for managing events

import React from 'react';

const EventComponent = () => {
  // const oChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientX, event.clientY);
  };
  return (
    <div>
      <input type="text" onChange={(e) => console.log(e)} />
      <div className="" draggable onDragStart={handleDrag}>
        drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
