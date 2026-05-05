
async function getUser(){
    const res= await fetch("http://localhost:3000/api/users");
    return res.json();
}


export default async function DisplayUser() {

    const users=await getUser();
  return (
   <>
   {
    users.map((u:any)=><div>
       <h2>{u.name}</h2>
       <p>{u.age}</p>
       <br/>
    </div>)
   }
   </>
  )
}
