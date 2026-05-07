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
  };



 async function handleDelete(formdata:FormData){

   "use server"

   const id=formdata.get("id");

   await fetch(`http://localhost:3000/api/feedback/${id}`,{
    method:"DELETE"
   });
   revalidatePath("/feedback")
 };



 async function handleUpdate(formdata:FormData){
  "use server"

  const id=formdata.get("id");
  const message=formdata.get("message");

  await fetch(`http://localhost:3000/api/feedback/${id}`,{
    method:"PUT",
    body: JSON.stringify({message})

  });
     revalidatePath("/feedback");
     
 }

  return (
    <>
      {
        feedbacks.map((feedback:any)=><div key={feedback.id} >
          <p>{feedback.message}</p>

           <form action={handleDelete}>
            <input type="hidden" name="id" value={feedback.id} />

            <button type="submit" className="btn btn-danger text-white" >Delete</button>
           </form>

           <form action={handleUpdate} >
              <input type="hidden" name="id" value={feedback.id} />
              <input type="text" name="message" defaultValue={feedback.message} />

              <button type="submit" className="btn btn-warning" >Update</button>
           </form>

        </div>)
      }

      <form action={handleSubmit}>
        <input type="text" name="message" placeholder="Please enter feedback here !" />
       
        <button type="submit" className="btn btn-info" >Submit</button>
   
      </form>


     
    </>
  )

}
