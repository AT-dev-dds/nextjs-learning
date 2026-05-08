import client from '@/lib/mongodb'

export async function GET(){
    await client.connect();

    return Response.json({message:"MongoDB connected successfully!"});
}