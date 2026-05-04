"use client"

import { useState } from "react"


export default function LikeButton() {

    const [like,setLike]=useState(0);

  return (
    <>
    
    <button onClick={()=>setLike(like+1)}>Like :{like}</button>
    </>
  )
}
