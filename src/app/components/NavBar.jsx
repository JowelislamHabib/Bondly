import { LucideChartLine, LucideClock, LucideHome } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-base-100 shadow-sm mb-20">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <a className="text-xl font-bold">Bondly</a>
        </div>

        <div className="navbar-end gap-4">
          <Link href={"/"} className="btn bg-[var(--bg-primary)] text-white">
            <LucideHome /> Home
          </Link>

          <Link
            href={"/timeline"}
            className="flex items-center gap-1 text-[var(--text-muted)]"
          >
            <LucideClock />
            Timeline
          </Link>
          <Link
            href={"/stats"}
            className="flex items-center gap-1 text-[var(--text-muted)]"
          >
            <LucideChartLine />
            Stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
