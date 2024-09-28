import React from "react";
import NavBarMidium from "../components/NavBarMidium";
import Chat from "../SmallComp/Chat";
import Inbox from "../SmallComp/Inbox";

const Message = () => {
  return (
    <div className="bg-white h-[80vh]">
      <NavBarMidium title="Message" />
      <div className="flex gap-4">
        <div className="w-2/5 h-[80vh] overflow-scroll space-y-4 p-6">
          <div className="relative w-full">
            <input
              type="text"
              className="py-[14px] pl-[40px] pr-[28px] rounded-[10px] border border-[#F5F5F7] w-full"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </div>
          <div>
            <Inbox status="active" />
            <Inbox />
            <Inbox />
            <Inbox />
            <Inbox />
            <Inbox />
            <Inbox />
          </div>
        </div>
        <div className="w-4/5 border">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Message;
