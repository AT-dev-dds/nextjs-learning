
import client from '@/lib/mongodb'

export async function GET(){
    await client.connect();

    const db= client.db("feedbackDB");

    const feedbacks= db.collection("feedbacks").find().toArray();

    return Response.json(feedbacks)
}