import React from 'react'
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';

function CourseVideoDescription({courseInfo}) {
  return (
    
    <div>
      <h2 className=' text-[20px] font-semibold'>{courseInfo?.name} </h2>
      <h2 className=' text-gray-500 text-[14px] mb-3'>{courseInfo?.author} </h2>


      {/* video player */}
      <VideoPlayer videoUrl={courseInfo?.chapter?.[0]?.video?.url}/>

      {/*Description */}
      <h2 className='mt-5 text-[17px] font-semibold'>About This Course</h2>
        <Markdown className='text-[12px] font-bold mt-2 leading-7'>{courseInfo.description}</Markdown>
    </div>
  )
}

export default CourseVideoDescription