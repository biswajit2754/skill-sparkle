"use client"
import { Search, BellDot } from 'lucide-react'
import { Button } from "@/components/ui/button"
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
  const {user,isLoaded}= useUser();
  return (
    <div className="p-4 bg-white flex justify-between ">
       
        {/* Search bar */}
        <div className=" flex gap-2 border p-2 rounded-md ">
        
            <Search className='h-5 w-5'/>
            <input type='text' placeholder='Search...' className=" outline-none"/>
        </div>
        {/* Get Started Button */}
        <div className="flex items-center gap-4">
            <BellDot className="text-gray-500 hover: animate-pulse "/>
            {isLoaded&&user
            ?<UserButton afterSignOutUrl='courses'/>
            :  <Link href={'/sign-up'}>
                  <Button>Get Started</Button>
            </Link> }

        </div>
    </div>
  )
}

export default Header