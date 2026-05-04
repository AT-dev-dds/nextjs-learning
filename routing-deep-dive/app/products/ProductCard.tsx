
import LikeButton from '../components/LikeButton'

type Product={
id:number,
title:string
}

type Props={
  product:Product
}

export default function ProductCard({product}:Props) {
  return (
   <>
    <div>{product.title}</div>
   <LikeButton/>
   </>
  )
}
