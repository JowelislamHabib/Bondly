import Link from "next/link";
import React from "react";

const NoDataFound = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <div className="hero min-h-100 bg-base-200/50 rounded-2xl border-2 border-dashed border-base-300">
          <div className="hero-content mx-auto text-center">
            <div className="max-w-md">
              <div className="text-6xl mb-6 opacity-70">😥</div>

              <h2 className="text-2xl font-bold text-base-content/80">
                No events found
              </h2>

              <p className="py-4 text-base-content/60">
                It looks like there is nothing here.
              </p>
              <Link
                href={"/"}
                className="btn bg-(--bg-primary) text-white btn-wide mt-2 rounded-sm"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;
