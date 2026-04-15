"use client";
import React, { useContext } from "react";

import {
  LucideArchive,
  LucideBellRing,
  LucideMessageSquare,
  LucidePhone,
  LucideTrash2,
  LucideVideo,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { FriendContext } from "@/context/FriendsContext";
import { notFound, useParams } from "next/navigation";
import { TimelineContext } from "@/context/TimelineContext";
import { ToastContainer, toast } from "react-toastify";

const UserDetailsPage = () => {
  const { id } = useParams();
  // console.log(id);
  const { friends } = useContext(FriendContext);
  const { addTimelineEvent } = useContext(TimelineContext);

  if (friends.length === 0)
    return (
      <div className="text-center mt-20">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  const user = friends.find((friend) => friend.id === parseInt(id));
  if (!user) {
    notFound();
  }
  const {
    name,
    picture,
    status,
    tags,
    days_since_contact,
    bio,
    email,
    goal,
    next_due_date,
  } = user;

  return (
    <div>
      <div>
        <div className="container mx-auto px-4">
          <div className="p-6 flex justify-center items-center font-sans text-slate-600">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4">
                <div className="card bg-white border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
                  <div className="avatar mb-4">
                    <div className=" rounded-full">
                      <Image
                        src={picture}
                        alt="name"
                        height={120}
                        width={120}
                        loading="eager"
                        className="rounded-full shadow-lg border-2 border-neutral-100 h-30 w-30 object-cover mb-3"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-800">{name}</h2>
                  <div className="flex flex-col gap-2 mt-2 items-center">
                    <p className="badge badge-error text-white text-sm font-medium rounded-full capitalize">
                      {status}
                    </p>
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
                  </div>
                  <p className="mt-4 italic text-gray-400 text-base">{bio}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Preferred: {email}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="btn bg-white hover:bg-gray-50 border-gray-100 normal-case font-medium text-slate-700 shadow-sm">
                    <LucideBellRing size={16} className="mr-2" /> Snooze 2 Weeks
                  </button>
                  <button className="btn bg-white hover:bg-gray-50 border-gray-100 normal-case font-medium text-slate-700 shadow-sm">
                    <LucideArchive size={16} className="mr-2" /> Archive
                  </button>
                  <button className="btn bg-white hover:bg-rose-50 border-gray-100 text-rose-500 normal-case font-medium shadow-sm">
                    <LucideTrash2 size={16} className="mr-2" /> Delete
                  </button>
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-(--text-secondary) leading-none">
                      {days_since_contact}
                    </span>
                    <span className="text-lg text-gray-400 mt-3">
                      Days Since Contact
                    </span>
                  </div>
                  <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-(--text-secondary) leading-none">
                      {goal}
                    </span>
                    <span className="text-lg text-gray-400 mt-3">
                      Goal (Days)
                    </span>
                  </div>
                  <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-(--text-secondary) leading-none">
                      {next_due_date}
                    </span>
                    <span className="text-lg text-gray-400 mt-3">Next Due</span>
                  </div>
                </div>

                <div className="card bg-white border border-gray-100 shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-(--text-secondary)">
                      Relationship Goal
                    </h3>
                    <button className="btn  bg-gray-50 hover:bg-gray-100 border-gray-200 normal-case text-gray-600 px-3">
                      Edit
                    </button>
                  </div>
                  <p className="text-slate-600">
                    Connect every <span className="font-bold">{goal} days</span>
                  </p>
                </div>

                <div className="card bg-white border border-gray-100 shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-(--text-secondary) mb-6">
                    Quick Check-In
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => {
                        addTimelineEvent("Call", user.name);
                        toast.success("Wow! You Just Made A Call!");
                      }}
                      className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2 cursor-pointer"
                    >
                      <LucidePhone size={24} className="text-slate-800" />
                      <span className="text-lg font-medium">Call</span>
                    </button>

                    <button
                      onClick={() => {
                        addTimelineEvent("Text", user.name);
                        toast.success("Nice! You Sent A Text!");
                      }}
                      className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2 cursor-pointer"
                    >
                      <LucideMessageSquare
                        size={24}
                        className="text-slate-800"
                      />
                      <span className="text-lg font-medium">Text</span>
                    </button>

                    <button
                      onClick={() => {
                        addTimelineEvent("Video", user.name);
                        toast.success("Awesome! Video Message Sent!");
                      }}
                      className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2 cursor-pointer"
                    >
                      <LucideVideo size={24} className="text-slate-800" />
                      <span className="text-lg font-medium">Video</span>
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
