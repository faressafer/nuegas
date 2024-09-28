import React from "react";
import banner from "../assets/banner.png";
import { Progress } from "@material-tailwind/react";

const UpcomingTasks = () => {
  return (
    <div className="w-1/2 border rounded-[10px] space-y-2 p-4 bg-white h-[314px]">
      <img src={banner} className="w-full h-[130px]" alt="" />
      <div>
        <p className="text-[#141522] font-semibold text-[16px] leading-[150%] tracking-[-0.32px] font-[Plus Jakarta Sans]">
          Creating Mobile App Design
        </p>
        <p className="text-[#54577A] font-medium text-[12px] leading-normal tracking-[-0.24px] font-[Plus Jakarta Sans]">
          UI UX Design
        </p>
      </div>
      <div className="sapce-y-4">
        <div className="flex justify-between mb-1">
          <p className="text-[#141522] font-medium text-[16px] leading-[1.5] tracking-[-0.32px] font-[Plus Jakarta Sans]">
            Progress
          </p>
          <p className="text-[#546FFF] text-right font-medium text-[16px] leading-[1.5] tracking-[-0.32px] font-[Plus Jakarta Sans]">
            75%
          </p>
        </div>
        <Progress
          value={20}
          variant="gradient"
          color="bg-[#BAC8FF]"
          className="bg-[#BAC8FF] h-[10px] rounded-[8px]"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Time Circle">
              <path
                id="Stroke 1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.25 10.0005C19.25 15.1095 15.109 19.2505 10 19.2505C4.891 19.2505 0.75 15.1095 0.75 10.0005C0.75 4.89149 4.891 0.750488 10 0.750488C15.109 0.750488 19.25 4.89149 19.25 10.0005Z"
                stroke="#54577A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 3"
                d="M13.4311 12.9429L9.66113 10.6939V5.84692"
                stroke="#54577A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <p className="text-[#141522] font-medium text-[16px] leading-[1.5] tracking-[-0.32px] font-[Plus Jakarta Sans]">
            3 Days Left
          </p>
        </div>
        <div>full profiles</div>
      </div>
    </div>
  );
};

export default UpcomingTasks;
