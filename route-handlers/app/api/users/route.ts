export function GET() {

  const users=[
    {
    name:"Sunil Pal",
    age:24
  },
  {
    name:"Ramesh",
    age:26
  }
  ]
  return Response.json(users);
};


export async function POST(request:Request){
const body=await request.json();

console.log("Received ",body);

return Response.json({
  message:"Data received"
});
}