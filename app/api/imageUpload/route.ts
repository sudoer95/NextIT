import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image") as File | null;

  if (!file) {
    return new NextResponse("No file", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public", "images", fileName);
  const imageUrl = `/images/${fileName}`;

  try {
    await writeFile(filePath, buffer);
    return NextResponse.json({
      success: true,
      image_url: imageUrl || '/images/dummy1x1.png',
    });
  } catch (e) {
    return NextResponse.json
  }

}