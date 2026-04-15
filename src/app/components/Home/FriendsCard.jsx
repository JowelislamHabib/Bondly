"use client";
import { FriendContext } from "@/context/FriendsContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const FriendsCard = ({ friend }) => {
  const { name, picture, tags, days_since_contact, id } = friend;
  const { status } = useContext(FriendContext);

  const checkStatus = friend.status.toLowerCase();

  return (
    <Link href={`/user/${id}`} className="block">
      <div className="hover-3d w-full">
        <figure className="card bg-base-100 shadow-sm p-6 border border-slate-100 rounded-2xl w-full h-full block">
          <div className="flex flex-col items-center">
            <div className="avatar mb-4">
              <div className="w-20 h-20 rounded-full ring ring-neutral-200 ring-offset-base-100 ring-offset-2 overflow-hidden">
                <Image
                  src={picture}
                  alt={name}
                  height={80}
                  width={80}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="text-xl font-semibold text-(--text-secondary)">
                {name}
              </h2>
              <small className="text-slate-400 font-medium">
                {days_since_contact} days ago
              </small>

              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="uppercase px-3 py-0.5 rounded-full text-[10px] text-green-700 font-bold bg-green-100 border border-green-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className={`mt-4 px-6 py-2 rounded-full text-xs font-bold shadow-xs border ${status[checkStatus] || "bg-gray-100 text-neutral-500 border-gray-200"}`}
              >
                <span className="capitalize">{checkStatus}</span>
              </p>
            </div>
          </div>
        </figure>

        {/* 8 empty divs needed for the 3D effect in DaisyUI 5 */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Link>
  );
};

export default FriendsCard;
