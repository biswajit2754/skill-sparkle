import React from 'react'
import SideBanner from '../courses/_components/SideBanner'
import BlogList from './_components/BlogList'
import WellComeBannerBlog from './_components/WellComeBannerBlog'


function BlogPost() {
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
      {/* Left Container */}
      <div className=" col-span-3 ">
        <WellComeBannerBlog/>

          {/* Blog list section  */}
        <BlogList/>
         
      </div>
      {/* Right Container */}
      <div className=" p-5 bg-white rounded-xl">
          <SideBanner/>
      </div>
    </div>
  )
}

export default BlogPost