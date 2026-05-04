import LikeButton from "../components/LikeButton";

type Users={
    id:number,
    name:string,
    email:string
}

async function getUsers(): Promise<Users[]> {
  console.log("Fetching users!....");
  //  await new Promise((res) => setTimeout(res, 3000)); 
 const res= await fetch('https://jsonplaceholder.typicode.com/users',{
  //  cache:"no-store"

  next: {revalidate:10}
 });
  return res.json();
}

export default async function fetchUser(){

    const users=await getUsers();

    return (
        <>
        
        {
          users.map((user)=><div key={user.id}>
            <h2>Username : {user.name}</h2>
     
            <h4>Email : {user.email}</h4>

            <LikeButton/>

             <br /> <br />
                  
          </div>)
        }

        </>
    )
}