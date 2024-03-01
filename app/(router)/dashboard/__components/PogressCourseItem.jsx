"use client"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from 'react'

function PogressCourseItem(course) {
    const getTotalCompletedChapterPerc=(item)=>{
        // perc=(getTotalCompletedChapter/totalChapter)*100
        const perc=(item.completedChapter?.length/item?.courseList?.chapter?.length)*100
        return perc
    }
  return (
    <Link href={"/course-preview/"+course?.course?.courseList?.slug}>
    <div className=" border rounded-md
     hover:shadow-md hover:shadow-purple-300 cursor-pointer ">
      <Image src={course?.course?.courseList?.banner?.url}
        width={500}
        height={150}
        alt="banner"
        className=" rounded-t-md h-[130px] object-cover"
      />

      <div className=" flex flex-col gap-1 p-2">
         <h2 className=" font-medium">{course?.course?.courseList?.name} </h2>
         <h2 className=" text-[12px] text-gray-400">{course?.course?.courseList?.author} </h2>
         <h2 className="text-[12px] text-gray-400 mt-3">{getTotalCompletedChapterPerc(course.course)}% 
         <span className="float-right">{course.course.completedChapter?.length}/{course.course?.courseList?.chapter?.length} Chapters</span></h2>
         <Progress value={getTotalCompletedChapterPerc(course.course)} className="h-[7px]"/>
      </div>

    </div>
    </Link>
  )
}

export default PogressCourseItem



// npx shadcn-ui@latest add progress
