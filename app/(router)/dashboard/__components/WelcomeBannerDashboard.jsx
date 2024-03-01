import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard({user}) {
  return (
    <div className="bg-purple-200 rounded-sm p-5 flex gap-5 items-center">
        <Image src='/vercel.svg' alt='panda' width={100} height={100}/>

        <div>
            <h2 className="'text-[32px] font-light'">Wellcome Back,<span className="font-bold text-primary"> {user?.fullName}</span></h2>
            <h2 className='text-[16px] font-light text-gray-500'>Lets Begin Learning where you left off,<br />
            Keep it up and improve your progress</h2>
        </div>
    </div>
 )
}

export default WelcomeBannerDashboard
