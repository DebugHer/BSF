import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            className="object-cover opacity-40"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2070&q=80"
            alt="Students studying"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            About Our Program
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 text-center">
            Learn about our mission, vision, and the team behind our scholarship program.
          </p>
        </div>
      </div>

      {/* Mission and Vision section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to empower talented students by providing them with the financial support and resources they need to pursue their educational dreams. We believe that education is a fundamental right and that financial constraints should not prevent capable students from achieving their full potential.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-500">
              We envision a world where every deserving student has access to quality education, regardless of their financial background. Through our scholarship program, we aim to create a community of future leaders who will make significant contributions to their fields and society as a whole.
            </p>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
              Founded in 2020, our scholarship program was born from a simple yet powerful idea: to make quality education accessible to all talented students. What started as a small initiative has grown into a comprehensive support system that not only provides financial aid but also mentorship, career guidance, and networking opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
            Our dedicated team works tirelessly to support our scholarship recipients and ensure the program's success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="space-y-4">
                <div className="relative mx-auto h-40 w-40 xl:w-56 xl:h-56">
                  <Image
                    className="rounded-full"
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 160px, 224px"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
                  <div className="text-gray-500">{member.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Dr. Jennifer Williams",
    role: "Program Director",
    description: "With over 15 years of experience in education and philanthropy, Jennifer leads our scholarship program with passion and dedication.",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Marcus Thompson",
    role: "Mentorship Coordinator",
    description: "Marcus oversees our mentorship program, matching students with industry professionals and ensuring meaningful connections.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr. Lisa Chen",
    role: "Academic Advisor",
    description: "Lisa provides academic guidance and support to our scholarship recipients, helping them navigate their educational journey.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]; 