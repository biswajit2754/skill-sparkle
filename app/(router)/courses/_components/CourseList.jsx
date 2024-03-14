"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CourseItem from "./CourseItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [position, setPosition] = useState("all");
  const [dCourse, setDCourse] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, [position]);
  //fetch Course List
  const getAllCourses = () => {
    GlobalApi.getCourseList().then((resp) => {
      const data = resp?.courseLists;
      setCourseList(data);

      //filter paid and free courses
      const free = data.filter((d) => {
        return d.free == true;
      });
      const paid = data.filter((d) => {
        return d.free == false;
      });
      
      //set filter value
      if (position=='all') {
        setDCourse(data);
      }else if(position=='free'){
        setDCourse(free);
      }else if(position=='paid'){
        setDCourse(paid);
      }
    });
  };

  return (
    <div className=" p-5 bg-white rounded-lg mt-5">
      {/* Title and filter */}
      <div className=" flex items-center justify-between ">
        <h2 className=" text-[20px] font-bold text-primary">All Cources</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="free">Free</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="paid">Paid</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Display Course list */}

      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {courseList?.length > 0
          ? dCourse.map((item, index) => (
              <Link key={index} href={"/course-preview/" + item.slug}>
                <div key={index}>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className=" w-full h-[240px] 
               rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;

//npx shadcn-ui@latest add dropdown-menu
