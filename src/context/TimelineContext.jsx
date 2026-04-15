"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTimelineEvent = (selectedType, friendName) => {
    const newTimelineEvent = {
      type: selectedType,
      person: friendName,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setTimelineEvents((prev) => [newTimelineEvent, ...prev]);
  };

  const filteredEvents =
    filter === "All"
      ? timelineEvents
      : timelineEvents.filter(
          (event) => event.type.toLowerCase() === filter.toLowerCase(),
        );

  const data = {
    timelineEvents,
    setTimelineEvents,
    addTimelineEvent,
    filter,
    setFilter,
    filteredEvents,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
