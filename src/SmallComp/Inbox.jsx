import React from "react";
import Profil2 from "../assets/Profil2.png";

const Inbox = ({ status }) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full h-[68px] mb-2 flex justify-center items-center p-4 rounded-[10px] ${
          status === "active" ? "bg-[#FAFAFA]" : ""
        }`}
      >
        <div className="flex w-full gap-4">
          <img src={Profil2} alt="Profile" />
          <div className="w-full">
            <div className="flex justify-between">
              <h4 className="text-[#141522] font-semibold text-[14px] leading-[21px] tracking-[-0.28px]">
                Angelie Crison
              </h4>
              <p className="text-[#8E92BC] text-right font-normal text-[12px] tracking-[-0.12px]">
                1m Ago
              </p>
            </div>
            <div className="flex justify-between space-y-2">
              <p>Thank you very much I'm glad ..</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="4" fill="#DB5962" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px]"></div>
    </div>
  );
};

export default Inbox;
