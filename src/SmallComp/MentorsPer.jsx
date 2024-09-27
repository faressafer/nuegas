import React from "react";
import Profil2 from "../assets/Profil2.png";

const MentorsPer = () => {
  return (
    <div className="w-full space-y-4 border bg-white rounded-[10px] p-4">
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <img src={Profil2} alt="" />
          <div>
            <h3 className="text-[#141522] font-semibold text-[16px] leading-[150%] tracking-[-0.32px] font-[Plus Jakarta Sans]">
              Curious George
            </h3>
            <p className="text-[#54577A] font-medium text-[12px] leading-normal tracking-[-0.24px] font-[Plus Jakarta Sans]">
              UI UX Design
            </p>
          </div>
        </div>
        <p className="text-[#546FFF] text-right font-medium text-[14px] leading-[150%] tracking-[-0.28px] font-[Plus Jakarta Sans]">
          +Follow
        </p>
      </div>
      <div>
        <p className="text-[var(--Secondary-300,#8E92BC)] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[28px]">
          Hi, I'm Jessica Jane. I am a doctoral student at Harvard University
          majoring in Web . . .
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div className=" flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/note-2">
              <g id="note-2">
                <path
                  id="Vector"
                  d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
                  stroke="#54577A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M15.0603 19.39C14.4403 19.81 13.6603 20.16 12.7103 20.47L11.1303 20.99C7.16034 22.27 5.07034 21.2 3.78034 17.23L2.50034 13.28C1.22034 9.30998 2.28034 7.20998 6.25034 5.92998L7.83034 5.40998C8.24034 5.27998 8.63034 5.16998 9.00034 5.09998C8.70034 5.70998 8.46034 6.44998 8.26034 7.29998L7.28034 11.49C6.30034 15.67 7.59034 17.73 11.7603 18.72L13.4403 19.12C14.0203 19.26 14.5603 19.35 15.0603 19.39Z"
                  stroke="#54577A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M12.6396 8.53003L17.4896 9.76003"
                  stroke="#54577A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M11.6602 12.4L14.5602 13.14"
                  stroke="#54577A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>

          <p className="text-[#141522] font-medium text-[14px] leading-[150%] tracking-[-0.28px] font-[Plus Jakarta Sans]">
            40 Task
          </p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
              fill="#FFB054"
            />
          </svg>
          <p className="text-[#141522] font-medium text-[14px] leading-[150%] tracking-[-0.28px] font-[Plus Jakarta Sans]">
            4,7 (750 Reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorsPer;
