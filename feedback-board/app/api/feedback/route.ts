import client from '@/lib/mongodb'



export async function GET(){
    await client.connect();

    const db= client.db("feedbackDB");

    const feedbacks= await db.collection("feedbacks").find().toArray();


    const formatted= feedbacks.map((f)=>({
        ...f,_id:f._id.toString(),
    }));

    return Response.json(formatted);
};


export async function POST(request:Request){

    const body= await request.json();
    await client.connect();

    const db=client.db("feedbackDB");

    const result= await db.collection("feedbacks").insertOne({
        message:body.message,
    });


    return Response.json(result);
}