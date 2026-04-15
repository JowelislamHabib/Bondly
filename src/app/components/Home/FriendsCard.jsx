"use client";
import { FriendContext } from "@/context/FriendsContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const FriendsCard = ({ friend }) => {
  const myFriend = friend;
  const { name, picture, tags, days_since_contact } = myFriend;
  const { status } = useContext(FriendContext);

  const checkStatus = myFriend.status.toLowerCase();

  return (
    <div>
      <div>
        <Link href={`/user/${myFriend.id}`}>
          <div className="card bg-base-100 shadow-sm p-6">
            <figure>
              <Image
                src={picture}
                alt="name"
                height={80}
                width={80}
                loading="eager"
                className="rounded-full shadow-md border-2 border-neutral-100 h-30 w-30 object-fit-cover mb-3"
              />
            </figure>
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="text-xl font-semibold">{name}</h2>
              <small>{days_since_contact} days ago</small>
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="uppercase px-4 py-1 rounded-full text-xs text-green-700 font-medium bg-green-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className={`px-4 py-2 rounded-full text-sm font-medium ${status[checkStatus]} || "bg-gray-100 text-gray-700 border border-gray-200"}`}
              >
                <span className="capitalize">{checkStatus}</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FriendsCard;
