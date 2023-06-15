import React from 'react';

const FAQPage = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                1. How does the rental process work?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                To rent a photo booth, simply contact us with your event details and package preference. Our team will guide you through the booking process and provide a customized quote. Once confirmed, we will coordinate the delivery, setup, and collection of the photo booth at your event venue.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                2. What is included in the rental package?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Each package includes a sleek and modern photo booth, unlimited photo sessions and prints, a selection of backdrops, and fun props. An on-site attendant will be present to assist your guests and ensure a smooth experience.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                3. Can I customize the photo booth for my event?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Absolutely! We offer customization options such as personalized branding, custom props, and themed backdrops at an additional cost. Contact our team to discuss your specific requirements and get a quote for customization.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                4. How long can I rent the photo booth for?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Our rental durations vary depending on the package you choose. The Classic Package is for 4 hours, the Premium Package is for 6 hours, and the Deluxe Package offers a full-day rental of up to 10 hours. Additional hours can be added to any package at an extra cost.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                5. What areas do you serve?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We currently provide photo booth rental services in King County & Pierce County. If your event is outside our service area, please contact us, and we'll do our best to accommodate your request.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                6. How early should I book the photo booth for my event?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                We recommend booking your photo booth as early as possible to secure your desired date and package. Popular dates tend to book up quickly, especially during peak seasons, so it's best to reserve in advance.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                7. Is setup and delivery included in the rental fee?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Yes, setup and delivery are included in the rental fee. Our team will handle all the logistics and ensure the photo booth is ready to go before your event starts.
              </p>
            </div>
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                8. What if there are technical issues during my event?
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Our photo booths are equipped with reliable technology, but in the rare event of any technical issues, our on-site attendant will be there to resolve them promptly. We also have backup equipment available to ensure uninterrupted service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-base text-gray-500">
          If you have any other questions or concerns not addressed above, please feel free to reach out to our friendly team. We're here to assist you and make your event a success!
        </p>
      </div>
    </div>
  );
};

export default FAQPage;
