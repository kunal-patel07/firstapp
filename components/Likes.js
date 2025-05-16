"use client"

import { useState } from "react";

const Likes = () => {
    //  await new Promise ((resolve)=>setTimeout(resolve,6000))
let [value , setValue]=useState(0)
  return (
    <button 
      onClick={() => setValue(value + 1)}
      className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors duration-200"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
          clipRule="evenodd" 
        />
      </svg>
      <span className="font-medium">{value} likes</span>
    </button>
  )
}

export default Likes;
