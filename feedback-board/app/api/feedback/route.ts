import client from '@/lib/mongodb'

// export let feedbacks=[
//     {
//         id:1,
//         message:"Nice app!"
//     }
// ];

export async function GET(){
    await client.connect();

    const db= client.db("feedbackDB");

    const feedbacks= await db.collection("feedbacks").find().toArray();

    return Response.json(feedbacks);
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