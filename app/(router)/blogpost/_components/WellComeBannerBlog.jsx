"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WellcomeBannerBlog() {
  const { user } = useUser();
  return (
    <div className=" flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/panda.jpg" alt="panda" width={100} height={100} />

      <div>
        <h2 className=" font-bold text-[25px]">
          Welcome to the latest news!...{" "}
          <span className=" text-primary">{user?.firstName}</span>
        </h2>
        <h5 className=" text-gray-500 text-[14px]">
          Staying in touch with the most relevant news in the IT industry
          involves actively engaging with a variety of sources to ensure a
          comprehensive understanding of current trends, advancements,
          challenges, and opportunities within the field.
        </h5>
      </div>
    </div>
  );
}

export default WellcomeBannerBlog;
