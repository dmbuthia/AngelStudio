import React from 'react';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:w-1/2 px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-800">Book a Photo Booth</h2>
              <p className="mt-2 text-gray-600">Please fill out the form below to reserve a photo booth for your event.</p>

              <form className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">
                    Event Date
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="eventDate"
                    type="date"
                    placeholder="Select event date"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDetails">
                    Event Details
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="eventDetails"
                    rows="4"
                    placeholder="Enter event details"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactInfo">
                    Contact Information
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contactInfo"
                    type="text"
                    placeholder="Enter your contact information"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
                    Specific Requirements
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="requirements"
                    rows="4"
                    placeholder="Enter any specific requirements"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 px-6 py-8 bg-gray-100">
              <img
                className="w-full h-auto mx-auto"
                src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/successful-photographer.jpg"
               
                alt="Booking Image"
              />
              <img
                className="w-full h-auto mx-auto"
                src="https://www.signupgenius.com/cms/socialMediaImages/appointment-scheduling-tips-photographers-article-1200x800.jpg"               
                alt="Booking Image"
              />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
