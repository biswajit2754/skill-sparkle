"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';
import { useUser } from '@clerk/nextjs';
function CoursePreview({params}) {
  const{user}=useUser();
  const [courseInfo,setCourseInfo]=useState();
  const [isUserAlreadyEnrolled,setIsUserAlreadyEnrolled]=useState();
    useEffect(()=>{
      params&&getCourseInfoById();
    },[params])


    useEffect(()=>{
      courseInfo&&user&&checkUserEnrolledToCourse();
    },[courseInfo,user])
    /*
     used to get Course Info by Slug/Id name
    */

     const getCourseInfoById=()=>{
         GlobalApi.getCourseById(params?.courseId).then(resp=>{
            setCourseInfo(resp?.courseList);
     })
      
    }
    /**
     * To Check user already enrolled to course
     */
    const checkUserEnrolledToCourse=()=>{
      GlobalApi.checkEnrolledToCourse(courseInfo.slug,user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        console.log(resp)
          if(resp?.userEnrollCourses)
          {
            setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
          }
        })
    }
  return courseInfo&& (
    <div className=' grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>

        {/* Title Video, Description */}
        <div className=' col-span-2 bg-white p-3'>
            <CourseVideoDescription courseInfo={courseInfo}/>
        </div>

        {/* Course Content */}
        <div>
          <CourseEnrollSection courseInfo={courseInfo}
          isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>

          <CourseContentSection courseInfo={courseInfo} />
        </div>
    </div>
  )
}

export default CoursePreview