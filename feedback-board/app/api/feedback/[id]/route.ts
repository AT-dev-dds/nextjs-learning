
import client from '@/lib/mongodb'
import { ObjectId } from 'mongodb';


export async function DELETE(_request:Request,{params}:{params:Promise<{id:string}>}){

  const {id}=await params;

  await client.connect();

  const db= client.db("feedbackDB");

  const result= await db.collection("feedbacks").deleteOne({
    _id: new ObjectId(id),
  });

  return Response.json({message:"Deleted Successfully!!",result});

}






export async function PUT(request:Request,{params}:{params:Promise<{id:string}>}){
  
  const {id}=await params;
  const body=await request.json();

  await client.connect();

  const db=client.db("feedbackDB");

   const updated= await db.collection("feedbacks").updateOne({
    
      _id:new ObjectId(id),
    },
    {
      $set:{
        message:body.message
      }
    },
   );

   return Response.json({message:"Feedback Updated",updated});
}





