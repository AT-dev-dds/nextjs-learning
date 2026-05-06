import { revalidatePath } from "next/cache";

async function getFeedbacks(){
  const res= await fetch("http://localhost:3000/api/feedback",
   {
     cache:"no-store",
   }
  )
return res.json();
}



export default async function page() {
  
  const feedbacks= await getFeedbacks();
  
  async function handleSubmit(formdata:FormData){
  
    "use server"

   const message=formdata.get("message");

   await fetch("http://localhost:3000/api/feedback",{
    method:"POST",
    body:JSON.stringify({message})
   });

   revalidatePath("/feedback")
  }

  return (
    <>
      {
        feedbacks.map((feedback:any)=><div key={feedback.id} >
          <p>{feedback.message}</p>
        </div>)
      }

      <form action={handleSubmit}>
        <input type="text" name="message" placeholder="Please enter feedback here !" />
        <button type="submit" >Submit</button>
      </form>
    </>
  )

}
