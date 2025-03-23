import Link from 'next/link';
import Image from 'next/image';

export default function SkillGrow() {
  return (
    <div className="bg-white shadow-primary shadow-md rounded-lg p-6 md:p-8">
      <article className="mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Image Header */}
        <div className="relative w-full h-80">
          <Image
            src="/skillgrow.png"
            alt="PK SkillGrow Review Snapshot"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white p-6 drop-shadow-lg">
              PK SkillGrow: Your AI-Powered Path to Smarter Learning
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-8 space-y-8">
          {/* Intro */}
          <section>
            <p className="text-lg text-gray-300 italic mb-4">
              Posted on March 23, 2025 by PanKri
            </p>
            <p className="text-gray-200 leading-loose">
              Let’s dive into <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a>—an AI-driven platform that’s got me rethinking how we learn. Created by Pankaj KrishnaVanshaj (PK), a soon-to-be software engineering grad from Mainpuri, India, this gem offers interactive quizzes, tailored courses, and educational resources to boost your skills and knowledge. I’ve been exploring <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a>, and here’s why it’s worth a look.
            </p>
          </section>

          {/* First Impressions */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">First Impressions: Learning, Reimagined</h2>
            <p className="text-gray-200 leading-loose">
              Hitting up <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a> feels like stepping into a learning playground powered by AI. It’s not just about rote memorization—it’s interactive, with quizzes that challenge you, courses tailored to your pace, and resources that actually make sense. I poked around a bit, and <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">Explore PK SkillGrow</a> to see how it flips the script on education.
            </p>
          </section>

          {/* Features Deep Dive */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">The Highlights: What Sets It Apart</h2>
            <p className="text-gray-200 leading-loose">
              The interactive quizzes on <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a> are a standout—AI whips them up fast, and they’re spot-on for testing your chops. I tried a “Python Basics” quiz, and it mixed multiple-choice with short answers, keeping me on my toes. The tailored courses are the real deal too—I started a coding module, and it adjusted to my level, throwing in bite-sized lessons that didn’t overwhelm.
            </p>
            <p className="text-gray-200 leading-loose mt-4">
              Then there’s the educational resources—think guides, videos, and cheat sheets, all neatly organized. It’s mobile-friendly, so I flipped to my phone mid-lesson without a hitch. <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">Use PK SkillGrow</a> anywhere, and it’s like having a personal tutor in your pocket—smart and seamless.
            </p>
          </section>

          {/* Room for Improvement */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Room to Grow: Still Evolving</h2>
            <p className="text-gray-200 leading-loose">
              It’s not perfect yet—<a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a> is new, and it shows. The course library feels a bit thin—more topics would be ace. The AI quizzes can get repetitive if you don’t tweak your inputs, and I’d love deeper resource variety, like interactive simulations. Still, these are early kinks—<a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">Visit PK SkillGrow</a> and you’ll see the potential shining through.
            </p>
          </section>

          {/* The Vision */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Behind the Scenes: PK’s Vision</h2>
            <p className="text-gray-200 leading-loose">
              Pankaj KrishnaVanshaj, a freelance dev from Mainpuri with a knack for innovation, built <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a> to make learning smarter and more accessible. It’s about advancing skills and knowledge with AI that adapts to you—not the other way around. <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">Check out PK SkillGrow</a>, and you’ll feel his passion for education in every feature.
            </p>
          </section>

          {/* Final Thoughts */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Final Verdict: Worth Your Time?</h2>
            <p className="text-gray-200 leading-loose">
              So, is <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a> a keeper? If you’re looking to level up your skills with interactive quizzes, tailored courses, and solid resources, heck yes. It’s not a full-on university replacement yet, but it’s a slick tool for personal growth. I’m giving it an 8/10—add more courses and depth, and it’s a 9. <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">Explore PK SkillGrow</a>—it’s a smart way to learn.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <p className="text-gray-200 text-lg">
              Ready to grow? Hit up the team at{' '}
              <a href="mailto:info@pankri.com" className="text-primary hover:text-teal-300 underline">
                info@pankri.com
              </a> or jump into <a href="https://skillgrow.pankri.com/" className="text-primary hover:text-teal-300 underline">PK SkillGrow</a>. Drop your take below—I’m all ears!
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-700 p-6 text-center">
          <p className="text-sm text-gray-400">Reviewed on March 23, 2025</p>
          <Link href="/">
            <span className="text-primary hover:text-teal-300 transition-colors duration-300 text-lg font-medium">
              Back to Home
            </span>
          </Link>
        </footer>
      </article>
    </div>
  );
}