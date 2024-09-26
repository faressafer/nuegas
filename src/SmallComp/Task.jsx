import React from "react";
import banner from "../assets/banner.png";
import { Progress } from "flowbite-react";
import "flowbite";

const Task = () => {
  return (
    <div className="border rounded-[10px] p-4 space-y-4 bg-white h-auto">
      <div className="justify-between flex border">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px] tracking-[-0.28px]">
          Todays Task
        </p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/more">
            <g id="more">
              <path
                id="Vector"
                d="M4.16667 8.33337C3.25 8.33337 2.5 9.08337 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08337 5.08333 8.33337 4.16667 8.33337Z"
                fill="#141522"
                stroke="#141522"
              />
              <path
                id="Vector_2"
                d="M15.8337 8.33337C14.917 8.33337 14.167 9.08337 14.167 10C14.167 10.9167 14.917 11.6667 15.8337 11.6667C16.7503 11.6667 17.5003 10.9167 17.5003 10C17.5003 9.08337 16.7503 8.33337 15.8337 8.33337Z"
                fill="#141522"
                stroke="#141522"
              />
              <path
                id="Vector_3"
                d="M9.99967 8.33337C9.08301 8.33337 8.33301 9.08337 8.33301 10C8.33301 10.9167 9.08301 11.6667 9.99967 11.6667C10.9163 11.6667 11.6663 10.9167 11.6663 10C11.6663 9.08337 10.9163 8.33337 9.99967 8.33337Z"
                fill="#141522"
                stroke="#141522"
              />
            </g>
          </g>
        </svg>
      </div>
      <img src={banner} className="w-full h-[150px]" alt="" />
      <div>
        <p className="text-[#141522] font-semibold text-[16px] leading-[150%] tracking-[-0.32px] font-[Plus Jakarta Sans]">
          Creating Mobile App Design
        </p>
        <p className="text-[#54577A] font-medium text-[12px] leading-normal tracking-[-0.24px] font-[Plus Jakarta Sans]">
          UI UX Design
        </p>
      </div>
      <div className="sapce-y-2">
        <div className="flex justify-between">
          <p className="text-[#141522] font-medium text-[16px] leading-[1.5] tracking-[-0.32px] font-[Plus Jakarta Sans]">
            Progress
          </p>
          <p className="text-[#546FFF] text-right font-medium text-[16px] leading-[1.5] tracking-[-0.32px] font-[Plus Jakarta Sans]">
            75%
          </p>
        </div>
        <Progress
          progress={75}
          progressLabelPosition="inside"
          textLabelPosition="outside"
          labelProgress
          className="bg-[#546FFF] h-[10px] rounded-[8px]"
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
      <div className="space-y-4">
        <div className="flex justify-between w-full">
          <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px] tracking-[-0.28px]">
            Todays Task
          </p>
          <p className="text-[#54577A] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-normal tracking-[-0.24px]">
            UI / UX Designer
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div class="flex justify-center items-center w-9 h-9 rounded-[10px] bg-[#F5F5F7]">
            <span>1</span>
          </div>
          <p class="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.28px]">
            Understanding the tools in Figma
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div class="flex justify-center items-center w-9 h-9 rounded-[10px] bg-[#F5F5F7]">
            <span>2</span>
          </div>
          <p class="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.28px]">
            Understand the basics of making designs
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div class="flex justify-center items-center w-9 h-9 rounded-[10px] bg-[#F5F5F7]">
            <span>3</span>
          </div>
          <p class="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.28px]">
          Design a mobile application with figma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
