export let feedbacks=[
    {
        id:1,
        message:"Nice app!"
    }
];

export function GET(){
    return Response.json(feedbacks);
};


export async function POST (request:Request){
    const body= await request.json();
    const date=new Date();
    const newFeedback={
        id:date.getMilliseconds(),
        message:body.message,
    }

    feedbacks.push(newFeedback);

    return Response.json(feedbacks);
} ;

