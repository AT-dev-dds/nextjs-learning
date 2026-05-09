import { connectDB } from "@/lib/mongoose";
import Feedback from "@/models/feedback";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await connectDB();

  await Feedback.findByIdAndDelete(id);

  return Response.json({ message: "Deleted Successfully!!" });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();

  await connectDB();

  const updated = await Feedback.findByIdAndUpdate(
    id,
    {
      message: body.message,
    },
    {
      new: true,
    },
  );

  return Response.json(updated);
}
