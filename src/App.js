// App.js

import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
    console.log(event);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Event Management System</h1>
      <div className="app">
        <EventList events={events} onDeleteEvent={handleDeleteEvent} />
        <EventForm onCreateEvent={handleCreateEvent} />
      </div>
    </>
  );
}

export default App;
