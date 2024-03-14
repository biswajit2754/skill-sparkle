import React from 'react'
import SideBanner from '../courses/_components/SideBanner'
import WellcomeBannerBooks from './_components/WellcomeBannerBooks'
import BookList from './_components/BookList'
import CourseList from '../courses/_components/CourseList'

function Books() {
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
      {/* Left Container */}
      <div className=" col-span-3">
            {/* Banner */}

          <WellcomeBannerBooks/> 

          {/* Books list section  */}
            <BookList/>
      </div>
      {/* Right Container */}
      <div className=" p-5 bg-white rounded-xl">
          <SideBanner/>
      </div>
    </div>
  )
}

export default Books