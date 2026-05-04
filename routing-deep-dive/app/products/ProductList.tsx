import ProductCard from "./ProductCard";

type Product={
    id:number,
    title:string,
  
};

type Props={
    product:Product
}

async function getProduct(): Promise<Product[]> {

    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();

}

export default async function ProductList() {
   const products= await getProduct();
  
    return (
      <>
          {
              products.map((product)=>
                 
              (
                <ProductCard key={product.id} product={product} />
              )
                 
                 
  
              )
          }

      
      </>
    )
}
