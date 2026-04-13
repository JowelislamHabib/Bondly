import { LucidePlus } from "lucide-react";
import React from "react";

const HeroText = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <div className="">
          <div className=" text-center">
            <div className="">
              <h1 className="text-5xl font-bold">
                Friends to keep close in your life
              </h1>
              <p className="py-6">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the
                <br />
                relationships that matter most.
              </p>
              <button className="btn bg-(--bg-primary) text-white">
                <LucidePlus /> Add a Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
