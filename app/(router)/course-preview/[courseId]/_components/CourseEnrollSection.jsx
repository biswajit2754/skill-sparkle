import GlobalApi from '@/app/_utils/GlobalApi';
import { Button, buttonVariants } from '@/components/ui/button'
import { useEmailLink, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { toast } from "sonner"


function CourseEnrollSection({courseInfo,isUserAlreadyEnrolled}) {
    const membership=false;
    const{user}=useUser();

    const router=useRouter();
    useEffect(()=>{
      console.log("isUserAlreadyEnrolled",isUserAlreadyEnrolled)
    },[isUserAlreadyEnrolled])
    //Enroll to the Course 
    const onEnrollCourse=()=>{
      GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress).then(resp=>{
        if(resp){

          //Show Toast on Successfull Enroll
          toast("User Enroled Successful", {
            description: "User Enrolled to this Course",
          })

          //Redirect to Watch  Course
          router.push('/watch-course/'+resp.createUserEnrollCourse.id)
        }
      })
    }
  return (
    <div className='p-3 text-center round-sm bg-primary'>

        
        <h2 className='text-[20px] font-bold text-white'>Enroll To The Course</h2>
        {/* user has Membership and Already Login */}
       { user&&(membership||courseInfo.free)&&!isUserAlreadyEnrolled?<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now To Start Learning and Building The Project</h2>
            <Button className='bg-white text-primary hover:bg-white
             hover:text-primary'
             onClick={()=>onEnrollCourse()}
             >Enroll Now</Button>
        </div>
        :!user?
        <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now To Start Learning and Building The Project</h2>
            <Link href={'/sign-in'}><Button className='bg-white text-primary hover:bg-white
             hover:text-primary'>Enroll Now</Button>
             </Link>
        </div>

       : !isUserAlreadyEnrolled&&<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy Membership Just $2.99 </Button>
        </div>}
        {/*About Section user Does not have Membership or not Signup/Login */}
    
       {isUserAlreadyEnrolled&& <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>
              Continue To Watch Course Videos
              </h2>
            <Link href={'/watch-course/'+isUserAlreadyEnrolled}><Button className='bg-white text-primary hover:bg-white hover:text-primary'>Continue</Button>
            </Link>
        </div>}
    </div>
  )
}

export default CourseEnrollSection

