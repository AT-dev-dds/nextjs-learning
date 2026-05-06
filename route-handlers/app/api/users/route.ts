 let users=[
    {
    name:"Sunil Pal",
    age:24
  },
  {
    name:"Ramesh",
    age:26
  }
  ]

export function GET() {

  return Response.json(users);
};


export async function POST(request:Request){
const body=await request.json();

console.log("Received ",body);

users.push({
  name:body.name,
  age:0,
})

return Response.json({
  message:"User added"
});
}