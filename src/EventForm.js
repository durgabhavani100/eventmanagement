// components/EventForm.js

import React, { useState } from "react";

function EventForm({ onCreateEvent }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      location,
    };
    onCreateEvent(newEvent);
    setTitle("");
    setLocation("");
  };

  return (
    <div className="event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default EventForm;
