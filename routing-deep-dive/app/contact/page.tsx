

export default function page() {

    async function handleSubmit(formdata:FormData){
     "use server";

     const name=formdata.get("name");
     const email=formdata.get("email");
     console.log(`Name: ${name}`);
     console.log(`Email: ${email}`);
    }


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
