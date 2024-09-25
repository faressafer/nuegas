import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="">
      <div className="flex gap-2 justify-center items-center p-4 border">
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
      <div className="border p-4">
        <Link to="Overview">
          <div className="border p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full bg-[#F5F5F7]">
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
                    stroke="#141522"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                    stroke="#141522"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                    stroke="#141522"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                    stroke="#141522"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            <p class="text-[#141522] text-sm font-semibold leading-[21px] tracking-[-0.28px]">
              Overview
            </p>
          </div>
        </Link>
        <Link to="Tasks">
          <div className="border p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ">
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
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12 5.48999V20.49"
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M7.75 8.48999H5.5"
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M8.5 11.49H5.5"
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p class="text-[#8E92BC] text-sm font-semibold leading-[21px] tracking-[-0.28px]">
              Task
            </p>
          </div>
        </Link>
        <Link to="Mentors">
          <div className="border p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ">
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
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g id="Group">
                    <path
                      id="Vector_2"
                      d="M11.9999 11.0001C13.2867 11.0001 14.3299 9.95687 14.3299 8.67004C14.3299 7.38322 13.2867 6.34009 11.9999 6.34009C10.7131 6.34009 9.66992 7.38322 9.66992 8.67004C9.66992 9.95687 10.7131 11.0001 11.9999 11.0001Z"
                      stroke="#8E92BC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601"
                      stroke="#8E92BC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <p class="text-[#8E92BC] text-sm font-semibold leading-[21px] tracking-[-0.28px]">
              Mentors
            </p>
          </div>
        </Link>
        <Link to="Message">
          <div className="border p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ">
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
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M15.9965 11H16.0054"
                    stroke="#8E92BC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M11.9955 11H12.0045"
                    stroke="#8E92BC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M7.99451 11H8.00349"
                    stroke="#8E92BC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p class="text-[#8E92BC] text-sm font-semibold leading-[21px] tracking-[-0.28px]">
              Message
            </p>
          </div>
        </Link>
        <Link to="Settings">
          <div className="border p-4 flex gap-4 rounded-[10px] mb-4 w-full h-full ">
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
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                    stroke="#8E92BC"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>

            <p class="text-[#8E92BC] text-sm font-semibold leading-[21px] tracking-[-0.28px]">
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
