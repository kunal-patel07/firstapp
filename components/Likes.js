"use client"

import { useState } from "react";

const Likes = () => {
    //  await new Promise ((resolve)=>setTimeout(resolve,6000))
let [value , setValue]=useState(0)
  return (
  
    <div onClick={()=>{setValue(value + 1)} }>
      {value} likes
    </div>
  )
}

export default Likes;
