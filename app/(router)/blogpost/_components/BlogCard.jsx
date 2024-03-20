import { Image } from 'lucide-react'
import React from 'react'

function BlogCard({post}) {
  return (
    <article className="flex bg-white transition hover:shadow-xl">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>Date -:</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>{post?.tarikh}</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt=""
      src={post?.image?.url}
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">   
        <h1 className="font-bold uppercase  ml-1 text-gray-900 text-[10px]">
        Post By- <span className='text-[25px] underline text-purple-800'>{post?.name}</span> 
        </h1>
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          {post?.titel}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
        {post?.shortDesc}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href={post?.url}
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Read More..
      </a>
    </div>
  </div>
</article>
  )
}

export default BlogCard