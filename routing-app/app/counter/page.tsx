"use client";

import React, { useState } from 'react'

// export const metadata={
//     title:"Counter"
// }

export default function counter() {
    
    const [counter,setCounter]=useState(0);
    return(
        <div>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Increase count</button>
    </div>
  )
}
