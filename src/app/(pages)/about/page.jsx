import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About PanKri</h1>
      
      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-sm">
            PanKri is dedicated to empowering digital innovation by providing a universe of websites and apps, connecting users and creators in Mainpuri, Uttar Pradesh, and beyond. Our mission is to deliver accessible, high-quality digital tools and resources that inspire creativity, enhance productivity, and foster community engagement in an ever-evolving digital landscape.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-sm">
            Based in Mainpuri, Uttar Pradesh, India, PanKri is the brainchild of Pankaj KrishnaVanshaj, a visionary software engineer and developer with a passion for bridging technology and community needs. Alongside a talented team of innovators, we’ve built a platform that hosts a diverse range of digital solutions—from productivity tools to creative applications—designed to empower users worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Meet Our Founder: Pankaj KrishnaVanshaj</h2>
          <p className="text-sm">
            Pankaj KrishnaVanshaj, often known as PK, is the driving force behind PanKri. A soon-to-be graduate of Software Engineering from CSJM University, Kanpur, Pankaj combines technical expertise with a deep commitment to making technology accessible. With years of experience as a freelance web and app developer, he has honed his skills in creating user-focused, high-quality solutions. Inspired by Mainpuri’s vibrant community and the global potential of digital innovation, Pankaj founded PanKri to provide a platform where creativity meets practicality. Outside of his work, he enjoys exploring movies, series, and video games—interests that fuel his creative approach to problem-solving.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-sm">
            Our vision is to become the leading hub for innovative web and app experiences, fostering growth and connectivity in the digital world. We strive to empower local talent in Mainpuri while delivering tools that resonate globally, ensuring every user finds value in our unique offerings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h2>
          <p className="text-sm">
            PanKri brings you a curated collection of original websites and applications tailored to diverse needs—whether you’re a student, professional, or creator. From productivity enhancers to creative platforms, our tools are designed with user experience in mind. We continuously evolve our offerings to stay ahead of digital trends and meet the demands of our growing community.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Why PanKri?</h2>
          <p className="text-sm">
            At PanKri, we prioritize originality, quality, and user satisfaction. Rooted in Mainpuri’s spirit of resilience and innovation, our platform stands out by delivering reliable, purpose-driven digital solutions. Under Pankaj’s leadership, we’re committed to pushing boundaries and creating a lasting impact in the digital space.
          </p>
        </div>

        <div>
          <p className="text-sm">
            Want to learn more about PanKri or collaborate with us? Reach out at{' '}
            <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
              info@pankri.com
            </a>. We’re excited to connect with you!
          </p>
          <p className="text-sm mt-2">Last Updated: March 23, 2025</p>
        </div>
      </section>

      <div className="mt-8">
        <Link href="/">
          <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm cursor-pointer">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}