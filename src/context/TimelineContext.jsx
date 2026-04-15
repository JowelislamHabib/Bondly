"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineEvents, setTimelineEvents] = useState([]);

  const addTimelineEvent = (selectedType, friendName) => {
    const newTimelineEvent = {
      type: selectedType,
      person: friendName,
      date: new Date().toLocaleDateString(),
    };

    setTimelineEvents((prev) => [newTimelineEvent, ...prev]);
  };

  const data = {
    timelineEvents,
    setTimelineEvents,
    addTimelineEvent,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
