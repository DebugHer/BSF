// Static testimonials data
const featuredTestimonials = [
  {
    name: "Sarah Johnson",
    title: "Computer Science Major, Class of 2023",
    quote: "This scholarship changed my life. The financial support allowed me to focus on my studies, and the mentorship program helped me land my dream internship.",
    story: "Coming from a low-income family, I never thought I would be able to attend a top university. The scholarship program not only provided financial support but also connected me with amazing mentors who guided me through my academic journey. Today, I'm working at a leading tech company and giving back to the community.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    title: "Business Administration, Class of 2022",
    quote: "The career development resources and networking opportunities provided by the scholarship program were invaluable to my professional growth.",
    story: "The scholarship program opened doors I never knew existed. Through networking events and career workshops, I built connections that led to multiple internship offers. The mentorship I received helped me develop both professionally and personally.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            Success Stories
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 text-center">
            Hear from our scholarship recipients about how our program has impacted their lives and careers.
          </p>
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative">
              <div className="relative bg-white rounded-lg shadow-lg p-8">
                <div className="absolute -top-4 -left-4">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="pt-12">
                  <blockquote>
                    <p className="text-xl font-medium text-gray-900">{testimonial.quote}</p>
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-base text-gray-500">{testimonial.title}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">{testimonial.story}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-blue-200">Apply for our scholarship program today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 