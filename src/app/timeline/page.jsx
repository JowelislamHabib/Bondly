"use client";
import React from "react";
import { Handshake, MessageCircle, Video, Phone } from "lucide-react";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";

const TimelinePage = () => {
  const { timelineEvents } = useContext(TimelineContext);

  return (
    <div>
      <div className="container mx-auto px-4">
        {timelineEvents.map((event, index) => (
          <div key={index}>
            <div className="card w-full bg-base-100 border border-slate-200 rounded-xl shadow-sm mb-2">
              <div className="card-body flex-row items-center gap-4 py-3 px-5">
                {event.type.toLowerCase() == "call" ? (
                  <div className="text-3xl flex-none">📞</div>
                ) : event.type.toLowerCase() == "video" ? (
                  <div className="text-3xl flex-none">📹</div>
                ) : (
                  <div className="text-3xl flex-none">💬</div>
                )}
                <div className="flex flex-col">
                  <div className="flex flex-row gap-1.5 items-baseline">
                    <h2 className="text-[17px] font-semibold text-[#2D4F43]">
                      {event.type}
                    </h2>
                    <span className="text-[17px] text-slate-500 font-normal">
                      with {event.person}
                    </span>
                  </div>
                  <p className="text-[14px] text-slate-400 font-medium">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
