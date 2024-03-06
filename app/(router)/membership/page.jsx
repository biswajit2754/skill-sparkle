"use client";
import React, { useContext, useState } from "react";
import SideBanner from "../courses/_components/SideBanner";
import { useUser } from "@clerk/nextjs";
import SubscriptionBanner from "./___components/SubscriptionBanner";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Script from "next/script";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";
import { UserMemberContext } from "@/app/_context/UserMemberContext";
import Image from "next/image";

function Membership() {
  const { isMember, setIsMember } = useContext(UserMemberContext);
  const [subscriptionId, setSubscriptionId] = useState(null);
  const [loder, setLoder] = useState(false);
  const { user } = useUser();
  
  /**
   * Create Subscription Id
   * @param {*} planId
   */

  const createSubscription = async (planId) => {
    axios
      .post(
        "/api/create-subscription",
        JSON.stringify({
          plan_id: planId,
        })
      )
      .then((resp) => {
        console.log(resp.data);
        setSubscriptionId(resp.data.id);
        makePayment();
      });
  };

  const makePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
      subscription_id: subscriptionId,
      name: "Skill Sparkle",
      description: "Skill Sparkle Pro Membership",
      image:
        "https://drive.google.com/drive/folders/1uuOnp6cBmY0J4Q6XvixwMfdRVeOv8X39?usp=sharing",
      handler: async (resp) => {
        console.log(resp);
        if (resp) {
          addNewMember(resp?.razorpay_payment_id);
        }
      },
      theme: {
        color: "#7D41E1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const addNewMember = (paymentId) => {
    GlobalApi.addNewMember(
      user.primaryEmailAddress.emailAddress,
      paymentId
    ).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          toast("Payment Successfull!");
        }
      },
      (error) => {
        toast("Some Error Happend");
      }
    );
  };
  const [dateTime, setDateTime] = useState(new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }));

  return (
    <div className=" grid  grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      ></Script>

      <div className=" col-span-3">
        {/* Banner */}

        <SubscriptionBanner user={user} />
        {/* Subscription card */}
        {!isMember && (
          <div className="flex justify-around items-center flex-wrap mt-3">
            {/* Use PlanCard component for each plan */}
            <div
              className={`bg-white border  rounded-xl shadow-md dark:bg-gray-800 dark:text-white p-10 transition-all transform hover:scale-105 w-full md:w-1/2 lg:w-2/5  flex flex-col items-center justify-center gap-4`}
              /* Added dark mode support */
            >
              <h1 className="text-2xl font-semibold mb-2">Monthly</h1>

              {/* Price with discount badge (optional) */}
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">
                  10₹/<sub>Month</sub>
                </h1>
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
                  <Button
                    onClick={() => createSubscription("plan_NhOi5jiz1PnLfA")}
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </div>

            <div
              className={`bg-white border rounded-xl shadow-md dark:bg-gray-800 dark:text-white p-10 transition-all transform hover:scale-105 w-full md:w-1/2 lg:w-2/5  flex flex-col items-center justify-center gap-4`}
              /* Added dark mode support */
            >
              <h1 className="text-2xl font-semibold mb-2">Yearly</h1>

              {/* Price with discount badge (optional) */}
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">
                  5₹/<sub>Month</sub>
                </h1>
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
                  <Button
                    onClick={() => createSubscription("plan_NhOitEPTJUlu2j")}
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {isMember && (
          <div className=" m-5">
            <article className="rounded-xl border-2 border-gray-100 bg-white">
              <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" className="block shrink-0">
                  <Image src="/premium.jpeg" alt="premium" width={100} height={100} className="size-14 rounded-lg object-cover"/>
                  
                </a>

                <div>
                  <h1 className=" font-bold sm:text-lg">
                    <a href="#" className="hover:underline text-[27px]">
                      Premium User Card
                    </a>
                  </h1>

                  <p className="line-clamp-3 text-sm text-gray-700 mt-3">
                  <h2>User ID: {user?.id} </h2>
                    <h2>Name : {user?.fullName}</h2>
                    <h2>Email : {user?.primaryEmailAddress.emailAddress}</h2>
                    
                  </p>

                  <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                      

                      <p className="text-xs">{dateTime} </p>
                    </div>

                    <span className="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>

                    <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                      Povided by 
                      <a
                        href="#"
                        className="font-medium underline hover:text-gray-700"
                      >
                        {" "}Skill Sparkle
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="text-[10px] font-medium sm:text-xs">
                    @Member
                  </span>
                </strong>
              </div>
            </article>
          </div>
        )}
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
