import AddToCart from "../components/AddToCart";

type Product={
    id:number,
    title:string,
  
};

async function getProduct(): Promise<Product[]> {

    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();

}



export default async function ProductPage() {

    const products= await getProduct();

  return (
    <>
    <h3>Products server component</h3>

    <div>
        {
            products.map((product)=><div key={product.id} >
                <h3>Title : {product.title}</h3>
                <br/>
                <AddToCart/>
               

            </div>)
        }
    </div>
    </>
  )
}
