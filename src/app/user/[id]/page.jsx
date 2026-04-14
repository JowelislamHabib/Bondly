import React, { use } from "react";

const UserDetailsPage = async (params) => {
  const para = await params.params;
  const userId = para.id;
  console.log(userId);

  const response = await fetch("http://localhost:3000/friends.json");
  const friends = await response.json();
  console.log(friends);

  const user = friends.find((friend) => friend.id === parseInt(userId));
  console.log(user);

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserDetailsPage;
