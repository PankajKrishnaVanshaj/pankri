import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  const BlogPosts = [
    {
      title: "PK Blogify",
      imageUrl: "/blogify.png",
      slug: "/blogify",
      description: "A social media platform blending blogging with networking for creators.",
    },
    {
      title: "PK Facefeed",
      imageUrl: "/facefeed.png",
      slug: "/facefeed",
      description: "Connect with random users, chat, and share media in a unique social space.",
    },
    {
      title: "PK DigMark",
      imageUrl: "/digmark.png",
      slug: "/digmark",
      description: "A digital marketing toolset for boosting online presence and analytics.",
    },
    {
      title: "PK ToolsCloud",
      imageUrl: "/toolscloud.png",
      slug: "/toolscloud",
      description: "A cloud-based suite of productivity tools for teams and individuals.",
    },
    {
      title: "PK ChaSpo",
      imageUrl: "/chaspo.png",
      slug: "/chaspo",
      description: "An AI content generator for instant fan posts and summaries.",
    },
    {
      title: "PK SkillGrow",
      imageUrl: "/skillgrow.png",
      slug: "/skillgrow",
      description: "An e-learning platform to grow skills with interactive courses.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
      {BlogPosts.map((post) => (
        <div
          key={post.slug}
          className="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 hover:text-primary transition-colors duration-200">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.description}
            </p>
            <Link href={post.slug}>
              <button className="w-full bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-60">
                Discover Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;