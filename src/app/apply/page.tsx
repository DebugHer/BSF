'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type ApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  gpa: string;
  essay: string;
  resume: FileList;
};

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    try {
      // Send to Airtable
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h2>
              <p className="text-gray-600">
                Thank you for applying to our scholarship program. We will review your application and contact you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Scholarship Application
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Please fill out the form below carefully. All fields are required unless marked optional.
          </p>
        </div>

        <div className="bg-white shadow sm:rounded-lg overflow-hidden">
          {/* Loading state - only show after component is mounted */}
          {isMounted && isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Form container with improved styling */}
          <div className="relative" style={{ paddingTop: '150%' }}>
            {isMounted && (
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSclAFZC337m38ITQ2wuR34bq0TgqLdGZUf6CJN3YxC1ZdDuWA/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                onLoad={() => setIsLoading(false)}
              >
                Loading…
              </iframe>
            )}
          </div>
        </div>

        {/* Instructions Panel */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-medium text-blue-900 mb-4">
            Application Instructions
          </h2>
          <ul className="space-y-3 text-blue-800">
            <li>• Complete all required fields in the application form</li>
            <li>• Prepare a personal statement (minimum 300 words)</li>
            <li>• Have your resume/CV ready in PDF, DOC, or DOCX format</li>
            <li>• Double-check all information before submitting</li>
            <li>• You will receive a confirmation email after submission</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 