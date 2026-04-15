"use client";
import React, { useContext } from "react";
import FriendsCard from "./FriendsCard";
import FriendProvider, { FriendContext } from "@/context/FriendsContext";

const FriendsList = () => {
  const { friends } = useContext(FriendContext);
  // console.log(params);
  console.log(friends);

  return (
    <div className="container mx-auto px-4 mb-12">
      <div>
        <h1 className="text-2xl font-semibold">Your Friends</h1>
      </div>

      <div className="flex justify-center items-center">
        {friends.length === 0 && (
          <div className="text-center mt-20">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}
      </div>

      <div className="grid md:grid-col-2 lg:grid-cols-4 gap-4 mt-4">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
