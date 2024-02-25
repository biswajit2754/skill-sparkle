"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription';

function CoursePreview({params}) {

    useEffect(()=>{
        console.log(params);
    },[])
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>

        {/* Title Video, Description */}
        <div className=' col-span-2 bg-white p-3'>
            <CourseVideoDescription/>
        </div>

        {/* Course Content */}
        <div>

        </div>
    </div>
  )
}

export default CoursePreview