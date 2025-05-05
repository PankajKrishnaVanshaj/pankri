import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About PanKri - Tech Blog on JavaScript, React, Node.js</title>
        <meta
          name="description"
          content="Learn about PanKri, a Mainpuri-based tech blog by Pankaj KrishnaVanshaj, offering tutorials on JavaScript, CSS, HTML, React.js, Node.js, MongoDB, and more."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PanKri',
              url: 'https://www.pankri.com',
              founder: {
                '@type': 'Person',
                name: 'Pankaj KrishnaVanshaj',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mainpuri',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'India',
              },
              description: 'A tech blog offering tutorials on JavaScript, React.js, Node.js, MongoDB, and more.',
            }),
          }}
        />
      </Head>
      <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
        

        <h1 className="text-3xl font-bold text-gray-900 mb-6">About PanKri</h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-sm">
              PanKri is dedicated to empowering developers through a tech blog and platform offering tutorials, tools, and resources on JavaScript, CSS, HTML, React.js, Node.js, MongoDB, and Express.js. Based in Mainpuri, Uttar Pradesh, we connect local talent with global audiences, fostering creativity and technical excellence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
            <p className="text-sm">
              PanKri, founded by Pankaj KrishnaVanshaj in Mainpuri, India, is a hub for tech enthusiasts. Our blog delivers in-depth tutorials and projects, from building React.js apps to setting up MongoDB databases. Our team of developers and writers is passionate about making technology accessible and engaging.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Meet Our Founder: Pankaj KrishnaVanshaj</h2>
            <p className="text-sm">
              Pankaj KrishnaVanshaj (PK) is a software engineering student at CSJM University, Kanpur, and a skilled freelance developer. With expertise in web and app development, he founded PanKri to share knowledge through practical tutorials. Inspired by Mainpuri’s community and tech trends, Pankaj enjoys exploring coding challenges and tech blogs, which fuel his innovative approach.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Blog</h2>
            <p className="text-sm">
              Our tech blog covers a range of topics, including:
              <ul className="list-disc pl-5 mt-2">
                <li>JavaScript: Mastering async/await and ES6 features.</li>
                <li>React.js: Building dynamic UIs with hooks and state management.</li>
                <li>Node.js & Express.js: Creating RESTful APIs.</li>
                <li>MongoDB: Designing scalable databases.</li>
                <li>CSS & HTML: Crafting responsive designs.</li>
              </ul>
              Here’s a sample of what you’ll find:
              <pre className="bg-gray-100 p-4 rounded mt-2 text-sm overflow-auto">
                {`// Simple Express.js route
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to PanKri!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
              </pre>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-sm">
              We aim to be a leading resource for developers, offering practical tutorials and tools that empower coders in Mainpuri and beyond. Explore our blog for guides like “Building a React.js Dashboard” or “Scaling Node.js with MongoDB.”
            </p>
          </div>

          <div>
            <p className="text-sm">
              Want to contribute or learn more? Contact us at{' '}
              <a href="mailto:info@pankri.com" className="text-blue-600 hover:underline">
                info@pankri.com
              </a> or explore our <Link href="/blog" className="text-blue-600 hover:underline">blog</Link>!
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
    </>
  );
}
