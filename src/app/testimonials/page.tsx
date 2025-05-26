import { getTestimonials, Testimonial } from '@/lib/wordpress';

export const revalidate = 3600; // Revalidate every hour

async function TestimonialsPage() {
  const testimonials = await getTestimonials();

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
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="relative bg-white rounded-lg shadow-lg p-8">
                <div className="absolute -top-4 -left-4">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white"
                    src={testimonial.acf.image}
                    alt={testimonial.acf.author}
                  />
                </div>
                <div className="pt-12">
                  <blockquote>
                    <p className="text-xl font-medium text-gray-900">"{testimonial.acf.quote}"</p>
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-base font-medium text-gray-900">{testimonial.acf.author}</p>
                    <p className="text-base text-gray-500">{testimonial.acf.role}</p>
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

export default TestimonialsPage; 