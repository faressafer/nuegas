import React from "react";

import "react-circular-progressbar/dist/styles.css";

import Calender from "../SmallComp/calender";
import Task from "../SmallComp/Task";


import Main from "../components/Main";


const Overview = () => {
  return (
    <div className=" flex">
      <Main/>
      <div className="border bg-[#F5F5F7] space-y-5 p-6 w-2/6">
        <Calender />
        <Task />
      </div>
    </div>
  );
};

export default Overview;
