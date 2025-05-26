import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Financial Support",
    description: "Receive funding for tuition, books, and living expenses to help you focus on your education.",
    icon: "💰",
  },
  {
    name: "Mentorship Program",
    description: "Connect with experienced professionals who will guide you through your academic journey.",
    icon: "🤝",
  },
  {
    name: "Career Development",
    description: "Access exclusive workshops, internship opportunities, and career counseling services.",
    icon: "💼",
  },
  {
    name: "Networking Events",
    description: "Join a community of scholars and professionals to build lasting connections.",
    icon: "🌐",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            Empowering Future Leaders
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 text-center">
            Our scholarship program helps talented students achieve their educational goals and build successful careers.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
            >
              Apply Now
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Program Benefits
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our comprehensive scholarship program provides more than just financial support.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="relative bg-white rounded-lg shadow-lg p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take the next step?</span>
            <span className="block text-blue-200">Start your application today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
