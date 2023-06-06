// components/EventList.js

import React from "react";
import EventItem from "./EventItem";

function EventList({ events, onDeleteEvent }) {
  return (
    <div className="event-list">
      <h2>Events</h2>
      {events.map((event) => (
        <EventItem key={event.id} event={event} onDeleteEvent={onDeleteEvent} />
      ))}
    </div>
  );
}

export default EventList;
