
// import {feedbacks} from '../route'

// export async function DELETE(_request:Request,{params}:{params:Promise<{id:string}>}){

//    const {id}= await params;

//    const Id=parseInt(id);

//   const index=feedbacks.findIndex((f)=>f.id===Id);

//   if(index===-1){
//     return Response.json({message:"Not found"},{status:404});
//   }

//   const deleted= feedbacks.splice(index,1);

//   return Response.json({message:"Deleted Successfully!",deletedFeedback:deleted[0]});
// };


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







// export async function PUT(request:Request,{params}:{params:Promise<{id:string}>}){

//   const {id}=await params;
//   const Id=parseInt(id);

//   const body=await request.json();

//   const feedback= feedbacks.find((f)=>f.id===Id);

//   if(!feedback){
//     return Response.json({message:"Feedback not found!"},{status:404});
//   }

//   feedback.message=body.message;

//   return Response.json(feedback);
// }