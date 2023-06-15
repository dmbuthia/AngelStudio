import React from "react";
import { FaAward, FaCameraRetro, FaRev } from "react-icons/fa";
import pexelspaveldanilyuk from './../../assets/pexelspaveldanilyuk.jpg';
import event5 from './../../assets/event5.jpg';
import event8 from './../../assets/event8.jpg';
import event10overlay from './../../assets/event10overlay.jpg';
import party4 from './../../assets/party2.jpg';



const Features = () => {
  return (
    <div>
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="text-center">
          <p className="inline-block px-5 py-2 mb-4 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
            Why Choose AngelStudio?
          </p>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Adding</span>
            </span>{" "}
            the memories of every moment
          </h2>
        </div>
        <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex items-center justify-center">
                <img
                   src={pexelspaveldanilyuk}
                  alt="Photo Booth"
                  className="h-72 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  High-Quality Photo Booths
                </h2>
                <p className="text-gray-600 mb-6">
                  We offer a wide selection of sleek and modern photo booths
                  that are sure to impress your guests. From classic designs to
                  customizable options, we have the perfect photo booth to match
                  your event style.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Extensive Prop Collection
                </h2>
                <p className="text-gray-600 mb-6">
                  Our diverse range of props adds an element of fun and
                  creativity to your photo booth experience. From quirky hats to
                  themed accessories, let your guests unleash their inner
                  photogenic selves.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                    src={party4}
                  alt="Props"
                  className="h-72 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex items-center justify-center">
                <img
                     src={event5}
                  alt="Backdrop"
                  className="h-72 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Customizable Backdrops
                </h2>
                <p className="text-gray-600 mb-6">
                  Create the perfect backdrop for your photos with our
                  customizable options. Choose from a variety of themes and
                  designs to match your event's atmosphere and make every
                  picture stand out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Professional On-Site Attendants
                </h2>
                <p className="text-gray-600 mb-6">
                  Our friendly and skilled on-site attendants will ensure that
                  your photo booth runs smoothly throughout your event. They
                  will assist guests, manage the equipment, and keep the fun
                  going.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                   src={event8}
                  alt="Attendants"
                  className="h-72 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex items-center justify-center">
                <img
                     src={event10overlay}
                  alt="Social Media Integration"
                  className="h-72 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Social Media Integration
                </h2>
                <p className="text-gray-600 mb-6">
                  Share your photos instantly on social media platforms,
                  allowing guests to relive the memories and amplify the
                  excitement of your event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">

                            <div className=" space-y-12">
                                <div className="flex shadow-xl rounded-lg py-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaAward />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Professional </h4>
                                        <p className="mt-2 text-gray-600">We are vastly professionally mannered and we have a bunch of professionally skilled team</p>
                                    </div>
                                </div>
                                <div className="flex shadow-xl rounded-lg py-2">
                                    <div className="flex-shrink-0 ">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                            <FaCameraRetro />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Experienced Photographer </h4>
                                        <p className="mt-2 text-gray-600">A young enthusiastic team with a bunch of talents and experience. They are able to work 24/7 for the seek a perfect project done on time.</p>
                                    </div>
                                </div>
                                <div className="flex shadow-xl rounded-lg py-2">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaRev />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Support 24/7 </h4>
                                        <p className="mt-2 text-gray-600">We have technical support team. They are ready to serve you 24/7.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/successful-photographer.jpg" alt="" className="mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Features;
