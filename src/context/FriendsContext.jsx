"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch("https://bondly.vercel.app/friends.json");
      const data = await response.json();
      setFriends(data);
    };

    fetchFriends();
  }, []);

  const data = {
    friends,
    setFriends,
    status: {
      overdue: "bg-red-600 text-white border-red-700",
      "almost due": "bg-yellow-500 text-black border-yellow-600",
      "on-track": "bg-emerald-600 text-white border-emerald-700",
    },
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
