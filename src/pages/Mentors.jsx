import React from "react";
import NavBar from "../components/NavBar";
import RecentMentors from "../SmallComp/RecentMentors";
import MentorsAll from "../SmallComp/MentorsAll";

const Mentors = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <NavBar />
      <RecentMentors />
      <MentorsAll />
    </div>
  );
};

export default Mentors;
