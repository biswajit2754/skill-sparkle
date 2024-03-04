import Image from 'next/image'
import React from 'react'

function SubscriptionBanner({user}) {
  return (
    <div className="bg-purple-100  rounded-lg p-5 flex gap-5 items-center">
        <Image src='/dog.png' alt='dog' width={100} height={100}/>

        <div>
            <h2 className=" font-bold text-[32px]">Hello,<span className="font-bold text-primary"> {user?.fullName}</span></h2>
            <h2 className='text-[16px] font-light text-gray-500'>To Watch Paid Courses Buy Any Plan,<br />
             And Become A Member Of Skill Sparkle </h2>
        </div>
    </div>
  )
}

export default SubscriptionBanner