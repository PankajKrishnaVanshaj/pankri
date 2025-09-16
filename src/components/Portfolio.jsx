import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 transition hover:shadow-xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Pankaj KrishnaVanshaj
          </h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            Full-Stack Developer & Blogger
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a passionate developer who loves crafting scalable web
            applications and sharing knowledge through educational content. My
            focus lies in modern web technologies like{" "}
            <span className="font-semibold text-gray-900">Next.js</span>,{" "}
            <span className="font-semibold text-gray-900">Tailwind CSS</span>, and
            other cutting-edge JavaScript frameworks. I constantly explore new
            tools and techniques to build efficient, elegant, and user-friendly
            solutions.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/pankaj-krishnavanshaj.png"
              alt="Pankaj KrishnaVanshaj"
              width={220}
              height={220}
              className="rounded-full border-4 border-blue-500 shadow-lg"
            />
            {/* Decorative ring effect */}
            <span className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* Bottom: Skills */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
        ].map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-full shadow-sm hover:scale-105 hover:bg-blue-100 transition transform duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
