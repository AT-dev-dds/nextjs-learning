
import {feedbacks} from '../route'

export async function DELETE(_request:Request,{params}:{params:Promise<{id:string}>}){

   const {id}= await params;

   const Id=parseInt(id);

  const index=feedbacks.findIndex((f)=>f.id===Id);

  if(index===-1){
    return Response.json({message:"Not found"},{status:404});
  }

  const deleted= feedbacks.splice(index,1);

  return Response.json({message:"Deleted Successfully!",deletedFeedback:deleted[0]});
};





export async function PUT(request:Request,{params}:{params:Promise<{id:string}>}){

  const {id}=await params;
  const Id=parseInt(id);

  const body=await request.json();

  const feedback= feedbacks.find((f)=>f.id===Id);

  if(!feedback){
    return Response.json({message:"Feedback not found!"},{status:404});
  }

  feedback.message=body.message;

  return Response.json(feedback);
}