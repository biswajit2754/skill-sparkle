"use client";
import { useUser } from "@clerk/nextjs";
import {
  BookOpen,
  BadgeIcon,
  Mail,
  LayoutDashboard,
  BookAudioIcon,
  PenLineIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function SideNav() {
  const { user } = useUser();
  const menu = [
    {
      id: 6,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Books",
      icon: BookAudioIcon,
      path: "/books",
      auth: true,
    },
    {
      id: 3,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership",
      auth: true,
    },
    {
      id: 4,
      name: "Blog Post",
      icon:  PenLineIcon,
      path: "/blogpost",
      auth: true,
    },
    {
      id: 5,
      name: "Contact Us",
      icon: Mail,
      path: "/contact",
      auth: true,
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log("path", path);
  }, []);
  return (
    <div className="p-5 bg-white shadow-sm border h-auto  ">
      <Image src="/logo.jpg" alt="logo" width={200} height={60} />
      
      <hr className="mt-7"></hr>
      {/* Menu List*/}
      <div className=" mt-5 ">
        {menu.map(
          (item, index) =>
            item.auth && (
              <Link key={`${item.id}-${index}`} href={item?.path}>
                <div
                  className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200 
                 ${path.includes(item.path) && " bg-primary text-white"} 
                `}
                >
                  <item.icon className=" group-hover:animate-bounce " />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default SideNav;
