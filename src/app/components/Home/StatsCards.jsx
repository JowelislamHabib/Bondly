import React from "react";

const StatsCards = () => {
  return (
    <div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-(--text-secondary)">
              10
            </h2>
            <p className="text-lg text-(--text-muted)">Total Friends</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-(--text-secondary)">
              10
            </h2>
            <p className="text-lg text-(--text-muted)">On Track</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-(--text-secondary)">
              10
            </h2>
            <p className="text-lg text-(--text-muted)">Need Attention</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-(--text-secondary)">
              10
            </h2>
            <p className="text-lg text-(--text-muted)">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
      <div className="divider mt-8"></div>
    </div>
  );
};

export default StatsCards;
