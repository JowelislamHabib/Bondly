"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineEvents, setTimelineEvents] = useState([]);
  const data = {
    timelineEvents,
    setTimelineEvents,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
