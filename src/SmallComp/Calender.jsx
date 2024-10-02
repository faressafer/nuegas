import React from "react";

const Calender = ({ month = "July", year = "2022", days = [10, 10, 10, 10, 10, 10, 10] }) => {
  return (
    <div className="w-full h-auto border bg-white rounded-[10px]">
      <div className="flex justify-between p-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996"
            stroke="#54577A"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-center text-[#141522] font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[21px]">
          {month} {year}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
            stroke="#141522"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="p-4 flex justify-between">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="items-center flex flex-col justify-center">
            <span>{day}</span>
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#F5F5F7]">
              <span>{days[index]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
