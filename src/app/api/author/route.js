import connectToDatabase from "@/dataBase/connectdb";
import PostModel from "@/dataBase/models/post";
import UserModel from "@/dataBase/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

// Helper to connect to DB
async function connectDB() {
  try {
    await connectToDatabase();
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

// GET all posts for the logged-in creator
export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: No session or email found" },
        { status: 401 }
      );
    }

    const author = await UserModel.findOne({ email: session.user.email });
    if (!author) {
      return NextResponse.json(
        { error: "Author not found" },
        { status: 404 }
      );
    }

    if (!author.isCreator) {
      return NextResponse.json(
        { error: "Permission denied: User is not a creator" },
        { status: 403 }
      );
    }

    const posts = await PostModel.find({ author: author._id })
      .sort({ createdAt: -1 }) // newest first
      .lean();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}


