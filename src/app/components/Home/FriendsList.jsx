import React from "react";
import FriendsCard from "./FriendsCard";

const FriendsList = async (params) => {
  const response = await fetch("https://bondly-theta.vercel.app/friends.json");
  const friends = await response.json();
  // console.log(friends);

  return (
    <div className="container mx-auto px-4 mb-12">
      <div>
        <h1 className="text-2xl font-semibold">Your Friends</h1>
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
