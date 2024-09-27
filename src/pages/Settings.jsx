import React, { useState } from "react";
import NavBarMidium from "../components/NavBarMidium";
import { Link } from "react-router-dom";

const Settings = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("general");

  // Content for the "General" tab
  const generalContent = (
    <div className="space-y-4">
      <div className=" space-y-4">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px] tracking-[-0.28px]">
          Language
        </p>
        <select className="border rounded-md w-[400px] p-2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className=" space-y-4">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px] tracking-[-0.28px]">
          Timezone
        </p>
        <select className="border rounded-md w-[400px] p-2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className=" space-y-4">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px] tracking-[-0.28px]">
          Language
        </p>
        <div className="flex gap-4">
          <div className="flex w-[184px] h-[50px] px-5 py-4 justify-between items-center rounded-[10px] border border-[#546FFF] bg-[#FFF]">
            <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-normal tracking-[-0.24px]">
              24 Hours
            </span>
            <input type="radio" />
          </div>
          <div className="flex w-[184px] h-[50px] px-5 py-4 justify-between items-center rounded-[10px] border border-[#546FFF] bg-[#FFF]">
            <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-normal tracking-[-0.24px]">
              24 Hours
            </span>
            <input type="radio" />
          </div>
        </div>
      </div>
    </div>
  );

  // Content for the "Notification" tab
  const notificationContent = (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-200 dark:border-gray-600"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
        </label>
        <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[150%] tracking-[-0.28px]">
          Message
        </span>
      </div>
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-200 dark:border-gray-600"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
        </label>
        <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[150%] tracking-[-0.28px]">
          Task Update
        </span>
      </div>
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 ddark:bg-gray-200 dark:border-gray-600"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
        </label>
        <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[150%] tracking-[-0.28px]">
          Task Deadline
        </span>
      </div>
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-200 dark:border-gray-600"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full left-1 top-0.5 peer-checked:translate-x-full transition-all"></div>
        </label>
        <span className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[150%] tracking-[-0.28px]">
          Mentor Help
        </span>
      </div>
      <button className="flex w-[250px] p-4 items-center justify-center text-white rounded-[10px] bg-[var(--Primary-500,#546FFF)]">
        Save Changes
      </button>
    </div>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <NavBarMidium />
      <div className="p-6">
        <div className="w-full p-6 space-y-6 bg-white rounded-[10px] h-auto">
          <div className="w-full  gap-2  border-b-2 flex">
            <Link
              className={`w-[76px] h-[35px] justify-center flex  ${
                activeTab === "general" ? "border-[#546FFF] border-b-2" : ""
              }`}
              onClick={() => setActiveTab("general")}
            >
              <span>General</span>
            </Link>

            <Link
              className={`w-[76px] h-[35px] justify-center flex  ${
                activeTab === "notification"
                  ? "border-[#546FFF] border-b-2"
                  : ""
              }`}
              onClick={() => setActiveTab("notification")}
            >
              <span>Notification</span>
            </Link>
          </div>

          {activeTab === "general" ? generalContent : notificationContent}
        </div>
      </div>
    </div>
  );
};

export default Settings;
