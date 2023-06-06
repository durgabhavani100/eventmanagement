// components/EventItem.js

import React from "react";

function EventItem({ event, onDeleteEvent }) {
  const { id, title, location } = event;

  const handleDelete = () => {
    onDeleteEvent(id);
  };

  return (
    <div className="event-item">
      <h3>{title}</h3>
      <p>Location: {location}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EventItem;
