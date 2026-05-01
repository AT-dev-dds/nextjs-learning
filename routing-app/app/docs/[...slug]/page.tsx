

export default async function slug({params,}:{
    params: Promise<{slug:string[]}>
}) {

    const {slug}= await params;
  return (
    <div>
      <h2> {slug[0]+"/"+slug[2]} </h2>
    </div>
  )
}
