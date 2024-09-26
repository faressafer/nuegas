import React from "react";
import UpcomingTasks from "./UpcomingTasks";

const TimeLimit = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[24px] font-semibold leading-[36px] tracking-[-0.72px]">
          Time Limit
        </p>
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/arrow-left">
              <g id="arrow-left">
                <path
                  id="Vector"
                  d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996"
                  stroke="#54577A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/arrow-right">
              <g id="arrow-right">
                <path
                  id="Vector"
                  d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
                  stroke="#141522"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        <UpcomingTasks />
        <UpcomingTasks />
        <UpcomingTasks />
        <UpcomingTasks />
      </div>
    </div>
  );
};

export default TimeLimit;
