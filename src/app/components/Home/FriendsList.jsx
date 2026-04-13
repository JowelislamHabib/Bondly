import React from "react";

const FriendsList = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <h1 className="text-2xl font-semibold">Your Friends</h1>
      </div>

      <div className="grid md:grid-col-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="card bg-base-100 shadow-sm p-6">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-full h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-semibold">David Kim</h2>
            <small>62d ago</small>
            <p className="uppercase px-4 py-2 rounded-full text-xs font-medium bg-green-200">
              work
            </p>
            <p className="capital px-4 py-2 rounded-full text-xs font-medium bg-orange-300">
              Almost Due
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
