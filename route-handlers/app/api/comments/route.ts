import {comments} from './data'

export function GET(){
    return Response.json(comments)
};

export async function POST(request:Request){

    const comment=await request.json();

    const newComment={
        id:comments.length+1,
        comment:comment.text
    };

   comments.push(newComment)

    return new Response(JSON.stringify(newComment),{
        headers:{"content-type":"application/json"},
        status:201
    })
}