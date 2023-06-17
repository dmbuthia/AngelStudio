import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>
                <div className="mt-4">
                  <p className="text-gray-700">
                    Phone: <span className="font-semibold">[206-999-9999]</span>
                  </p>
                  <p className="text-gray-700">
                    Email: <span className="font-semibold">[admin@angelstudios.com]</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Hours
                </h3>
                <div className="mt-4">
                  <p className="text-gray-700">
                    Monday to Friday: <span className="font-semibold">[8:00am – 5:00pm]</span>
                  </p>
                  <p className="text-gray-700">
                    Saturday and Sunday: <span className="font-semibold">[10:00am – 4:00pm]</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Location
                </h3>
                <div className="mt-4">
                  <p className="text-gray-700">
                    [ 3000 NE 4th St
                       Renton, WA 98056]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Connect With Us
                </h3>
                <div className="mt-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Facebook:</span> <a href="[Facebook]">Angelstudio</a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Instagram:</span> <a href="[Instagram]">Angelstudio</a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Twitter:</span> <a href="[Twitter]">@Angelstudio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Contact Form
              </h3>
              <div className="mt-4">
                <form>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm"
                    ></textarea>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            We value your feedback and inquiries. Please use the contact form above or reach out to us directly via phone or email. Our team will get back to you as soon as possible.
          </p>
          
          <p>
            If you have questions about availability for a specific date or need further information about our services, please include relevant details in your message. We look forward to assisting you in creating an unforgettable photo booth experience for your event!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
