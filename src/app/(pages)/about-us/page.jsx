import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About PanKri
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          A passion-driven tech blog by Pankaj KrishnaVanshaj, empowering
          developers with practical tutorials, insights, and resources on web
          development, AI, and modern tools.
        </p>
      </header>

      {/* About Content */}
      <section className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Text */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Welcome to PanKri, launched in October 2024 as a dedicated platform
            for sharing original, high-quality content on technology, coding,
            and innovation. From in-depth Next.js tutorials to AI trends and
            full-stack project guides, our mission is to simplify complex topics
            and help developers build real-world skills.
          </p>

          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by Pankaj KrishnaVanshaj, a full-stack developer with over 5
            years of experience in web technologies, PanKri started as a
            personal outlet to document learning journeys and contribute to the
            developer community. What began as simple notes has grown into a
            resource hub for enthusiasts worldwide, all while maintaining a
            commitment to ethical, original content—no ads or promotions until
            now, ensuring genuine value first.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide accessible, practical tutorials and articles that empower
            developers to master tools like React, Tailwind CSS, and Node.js,
            while fostering a supportive space for growth in the fast-paced tech
            landscape.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the go-to destination for tech learners seeking inspiration,
            actionable knowledge, and a vibrant community—helping you turn ideas
            into code, one post at a time.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/pankaj-krishnavanshaj.png"
            alt="Pankaj KrishnaVanshaj, Founder of PanKri"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Owner Bio */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Meet the Founder
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/pankaj-krishnavanshaj.png"
            alt="Pankaj KrishnaVanshaj"
            width={200}
            height={200}
            className="rounded-full shadow-lg object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Pankaj KrishnaVanshaj
            </h3>
            <p className="text-gray-600 mb-4">
              Full-Stack Developer & Content Creator
            </p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in modern web stacks, Pankaj crafts hands-on guides
              to help you navigate from beginner concepts to advanced
              deployments. Passionate about open-source and lifelong learning,
              he believes in code that solves problems and communities that
              collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Skills / Expertise */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Core Expertise
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We specialize in these technologies to deliver reliable, up-to-date
          resources.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Nest.js",
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
