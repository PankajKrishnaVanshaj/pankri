import React from "react";
import Image from "next/image";
import { Code2, PenTool, Sparkles } from "lucide-react";

const Portfolio = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-xl p-8 md:p-14 mb-20 overflow-hidden border border-blue-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-7">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Pankaj{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                KrishnaVanshaj
              </span>
            </h2>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <p className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Code2 className="w-7 h-7 text-blue-600" />
                Full-Stack Developer
              </p>
              <span className="text-gray-400 text-2xl hidden sm:inline">•</span>
              <p className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <PenTool className="w-7 h-7 text-purple-600" />
                Content Writer
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            I design and develop{" "}
            <span className="font-semibold text-gray-900">
              high-performance web applications
            </span>{" "}
            that scale seamlessly, while crafting{" "}
            <span className="font-semibold text-gray-900">
              clear, insightful technical content
            </span>{" "}
            that empowers developers and teams.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            From pixel-perfect UIs with React & Next.js to robust backend
            systems with Node.js and NestJS — I bridge creativity and
            engineering. When I'm not coding, I write in-depth guides and
            articles that simplify complex concepts.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-700 font-medium italic">
              Turning ideas into production-ready solutions — one line at a
              time.
            </span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-700"></div>

            <div className="relative">
              <Image
                src="/pankaj-krishnavanshaj.webp"
                alt="Pankaj KrishnaVanshaj"
                width={320}
                height={320}
                className="rounded-full border-8 border-white shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Slow pulse ring using Tailwind */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400/40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "Git & GitHub",
        ].map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full shadow-md border border-blue-200/50 hover:shadow-lg hover:scale-105 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
