"use server";

export default async function handleSubmit(formdata:FormData) {
    
     const name=formdata.get("name");
     const email=formdata.get("email");
     console.log(`Name: ${name}`);
     console.log(`Email: ${email}`);
    }

