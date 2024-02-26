import React from 'react'
import VideoPlayer from './VideoPlayer';

function CourseVideoDescription({courseInfo}) {
  return (
    
    <div>
      <h2 className=' text-[20px] font-semibold'>{courseInfo?.name} </h2>
      <h2 className=' text-gray-500 text-[14px] mb-3'>{courseInfo?.author} </h2>


      {/* video player */}
      <VideoPlayer videoUrl={courseInfo?.chapter?.[0]?.video?.url}/>
    </div>
  )
}

export default CourseVideoDescription