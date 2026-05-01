import {notFound} from 'next/navigation'


export default async function reviewId({params,}:{
    params: Promise<{reviewId:string,productId:string}>
}) {
    const {productId,reviewId}= await params;

    if(parseInt(reviewId) > 1000){
          notFound();
    }
  return (
    <div>
      <h3>Review : {reviewId} for product : {productId}</h3>
    </div>
  )
}
