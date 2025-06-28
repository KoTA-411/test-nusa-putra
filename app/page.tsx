import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
        <svg width="600" height="600" fill="none">
          <circle cx="300" cy="300" r="300" fill="url(#gradient)" />
          <defs>
            <radialGradient
              id="gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 300) rotate(90) scale(300)"
            >
              <stop stopColor="#FFDEE9" />
              <stop offset="1" stopColor="#B5FFFC" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <a
          href={socialLinks.twitter}
          target="_blank"
          className="block mx-auto lg:mx-0 transform transition-transform duration-700 hover:scale-110 hover:rotate-3"
        >
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>

        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
            Portfolio template!
          </h1>
          <div className="prose prose-lg prose-neutral dark:prose-invert">
            <p>
              A clean, fast, and lightweight portfolio template built with Next.js,
              Vercel, and Tailwind CSS.
            </p>
            <p>
              Nextfolio has everything you need for a portfolio: MDX blog, SEO,
              RSS, Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and{' '}
              <a
                target="_blank"
                href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
                className="underline decoration-pink-500 hover:decoration-pink-300"
              >
                more
              </a>
              .
            </p>
            <p>
              Nextfolio is{' '}
              <a
                href={socialLinks.github}
                target="_blank"
                className="underline decoration-green-500 hover:decoration-green-300"
              >
                open-source
              </a>{' '}
              and fully customizable, making it easy to add more features.
            </p>
            <p>
              <a
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
                target="_blank"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors"
              >
                Deploy
              </a>{' '}
              your Nextfolio site with Vercel in minutes and follow the set up
              instructions in the{' '}
              <a
                href="/blog/getting-started"
                className="underline decoration-yellow-500 hover:decoration-yellow-300"
              >
                Getting Started
              </a>{' '}
              post.
            </p>
            <p>
              Built and maintained by{' '}
              <a
                href="https://imsirius.xyz/"
                target="_blank"
                className="font-semibold hover:text-pink-500"
              >
                Sirius
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
