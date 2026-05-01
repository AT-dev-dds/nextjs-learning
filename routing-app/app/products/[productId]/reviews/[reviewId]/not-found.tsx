"use client"

import {usePathname} from 'next/navigation'


export default function notFound(){

    const pathname=usePathname();
    const reviewId= pathname.split("/")[4];

    const productId=pathname.split("/")[2];
    return (
        <div>
            <h3>Review {reviewId}  for product {productId} not found</h3>
        </div>
    )
}