import React from "react";
import Profil from "../assets/Profil.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MonthlyMentors from "../SmallComp/MonthlyMentors";
import UpcomingTasks from "../SmallComp/UpcomingTasks";
import Calender from "../SmallComp/calender";
import Task from "../SmallComp/Task";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "line",
  height: 130,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};

const Overview = () => {
  return (
    <div className=" flex">
      <div className=" min-h-screen w-4/6 p-6 space-y-4 bg-[#FAFAFA]">
        {/* first section */}
        <div className=" flex justify-between">
          <div className="">
            <p class="text-[#141522] text-2xl font-semibold leading-[36px] tracking-[-0.72px]">
              Hi, Skylar Dias
            </p>
            <p class="text-[#54577A] text-base font-medium leading-[24px] tracking-[-0.32px]">
              Let's finish your task today!
            </p>
          </div>
          <div className=" flex gap-4 items-center">
            <div className="w-[52px] h-[52px]  flex justify-center items-center">
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
            </div>
            <img src={Profil} alt="" />
          </div>
        </div>

        {/* second section */}
        <div className=" flex gap-4 h-[214px]">
          <div className="w-1/6  p-4 rounded-[10px] bg-[#141522]">
            <h3 className="text-white font-inter text-[20px] font-semibold leading-[1.5] tracking-[-0.32px]">
              Running Task
            </h3>
            <h2 className="text-white font-semibold text-[32px] leading-[150%] tracking-[-0.96px] font-plus-jakarta-sans">
              65
            </h2>
            <div className="flex gap-4 items-center mt-4">
              <div style={{ width: 70, height: 70 }}>
                <CircularProgressbar
                  value={75} // percentage value
                  text={`${75}%`} // text in the center
                  styles={{
                    path: {
                      stroke: "#4256D0", // color of the progress bar
                    },
                    text: {
                      fill: "#fff", // color of the text
                      fontSize: "16px", // font size of the text
                      fontFamily: "Inter", // font family
                    },
                    trail: {
                      stroke: "#e6e6e6", // color of the background circle
                    },
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[20px] leading-[150%] tracking-[-0.4px] font-[Plus Jakarta Sans]">
                  100
                </h3>
                <p className="text-[#8E92BC] font-medium text-[14px] leading-[150%] tracking-[-0.28px] font-[Plus Jakarta Sans]">
                  Tasks
                </p>
              </div>
            </div>
          </div>
          <div className="w-5/6 border rounded-[10px] space-y-4 p-4 bg-[#F5F5F7]">
            <div className=" flex justify-between">
              <h3 className="text-[#141522] font-semibold text-[16px] leading-[150%] tracking-[-0.32px] font-[Plus Jakarta Sans]">
                Activity
              </h3>
              <div className="flex items-center gap-3">
                <h3 className="text-[#141522] text-center font-medium text-[12px] leading-normal tracking-[-0.24px] font-[Plus Jakarta Sans]">
                  This Week
                </h3>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="vuesax/linear/arrow-down">
                    <g id="arrow-down">
                      <path
                        id="Vector"
                        d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                        stroke="#54577A"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className=" bg-white  rounded-[10px] w-full">
              <Chart {...chartConfig} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[#141522] font-semibold text-[24px] leading-[150%] tracking-[-0.72px] font-[Plus Jakarta Sans]">
              Monthly Mentors
            </h3>
            <div className="flex gap-2">
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
          </div>
          <div className="flex gap-4">
            <MonthlyMentors />
            <MonthlyMentors />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[#141522] font-semibold text-[24px] leading-[150%] tracking-[-0.72px] font-[Plus Jakarta Sans]">
              Upcoming Task
            </h3>
            <div className="flex gap-2">
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
          </div>
          <div className="flex gap-4">
            <UpcomingTasks />
            <UpcomingTasks />
          </div>
        </div>
      </div>

      <div className="border bg-[#F5F5F7] space-y-5 p-6 w-2/6">
        <Calender />
        <Task />
      </div>
    </div>
  );
};

export default Overview;
