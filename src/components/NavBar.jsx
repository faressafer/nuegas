import React from "react";
import Profil from "../assets/Profil.png";

const NavBar = () => {
  return (
    <div className=" p-4 bg-white w-full h-auto">
      <div className=" flex p-4 justify-between">
        <h2 className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[24px] font-semibold leading-[36px] tracking-[-0.72px]">
          Explore Task
        </h2>
        <div className="flex justify-between items-center gap-6">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Notification">
              <path
                id="Path_425"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.50083 12.7871V12.5681C1.53295 11.9202 1.7406 11.2925 2.10236 10.7496C2.7045 10.0975 3.1167 9.29831 3.29571 8.43598C3.29571 7.7695 3.29571 7.0935 3.35393 6.42703C3.65469 3.21842 6.82728 1 9.96106 1H10.0387C13.1725 1 16.345 3.21842 16.6555 6.42703C16.7137 7.0935 16.6555 7.7695 16.704 8.43598C16.8854 9.3003 17.2972 10.1019 17.8974 10.7591C18.2618 11.2972 18.4698 11.9227 18.4989 12.5681V12.7776C18.5206 13.648 18.2208 14.4968 17.6548 15.1674C16.907 15.9515 15.8921 16.4393 14.8024 16.5384C11.607 16.8812 8.38303 16.8812 5.18762 16.5384C4.09914 16.435 3.08576 15.9479 2.33521 15.1674C1.778 14.4963 1.48224 13.6526 1.50083 12.7871Z"
                stroke="#8E92BC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Path_421"
                d="M7.55469 19.8518C8.05396 20.4785 8.78715 20.884 9.59198 20.9788C10.3968 21.0735 11.2069 20.8495 11.843 20.3564C12.0387 20.2106 12.2147 20.041 12.3669 19.8518"
                stroke="#8E92BC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <img src={Profil} alt="" />
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="relative w-[480px]">
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
        <div className="gap-4 flex">
          <button className="flex items-center justify-center gap-2 w-[148px] h-[52px] rounded-[10px] border border-[#F5F5F7]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/element-1">
                <g id="element-1">
                  <path
                    id="Vector"
                    d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
                    stroke="#8E92BC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z"
                    stroke="#8E92BC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"
                    stroke="#8E92BC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
            <span>Category</span>
          </button>
          <button className="flex items-center justify-center gap-2 w-[190px] h-[52px] rounded-[10px] border border-[#F5F5F7]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/linear/sort">
<g id="sort">
<path id="Vector" d="M3 7H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_2" d="M6 12H18" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
<path id="Vector_3" d="M10 17H14" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
</g>
</g>
</svg>

            <span>Sort By : Deadline</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
