"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

function BlogList() {
    const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);
  //fetch Books List
  const getAllBlogs = () => {
    GlobalApi.getBlogList().then((resp) => {
      const data = resp?.blogPosts;
      setBlogList(data);
    });
  };
  return (
    <div className=" p-5 bg-white rounded-lg mt-5">

      {/* Display Blog list */}

      <div>
        {blogList?.length > 0
          ? blogList.map((item, index) => (
                <div key={index}>
                  <BlogCard post={item} />
                </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className=" w-full h-[240px] 
             rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  )
}

export default BlogList