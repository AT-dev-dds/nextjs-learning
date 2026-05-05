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
}