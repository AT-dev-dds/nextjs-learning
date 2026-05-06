import { revalidatePath } from "next/cache";

export default function page() {
  async function handleSubmit(formdata: FormData) {
    "use server";

    const name = formdata.get("name");

    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    console.log("API CALLED");
    revalidatePath("/users");
  }
  return (
    <>
      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
