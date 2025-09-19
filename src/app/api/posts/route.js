import connectToDatabase from "@/dataBase/connectdb";
import PostModel from "@/dataBase/models/post";
import UserModel from "@/dataBase/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

// ✅ Increase request size limit (default is 1MB)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb", // adjust as needed
    },
  },
};

// Helper to connect to DB
async function connectDB() {
  try {
    await connectToDatabase();
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const { title, slug, excerpt, content } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const normalizedSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: No session or email found" },
        { status: 401 }
      );
    }

    const author = await UserModel.findOne({ email: session.user.email });
    if (!author) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    if (!author.isCreator) {
      return NextResponse.json(
        { error: "Permission denied: User is not a creator" },
        { status: 403 }
      );
    }

    const existingPost = await PostModel.findOne({ slug: normalizedSlug });
    if (existingPost) {
      return NextResponse.json(
        { error: "Slug already exists, please choose another" },
        { status: 409 }
      );
    }

    const newPost = await PostModel.create({
      title,
      slug: normalizedSlug,
      excerpt,
      content,
      author: author._id,
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const posts = await PostModel.find({}).sort({ createdAt: -1 });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
