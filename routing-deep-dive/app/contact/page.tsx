"use client"

import handleSubmit from '../actions/Form'

export default function page() {

    
  return (
   <>
   <h2>Contact form</h2>

   <form action={handleSubmit}>

     <input type="text" name="name" placeholder="Enter your name" />
     <input type="email" placeholder="Enter email" name="email" />
     <button type="submit">Submit</button>
    
   </form>
   </>
  )
}
