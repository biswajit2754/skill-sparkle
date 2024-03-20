import React from 'react'

function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-white">
  <img
    src="https://imgs.search.brave.com/A-T-3u3TPKDwlyrDRDawr71UCQWHvDMWOkJe6JyhWmM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI1LzMzLzc0/LzM2MF9GXzEyNTMz/NzQxM194STlFMFVa/TkZzeldnZGhLV0VK/SmZDREN0bzh0Z05J/VC5qcGc"
    alt="banner"
    className="h-64 w-full object-cover"
  />

  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Sorry to say that, We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="/courses"
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>
  )
}

export default NotFound