import React, { useState } from "react";
import MonthlyMentors from "./MonthlyMentors";

const RecentMentors = () => {
  const mentors = [
    <MonthlyMentors key={1} />,
    <MonthlyMentors key={2} />,
    <MonthlyMentors key={3} />,
    <MonthlyMentors key={4} />,
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  const scrollLeft = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const scrollRight = () => {
    setVisibleIndex((prevIndex) => Math.min(prevIndex + 3, mentors.length - 3));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <p className="text-[var(--Secondary-500,#141522)] font-['Plus_Jakarta_Sans'] text-[24px] font-semibold leading-[36px] tracking-[-0.72px]">
          Recent Mentors
        </p>
        <div className="flex gap-2">
          {/* Left Arrow */}
          <button onClick={scrollLeft} disabled={visibleIndex === 0}>
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
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            disabled={visibleIndex >= mentors.length - 3}
          >
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
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel with scrollable mentors */}
      <div className="flex gap-2">
        {mentors.slice(visibleIndex, visibleIndex + 3).map((mentor) => mentor)}
      </div>
    </div>
  );
};

export default RecentMentors;
