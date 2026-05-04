
async function fetchUser(){
   
     const res= await fetch('https://jsonplaceholder.typicode.com/users',{
       cache:"no-store"
     });
     return res.json();
}


export default async function page() {

   const users=await fetchUser();


  return (
    <div>
      <h2>Dynamic mode</h2>
     
      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}