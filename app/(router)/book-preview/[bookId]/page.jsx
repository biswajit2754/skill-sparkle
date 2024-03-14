"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import PageViewer from "./_components/PageViewer";

function BookPreview({ params }) {
  const { user } = useUser();
  const [bookInfo, setBookInfo] = useState();
  useEffect(() => {
    params && getBookInfoById();
  }, [params]);

  const getBookInfoById = () => {
    GlobalApi.getBookById(params?.bookId).then((resp) => {
       setBookInfo(resp?.bookList);
      // console.log(resp);
    });
  };
  return bookInfo&&(
    <div className=' grid grid-cols-1 md:grid-cols-3 p-5 gap-3 w-full '>

       <PageViewer pageImage={bookInfo?.page} name={bookInfo?.name}/>
</div>
  )
}

export default BookPreview;
