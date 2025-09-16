import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Discover PanKri — our mission, vision, and the passionate team behind
          the content that inspires and empowers developers worldwide.
        </p>
      </header>

      {/* About Content */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            PanKri was born from a simple idea: to make learning tech, coding,
            and creative skills accessible, practical, and inspiring. We aim to
            guide developers and enthusiasts on their journey to grow and excel
            in the ever-evolving tech world.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver high-quality tutorials, articles, and resources that
            empower developers to sharpen their skills, stay updated with modern
            technologies, and build real-world projects confidently.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become a trusted platform where developers and tech enthusiasts
            find inspiration, practical knowledge, and a supportive community to
            grow together.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/pankaj-krishnavanshaj.png"
            alt="Team"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Skills / Expertise */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
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
    </main>
  );
}
