import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isActive, SetisActive] = useState("Overview");

  const handleActive  = (state) => {
    SetisActive(state);
  };

  return (
    <div className="">
      <div className="flex gap-2 justify-center items-center p-4 ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/bold/book-square">
              <g id="book-square">
                <path
                  id="Vector"
                  d="M26.983 3.33337H13.0163C6.94967 3.33337 3.33301 6.95004 3.33301 13.0167V26.9667C3.33301 33.05 6.94967 36.6667 13.0163 36.6667H26.9663C33.033 36.6667 36.6497 33.05 36.6497 26.9834V13.0167C36.6663 6.95004 33.0497 3.33337 26.983 3.33337ZM19.1663 28.75C19.1663 29.35 18.5663 29.75 18.0163 29.5167C15.9997 28.65 13.3663 27.85 11.533 27.6167L11.2163 27.5834C10.1997 27.45 9.36634 26.5 9.36634 25.4667V12.6334C9.36634 11.35 10.3997 10.4 11.6663 10.5C13.7497 10.6667 16.833 11.6667 18.7663 12.7667C19.033 12.9167 19.1663 13.2 19.1663 13.4834V28.75ZM30.633 25.45C30.633 26.4834 29.7997 27.4334 28.783 27.5667L28.433 27.6C26.6163 27.85 23.9997 28.6334 21.983 29.4834C21.433 29.7167 20.833 29.3167 20.833 28.7167V13.4667C20.833 13.1667 20.983 12.8834 21.2497 12.7334C23.183 11.65 26.1997 10.6834 28.2497 10.5H28.3163C29.5997 10.5 30.633 11.5334 30.633 12.8167V25.45Z"
                  fill="#546FFF"
                />
              </g>
            </g>
          </svg>
          <p class="text-[#141522] text-2xl font-semibold leading-[48px] tracking-[-0.96px]">
            Nuegas
          </p>
      </div>
      <div className=" p-4">
        <Link to="Overview" onClick={() => handleActive ("Overview")}>
          <div
            className={` p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ${
              isActive === "Overview" ? "bg-[#F5F5F7]" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/category-2">
                <g id="category-2">
                  <path
                    id="Vector"
                    d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                    stroke={isActive === "Overview" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                    stroke={isActive === "Overview" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                    stroke={isActive === "Overview" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                    stroke={isActive === "Overview" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
            <p
              className={`${
                isActive === "Overview" ? "text-[#141522]" : "text-[#8E92BC]"
              } text-sm font-semibold leading-[21px] tracking-[-0.28px]`}
            >
              Overview
            </p>
          </div>
        </Link>
        <Link to="Tasks" onClick={() => handleActive ("Tasks")}>
          <div
            className={` p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ${
              isActive === "Tasks" ? "bg-[#F5F5F7]" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/book">
                <g id="book">
                  <path
                    id="Vector"
                    d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
                    stroke={isActive === "Tasks" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12 5.48999V20.49"
                    stroke={isActive === "Tasks" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M7.75 8.48999H5.5"
                    stroke={isActive === "Tasks" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M8.5 11.49H5.5"
                    stroke={isActive === "Tasks" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p
              className={`${
                isActive === "Tasks" ? "text-[#141522]" : "text-[#8E92BC]"
              } text-sm font-semibold leading-[21px] tracking-[-0.28px]`}
            >
              Task
            </p>
          </div>
        </Link>

        <Link to="Mentors" onClick={() => handleActive ("Mentors")}>
          <div
            className={` p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ${
              isActive === "Mentors" ? "bg-[#F5F5F7]" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/user-octagon">
                <g id="user-octagon">
                  <path
                    id="Vector"
                    d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                    stroke={isActive === "Mentors" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="Group">
                    <path
                      id="Vector_2"
                      d="M11.9999 11.0001C13.2867 11.0001 14.3299 9.95687 14.3299 8.67004C14.3299 7.38322 13.2867 6.34009 11.9999 6.34009C10.7131 6.34009 9.66992 7.38322 9.66992 8.67004C9.66992 9.95687 10.7131 11.0001 11.9999 11.0001Z"
                      stroke={isActive === "Mentors" ? "#141522" : "#8E92BC"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601"
                      stroke={isActive === "Mentors" ? "#141522" : "#8E92BC"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <p
              className={`${
                isActive === "Mentors" ? "text-[#141522]" : "text-[#8E92BC]"
              } text-sm font-semibold leading-[21px] tracking-[-0.28px]`}
            >
              Mentors
            </p>
          </div>
        </Link>
        <Link to="Message" onClick={() => handleActive ("Message")}>
          <div
            className={` p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ${
              isActive === "Message" ? "bg-[#F5F5F7]" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/message">
                <g id="message">
                  <path
                    id="Vector"
                    d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                    stroke={isActive === "Message" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M15.9965 11H16.0054"
                    stroke={isActive === "Message" ? "#141522" : "#8E92BC"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M11.9955 11H12.0045"
                    stroke={isActive === "Message" ? "#141522" : "#8E92BC"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M7.99451 11H8.00349"
                    stroke={isActive === "Message" ? "#141522" : "#8E92BC"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p
              className={`${
                isActive === "Message" ? "text-[#141522]" : "text-[#8E92BC]"
              } text-sm font-semibold leading-[21px] tracking-[-0.28px]`}
            >
              Message
            </p>
          </div>
        </Link>
        <Link to="Settings" onClick={() => handleActive("Settings")}>
          <div
            className={`p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ${
              isActive === "Settings" ? "bg-[#F5F5F7]" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/setting-2">
                <g id="setting-2">
                  <path
                    id="Vector"
                    d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                    stroke={isActive === "Settings" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M19.1 9.34L17.88 7.26C17.73 7 17.47 6.85 17.18 6.85H15.8C15.53 6.85 15.29 6.71 15.14 6.46L13.92 4.38C13.77 4.12 13.51 3.97 13.22 3.97H10.78C10.49 3.97 10.23 4.12 10.08 4.38L8.86 6.46C8.71 6.71 8.47 6.85 8.2 6.85H6.82C6.53 6.85 6.27 7 6.12 7.26L4.9 9.34C4.75 9.6 4.78 9.93 4.97 10.14L6.22 11.4C6.47 11.65 6.47 12.03 6.22 12.29L4.97 13.55C4.78 13.76 4.75 14.09 4.9 14.35L6.12 16.43C6.27 16.69 6.53 16.84 6.82 16.84H8.2C8.47 16.84 8.71 16.97 8.86 17.23L10.08 19.31C10.23 19.58 10.49 19.72 10.78 19.72H13.22C13.51 19.72 13.77 19.58 13.92 19.31L15.14 17.23C15.29 16.97 15.53 16.84 15.8 16.84H17.18C17.47 16.84 17.73 16.69 17.88 16.43L19.1 14.35C19.25 14.09 19.22 13.76 19.03 13.55L17.78 12.29C17.53 12.03 17.53 11.65 17.78 11.4L19.03 10.14C19.22 9.93 19.25 9.6 19.1 9.34Z"
                    stroke={isActive === "Settings" ? "#141522" : "#8E92BC"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p
              className={`${
                isActive === "Settings" ? "text-[#141522]" : "text-[#8E92BC]"
              } text-sm font-semibold leading-[21px] tracking-[-0.28px]`}
            >
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
