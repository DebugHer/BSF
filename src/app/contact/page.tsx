'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Have questions about our scholarship program? We are here to help!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="col-span-1">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900 mb-8">
                  Get in Touch
                </h3>
                <dl className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1">
                        <a href="mailto:info@scholarshipprogram.com" className="text-blue-600 hover:text-blue-500">
                          info@scholarshipprogram.com
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1">
                        <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-500">
                          (555) 123-4567
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <dt className="text-sm font-medium text-gray-500">Office</dt>
                      <dd className="mt-1 text-gray-900">
                        123 Education Street<br />
                        Suite 456<br />
                        Knowledge City, ST 12345
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900 mb-8">
                  Send us a Message
                </h3>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h2>
                    <p className="text-gray-600">
                      Thank you for contacting us. We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        {...register("message", { required: "Message is required" })}
                        rows={6}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 