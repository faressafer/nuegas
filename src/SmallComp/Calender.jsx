import React from "react";

const Calender = () => {
  return (
    <div className="w-full h-auto border bg-white rounded-[10px]">
      <div className=" flex justify-between p-4">
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
        <p class="text-center text-[#141522] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px]">
          July 2022
        </p>
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
      <div className="p-4 flex justify-between">
        <div className="items-center flex flex-col  justify-center">
          <span className="">S</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">M</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">T</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">W</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">T</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">F</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
        <div className="items-center flex flex-col  justify-center">
          <span className="">S</span>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
