"use client"
import About from "@/components/About";
import BlogCard from "@/components/BlogCard";
import MyApps from "@/components/MyApps";
import { BlogPosts } from "@/components/TechReview";
import Skills from "@/components/Skills";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white">
      <div className="mb-10">
        <About />
      </div>

      {/* My Skills & Projects section */}
      {/* <div className="mt-10">
        <div className="flex items-center justify-center text-2xl md:text-3xl font-extrabold text-gray-800">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 px-2 bg-white rounded-lg tracking-[2px]">
            My Skills & Projects
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-10 space-y-10 md:space-y-0 md:space-x-5">
          <div className="w-full md:w-1/2" id="skills">
            <Skills />
          </div>
          <div className="w-full md:w-1/2" id="projects">
            <MyApps />
          </div>
        </div>
      </div> */}

      <div className="mt-10" id="Blogs">
        <div className="flex items-center justify-center text-2xl md:text-3xl font-extrabold text-gray-800 ">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 px-4 py-1 bg-white rounded-lg tracking-[2px] shadow-primary shadow-2xl">
            My Blogs & Reviews
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="mt-10 space-y-10 md:space-y-0 md:space-x-5" >
          <BlogCard blogPosts={BlogPosts}/>
          </div>
      </div>
      <Link href={'/tech-reviews'} className="flex justify-end text-primary">Read More... </Link>
    </div>
  );
}
