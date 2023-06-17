const Pricing = () => {
  return (
    <div class="relative w-full h-full">
      <div class="absolute hidden w-full bg-gray-50 lg:block h-96" />
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-5 py-2 mb-4 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
              Our Pricing
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Transparent</span>
            </span>{" "}
            pricing. Pay as you grow.
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Affordable Wedding Photography Prices with Video Starts Here. Check
            your wedding date availability and instantly receive a{" "}
            <span className="font-semibold">$300 coupon</span>
          </p> */}
        </div>
        <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          <div>
            {/* <div class="p-8 bg-gray-900 rounded">
                            <div class="mb-4 text-center">
                                <p class="text-xl font-medium tracking-wide text-white">
                                Classic Package
                                </p>
                                <div class="flex items-center justify-center">
                                    <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        $39
                                    </p>
                                    <p class="text-lg text-gray-500">/ Day</p>
                                </div>
                            </div>
                            <ul class="mb-8 space-y-2">
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">A Certified Photographer for <span className="font-semibold ">2 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Video Coverage for <span className="font-semibold ">2 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">30 Page, Wedding Photo Album</p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Private Online Photo Gallery</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get Now
                            </button>
                        </div> */}
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Classic Package
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $39
                  </p>
                  <p class="text-lg text-gray-500">/ Day</p>
                </div>
              </div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Duration: 4 hours</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Sleek and modern photo booth with high-quality printing
                    capabilities
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Open-air setup allowing for larger groups and creative
                    posing
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Unlimited photo sessions and prints during the rental period
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Standard backdrop options to choose from
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Assorted fun props to enhance the photo booth experience
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    On-site attendant to ensure smooth operation and assist
                    guests
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Personalized photo templates with event name and date
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Digital photo gallery for easy sharing and downloading of
                    images
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Option to add custom props and themed backdrops at an
                    additional cost
                  </p>
                </li>
              </ul>
              <div class="flex items-center justify-center"></div>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>

            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Premium Package
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $79
                  </p>
                  <p class="text-lg text-gray-500">/ Day</p>
                </div>
              </div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    A Certified Photographer for{" "}
                    <span className="font-semibold ">6 Hours</span>
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Video Coverage for{" "}
                    <span className="font-semibold ">6 Hours</span>
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Unlimited Photos & Video Captured
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    A 5 Minute Edited HD Highlight Film
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Choice of premium backdrops, including sequins, floral, or
                    custom-designed options
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Upgraded props collection, including themed props tailored
                    to the event (e.g., wedding, birthday, or corporate theme)
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Animated GIF creation for dynamic and shareable moments
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Instant social media sharing options to amplify the event's
                    reach
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Option for personalized branding on the photo booth exterior
                  </p>
                </li>
              </ul>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-white">
                  Deluxe Package
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    $79
                  </p>
                  <p class="text-lg text-gray-500">/ Day</p>
                </div>
              </div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    A Certified Photographer for{" "}
                    <span className="font-semibold ">
                      Full-day (up to 10 hours)
                    </span>
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Video Coverage for{" "}
                    <span className="font-semibold ">
                      Full-day (up to 10 hours)
                    </span>
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Unlimited Photos & Video Captured
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    A 5 Minute Edited HD Highlight Film
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Customizable Photo Booth Enclosure
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Unlimited Prints with Upgraded Print Sizes
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Video Booth Feature</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    On-site Scrapbook Station
                  </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">
                    Option for Multiple Booth Setups
                  </p>
                </li>
              </ul>
              <div class="flex items-center justify-center"></div>
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Now
              </button>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          
        </div>
        
      </div>
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Please note:
          </h2>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <li className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0L3 9v6l9 5 9-5v-6l-9 5zm0 0l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Additional Hours
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Beyond the package duration, you can add additional hours at an extra cost of $110 per hour.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0L3 9v6l9 5 9-5v-6l-9 5zm0 0l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Customization Options
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Personalized branding, custom props, and themed backdrops are available at an additional cost. Contact us for details.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0L3 9v6l9 5 9-5v-6l-9 5zm0 0l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Special Offers and Discounts
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Stay tuned to our website or contact our team to inquire about current deals and discounts available for specific seasons or promotions.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0L3 9v6l9 5 9-5v-6l-9 5zm0 0l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Exceptional Value and Experience
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    Our pricing is designed to provide exceptional value while ensuring a memorable photo booth experience for your event. Reach out to us for a customized quote or if you have any specific requirements.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <p className="text-base leading-6 text-gray-700">
            Make your event unforgettable with AngelStudio's photo booth rental services. Book today and let the fun begin!
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
