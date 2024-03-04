"use client";
import React, { useState } from "react";
import SideBanner from "../courses/_components/SideBanner";
import WelcomeBannerDashboard from "../dashboard/__components/WelcomeBannerDashboard";
import { useUser } from "@clerk/nextjs";
import SubscriptionBanner from "./___components/SubscriptionBanner";
import { Button } from '@/components/ui/button'
import axios from "axios";
import Script from "next/script";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function Membership() {

  const [subscriptionId, setSubscriptionId]=useState(null)
  const [loder,setLoder]=useState(false);
  const { user } = useUser(); 
  /**
   * Create Subscription Id
   * @param {*} planId 
   */



  const createSubscription=async(planId)=>{
    axios.post("/api/create-subscription",JSON.stringify({
      plan_id:planId
    })).then(resp=>{
      console.log(resp.data)
        setSubscriptionId(resp.data.id)
        makePayment();
    })
  }

  const makePayment=()=>{
    const options={
      key:process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
      subscription_id:subscriptionId,
      name:'Skill Sparkle',
      description:'Skill Sparkle Pro Membership',
      image:'https://drive.google.com/drive/folders/1uuOnp6cBmY0J4Q6XvixwMfdRVeOv8X39?usp=sharing',
      handler:async(resp)=>{
        console.log(resp)
        if (resp) {
          addNewMember(resp?.razorpay_payment_id)
        }
      },
      theme:{
        color:'#7D41E1'
      }

    }

    const rzp=new window.Razorpay(options);
    rzp.open();
  } 
  
  const addNewMember=(paymentId)=>{
    GlobalApi.addNewMember(user.primaryEmailAddress.emailAddress,
      paymentId).then(resp=>{
        console.log(resp);
        if (resp) {
          toast('Payment Successfull!');
        }
      },(error)=>{
        toast('Some Error Happend');
      })
  }

  
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-4 p-5 gap-5 ">

      <Script
      id="razorpay-checkout-js"
       src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className=" col-span-3">
        {/* Banner */}

        <SubscriptionBanner user={user} />
        {/* Subscription card */}
        <div className="flex justify-around items-center flex-wrap mt-3">
          {/* Use PlanCard component for each plan */}
          <div
    className={`bg-white border  rounded-xl shadow-md dark:bg-gray-800 dark:text-white p-10 transition-all transform hover:scale-105 w-full md:w-1/2 lg:w-2/5  flex flex-col items-center justify-center gap-4`} 
     /* Added dark mode support */
  >
    <h1 className="text-2xl font-semibold mb-2">Monthly</h1>

    {/* Price with discount badge (optional) */}
    <div className="flex items-center gap-2">
      <h1 className="text-3xl font-bold">10₹/<sub>Month</sub></h1>
    </div>

    <ul className="list-none space-y-2 text-center mt-4">
    <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Access To All Courses
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Free Source Code
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Free App Membership
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Email & Instagram DM Support
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-20 ml-12 pt-6 rounded-xl">
      <Button onClick={()=>createSubscription('plan_NhOi5jiz1PnLfA')}>Get Started</Button>
      </li>
    </ul>
        
  </div>


         <div
    className={`bg-white border rounded-xl shadow-md dark:bg-gray-800 dark:text-white p-10 transition-all transform hover:scale-105 w-full md:w-1/2 lg:w-2/5  flex flex-col items-center justify-center gap-4`}
     /* Added dark mode support */>
    <h1 className="text-2xl font-semibold mb-2">Yearly</h1>

    {/* Price with discount badge (optional) */}
    <div className="flex items-center gap-2">
      <h1 className="text-3xl font-bold">5₹/<sub>Month</sub></h1>
    </div>

    <ul className="list-none space-y-2 text-center mt-4">
    <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Access To All Courses
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Free Source Code
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Free App Membership
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-200">
        ✅ Email & Instagram DM Support
      </li>
      <li className="flex items-center text-gray-700 dark:text-gray-20 ml-12 pt-6 rounded-xl">
      <Button onClick={()=>createSubscription('plan_NhOitEPTJUlu2j')}>Get Started</Button>
      </li>
    </ul>
        
  </div>
        </div>
      </div>

      {/* Right Container */}
      <div className=" p-5 bg-white rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
}

export default Membership;

// npm i razorpay
// npm i axios