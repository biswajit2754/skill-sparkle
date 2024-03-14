"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);
  //fetch Books List
  const getAllBooks = () => {
    GlobalApi.getBookList().then((resp) => {
      const data = resp?.bookLists;
      setBookList(data);
    });
  };
  return (
    <div className=" p-5 bg-white rounded-lg mt-5">
      {/* Title and filter */}
      <div className=" flex items-center justify-between ">
        <h2 className=" text-[20px] font-bold text-primary">All Books</h2>
      </div>
      {/* Display Course list */}

      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {bookList?.length > 0
          ? bookList.map((item, index) => (
              <Link key={index} href={"/book-preview/" + item.slug}>
                <div key={index}>
                  <BookItem book={item} />
                </div>
              </Link>
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
  );
}

export default BookList;
