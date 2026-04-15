import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen ">
      <div className="hero-content mx-auto text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-black text-base-content/10 select-none">
            404
          </h1>

          <div className="-mt-12">
            <h2 className="text-3xl font-bold">Lost in space?</h2>
            <p className="py-6 text-base-content/70">
              The page you are looking for doesn&apos;t exist or has been moved.
              Even Tom Baker couldn&apos;t find this one!
            </p>

            <div className="flex justify-center">
              <Link href="/" className="btn bg-(--bg-primary) text-white px-8">
                Take Me Home
              </Link>
            </div>
          </div>

          <div className="mt-12 opacity-20 flex justify-center">
            <div className="border-2 border-dashed border-base-300 p-8 rounded-full">
              <span className="text-6xl">🔭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
