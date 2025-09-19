import connectToDatabase from "@/dataBase/connectdb";
import PostModel from "@/dataBase/models/post";
import UserModel from "@/dataBase/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

// ✅ Increase request size limit (default is 1MB)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb", // adjust as needed
    },
  },
};

// Connect to DB
async function connectDB() {
  try {
    await connectToDatabase();
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

// GET  (param can be ID or slug)
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { param } = await params; 
    let post = null;

    // Check if param looks like a MongoDB ObjectId
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(param);

    if (isObjectId) {
      post = await PostModel.findById(param);
    } else {
      post = await PostModel.findOne({ slug: param });  // <--- looks for slug in DB
    }

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}


// 📌 UPDATE post
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { param } = await params; 
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
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const post = await PostModel.findById(param);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const author = await UserModel.findOne({ email: session.user.email });
    if (!author || post.author.toString() !== author._id.toString()) {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // ✅ Exclude current post from slug uniqueness check
    const existingPost = await PostModel.findOne({
      slug: normalizedSlug,
      _id: { $ne: param },
    });
    if (existingPost) {
      return NextResponse.json(
        { error: "Slug already exists, please choose another" },
        { status: 409 }
      );
    }

    post.title = title;
    post.slug = normalizedSlug; // also update slug properly
    post.excerpt = excerpt;
    post.content = content;
    await post.save();

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// 📌 DELETE post
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { param } = await params; 

    // Validate session
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const post = await PostModel.findById(param);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const author = await UserModel.findOne({ email: session.user.email });
    if (!author || post.author.toString() !== author._id.toString()) {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    await PostModel.findByIdAndDelete(param);
    return NextResponse.json(
      { success: true, message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
