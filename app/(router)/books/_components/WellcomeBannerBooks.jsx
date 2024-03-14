"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WellcomeBannerBooks() {
    const {user}= useUser();
  return (
    <div className=" flex gap-5 items-center bg-white rounded-xl p-5">
        <Image src='/panda.jpg' alt='panda' width={100} height={100}/>

        <div>
            <h2 className=" font-bold text-[27px]">Hyy....{' '}<span className=" text-primary">{user?.firstName}</span></h2>
            <h2 className=' text-gray-500'>The more that you read, the more things you will know. The more that you learn, the more places you'll go.</h2>
        </div>
    </div>
  )
}

export default WellcomeBannerBooks