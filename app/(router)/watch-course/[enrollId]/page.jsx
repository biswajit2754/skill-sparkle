"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "../../course-preview/[courseId]/_components/CourseVideoDescription";
import CourseContentSection from "../../course-preview/[courseId]/_components/CourseContentSection";
import { toast } from "sonner";

function WatchCourse(params) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [completedChapter,setChapterCompleted]=useState([]);
  const [activeChapterIndex, setActiveChapterIndex]=useState(0);
  useEffect(() => {
    params&&user && getUserEnrolledCourseDetail();
  },[params&&user]);

  // console.log(params?.params?.enrollId)

  // get user enroll course details by id+email

  const getUserEnrolledCourseDetail = () => {
    GlobalApi.getUserEnrolledCourseDetails(
      params?.params?.enrollId,user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        setChapterCompleted(resp.userEnrollCourses[0].completedChapter)
        setCourseInfo(resp.userEnrollCourses[0].courseList);
      })
  };

  /*
  * Save Completed Chapter Id
  */
  const onChapterComplete=(chapterId)=>{
    GlobalApi.markChapterCompleted(params.params.enrollId,chapterId).then(resp=>{
      console.log(resp);
      if(resp){
        toast('Chapter Marked as Completed!');
        getUserEnrolledCourseDetail();
      }
    })
  }
  return courseInfo&&(
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Title Video, Description */}
        <div className=" col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo}
          activeChapterIndex={activeChapterIndex}
          watchMode={true}
          setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
           />
        </div>

        {/* Course Content */}
        <div>
          

          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            completedChapter={completedChapter}
            setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
          />
        </div>
      </div>
    </div>
  );
}

export default WatchCourse;
// npx shadcn-ui@latest add sonner
