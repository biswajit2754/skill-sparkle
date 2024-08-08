import Image from 'next/image'
import React from 'react'

function BookItem({book}) {
  return (
    <div className=" border rounded-md
     hover:shadow-md hover:shadow-purple-300 cursor-pointer ">
      <Image src={book?.banner?.url}
        width={500}
        height={150}
        alt="banner"
        className=" rounded-t-xl "
      />

      <div className=" flex flex-col gap-1 p-2">
         <h2 className=" font-medium underline">*{book.name} </h2>
      </div>

    </div>
  )
}

export default BookItem