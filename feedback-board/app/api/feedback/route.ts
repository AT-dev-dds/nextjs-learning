
import { connectDB } from '@/lib/mongoose';
import Feedback from '@/models/feedback'



export async function GET(){
    await connectDB();

    const feedbacks= await Feedback.find().lean();

    return Response.json(feedbacks);
};


export async function POST(request:Request){

 try{
    const body= await request.json();

    await connectDB();

    const feedback= await Feedback.create({
        message:body.message,
    },
    
)

    return Response.json(feedback);
 }catch(err:any){
    return Response.json({
        message:err.message
    },
{
    status:400,
})
 }
}