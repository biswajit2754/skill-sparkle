import Image from 'next/image'
import React from 'react'

function WellcomeBanner() {
  return (
    <div className=" flex gap-5 items-center bg-white rounded-xl p-5">
        <Image src='/panda.jpg' alt='panda' width={100} height={100}/>

        <div>
            <h2 className=" font-bold text-[27px]">Wellcome to <span className=" text-primary">Skill Sparkle</span></h2>
            <h2 className=' text-gray-500'>Explore, Learn and read all the cources</h2>
        </div>
    </div>
  )
}

export default WellcomeBanner