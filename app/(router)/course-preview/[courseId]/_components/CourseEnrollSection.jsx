import { Button, buttonVariants } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
    const membership=false;
  return (
    <div className='p-3 text-center round-sm bg-primary'>

        
        <h2 className='text-[20px] font-bold text-white'>Enroll To The Course</h2>
        {/* user has Membership and Already Login */}
       { membership?<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now To Start Learning and Building The Project</h2>
            <button className='bg-white text-primary hover:bg-white hover:text-primary'>Enroll Now</button>
        </div>
       : <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy Membership Just $2.99 </Button>
        </div>}
        {/*About Section user Does not have Membership or not Signup/Login */}
    </div>
  )
}

export default CourseEnrollSection

