"use client";
import React, { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";
import NoDataFound from "../components/NoDataFound";

const StatsPage = () => {
  const { timelineEvents } = useContext(TimelineContext);

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timelineEvents.forEach((event) => {
    const type = event.type;
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.Text || 0, fill: "#8b5cf6" },
    { name: "Call", value: counts.Call || 0, fill: "#1e3a3a" },
    { name: "Video", value: counts.Video || 0, fill: "#3bb273" },
  ];

  const totalEvents = timelineEvents.length;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-(--text-secondary) mb-6 md:mb-10 ml-1 md:ml-2">
        Friendship Analytics
      </h1>

      <div className="bg-white shadow p-6 md:p-10 rounded-xl">
        <h2 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8 text-(--text-secondary)">
          By Interaction Type
        </h2>

        <div className="w-full flex justify-center items-center overflow-hidden">
          {totalEvents > 0 ? (
            <div className="w-full max-w-100 aspect-square">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius="75%"
                    outerRadius="100%"
                    cornerRadius={40}
                    paddingAngle={8}
                    dataKey="value"
                    isAnimationActive={true}
                    stroke="none"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{ paddingTop: "20px" }}
                    formatter={(value) => (
                      <span className="text-(--text-secondary) font-medium ml-1 mr-4">
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
