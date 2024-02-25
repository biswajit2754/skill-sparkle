import React from "react";
import WellcomeBanner from "./_components/WellcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";

function Courses() {
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
      {/* Left Container */}
      <div className=" col-span-3">
            {/* Banner */}

          <WellcomeBanner/> 

          {/* Cources list section  */}

          <CourseList/>
      </div>
      {/* Right Container */}
      <div className=" p-5 bg-white rounded-xl">
          <SideBanner/>
      </div>
    </div>
  );
}

export default Courses;
