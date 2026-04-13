import React from "react";
import {
  LucideArchive,
  LucideBellRing,
  LucideMessageSquare,
  LucidePhone,
  LucideTrash2,
  LucideVideo,
} from "lucide-react";

const UserDetails = () => {
  return (
    <div>
      <div>
        <div className="p-6 flex justify-center items-center font-sans text-slate-600">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4">
              <div className="card bg-white border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
                <div className="avatar mb-4">
                  <div className="w-20 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?u=emma"
                      alt="Emma Wilson"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Emma Wilson
                </h2>
                <div className="flex flex-col gap-2 mt-2 items-center">
                  <p className="badge badge-error text-white text-sm font-medium rounded-full">
                    Overdue
                  </p>
                  <p className="badge badge-success bg-green-200 badge-outline text-(--text-secondary) text-sm font-medium rounded-full">
                    FAMILY
                  </p>
                </div>
                <p className="mt-4 italic text-gray-400 text-sm">
                  "Former colleague, great mentor"
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Preferred: email
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
              <div className="grid grid-cols-3 gap-4">
                <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-slate-700 leading-none">
                    62
                  </span>
                  <span className="text-[11px] text-gray-400 mt-3">
                    Days Since Contact
                  </span>
                </div>
                <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-slate-700 leading-none">
                    30
                  </span>
                  <span className="text-[11px] text-gray-400 mt-3">
                    Goal (Days)
                  </span>
                </div>
                <div className="card bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-800 leading-none">
                    Feb 27, 2026
                  </span>
                  <span className="text-[11px] text-gray-400 mt-3">
                    Next Due
                  </span>
                </div>
              </div>

              <div className="card bg-white border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-emerald-900/80">
                    Relationship Goal
                  </h3>
                  <button className="btn btn-xs bg-gray-50 hover:bg-gray-100 border-gray-200 normal-case text-gray-600 px-3">
                    Edit
                  </button>
                </div>
                <p className="text-slate-600">
                  Connect every <span className="font-bold">30 days</span>
                </p>
              </div>

              <div className="card bg-white border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-emerald-900/80 mb-6">
                  Quick Check-In
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2">
                    <LucidePhone size={24} className="text-slate-800" />
                    <span className="text-sm font-medium">Call</span>
                  </button>
                  <button className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2">
                    <LucideMessageSquare size={24} className="text-slate-800" />
                    <span className="text-sm font-medium">Text</span>
                  </button>
                  <button className="flex flex-col items-center justify-center py-6 rounded-xl border-2 border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all gap-2">
                    <LucideVideo size={24} className="text-slate-800" />
                    <span className="text-sm font-medium">Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
