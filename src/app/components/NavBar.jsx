"use client";
import { LucideChartLine, LucideClock, LucideHome } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navMenu = usePathname();
  const isActive = (navLink) => navMenu === navLink;

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
          <Link href={"/"} className="text-xl font-bold">
            BondLy
          </Link>
        </div>

        <div className="navbar-end gap-4">
          <Link
            href={"/"}
            className={`${isActive("/") ? "btn bg-[var(--bg-primary)] text-white" : "text-[var(--text-muted)]"} flex items-center gap-1`}
          >
            <LucideHome /> Home
          </Link>

          <Link
            href={"/timeline"}
            className={`${isActive("/timeline") ? "btn bg-[var(--bg-primary)] text-white" : "text-[var(--text-muted)]"} flex items-center gap-1`}
          >
            <LucideClock />
            Timeline
          </Link>
          <Link
            href={"/stats"}
            className={`${isActive("/stats") ? "btn bg-[var(--bg-primary)] text-white" : "text-[var(--text-muted)]"} flex items-center gap-1`}
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
