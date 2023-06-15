// import React from 'react';
// import useTitle from '../../Hooks/useTitle';

// const Blog = () => {
//     useTitle('PhotoLab | Blog')
//     return (
//         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//             <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
//                 <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
//                     <a href="/" aria-label="Article">
//                         <img
//                             src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
//                             className="object-cover w-full h-64 rounded"
//                             alt=""
//                         />
//                     </a>
//                     <div className="py-5">
//                         <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
//                             13 Jul 2022
//                         </p>
//                         <a
//                             href="/"
//                             aria-label="Article"
//                             className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
//                         >
//                             <p className=" text-2xl font-bold leading-5 dark:hover:text-deep-purple-accent-700">Difference between SQL and NoSQL</p>
//                         </a>
//                         <p className="mb-4 text-gray-700  ">
//                             SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL
//                         </p>
//                         <div className="flex space-x-4">
//                             <a
//                                 href="/"
//                                 aria-label="Likes"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="6 23 1 23 1 12 6 12"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <path
//                                             d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p classname="font-semibold ">5.2K</p>
//                             </a>
//                             <a
//                                 href="/"
//                                 aria-label="Comments"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         stroke="currentColor"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="23 5 23 18 19 18 19 22 13 18 12 18"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <polygon
//                                             points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">61</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
//                     <a href="/" aria-label="Article">
//                         <img
//                             src="https://miro.medium.com/max/1170/1*AMeiWwTqbLAUe0bvdVTVLA.png"
//                             className="object-cover w-full h-64 rounded"
//                             alt=""
//                         />
//                     </a>
//                     <div className="py-5">
//                         <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
//                             22 Oct 2022
//                         </p>
//                         <a
//                             href="/"
//                             aria-label="Article"
//                             className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
//                         >
//                             <p className=" text-2xl font-bold leading-5 dark:hover:text-deep-purple-accent-700">What is JWT, and how does it work?</p>
//                         </a>
//                         <p className="mb-4 text-gray-700 ">
//                             JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
//                         <div className="flex space-x-4">
//                             <a
//                                 href="/"
//                                 aria-label="Likes"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="6 23 1 23 1 12 6 12"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <path
//                                             d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">7.4K</p>
//                             </a>
//                             <a
//                                 href="/"
//                                 aria-label="Comments"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         stroke="currentColor"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="23 5 23 18 19 18 19 22 13 18 12 18"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <polygon
//                                             points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">81</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
//                     <a href="/" aria-label="Article">
//                         <img
//                             src="https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/share_image/e6c8bd74-8a4d-4b5b-a92b-1f273e9a924f.png"
//                             className="object-cover w-full h-64 rounded"
//                             alt=""
//                         />
//                     </a>
//                     <div className="py-5">
//                         <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
//                             4 Aug 2022
//                         </p>
//                         <a
//                             href="/"
//                             aria-label="Article"
//                             className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
//                         >
//                             <p className="text-2xl dark:hover:text-deep-purple-accent-700 font-bold leading-5  ">What is the difference between javascript and NodeJS?</p>
//                         </a>
//                         <p className="mb-4 text-gray-700 dark:hover:text-deep-purple-accent-700 ">
//                             JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a
//                                 href="/"
//                                 aria-label="Likes"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="6 23 1 23 1 12 6 12"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <path
//                                             d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">7.4K</p>
//                             </a>
//                             <a
//                                 href="/"
//                                 aria-label="Comments"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         stroke="currentColor"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="23 5 23 18 19 18 19 22 13 18 12 18"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <polygon
//                                             points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">81</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl p-5">
//                     <a href="/" aria-label="Article">
//                         <img
//                             src="https://www.duendev.com/wp-content/uploads/2021/07/NodeJS-App-Development-Companies-2.jpg"
//                             className="object-cover w-full h-64 rounded"
//                             alt=""
//                         />
//                     </a>
//                     <div className="py-5">
//                         <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
//                             28 Sep 2022
//                         </p>
//                         <a
//                             href="/"
//                             aria-label="Article"
//                             className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
//                         >
//                             <p className="text-2xl dark:hover:text-deep-purple-accent-700 font-bold leading-5 ">
//                                 How does NodeJS handle multiple requests at the same time?
//                             </p>
//                         </a>
//                         <p className="mb-4 text-gray-700  ">
//                             NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a
//                                 href="/"
//                                 aria-label="Likes"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="6 23 1 23 1 12 6 12"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <path
//                                             d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">4.7K</p>
//                             </a>
//                             <a
//                                 href="/"
//                                 aria-label="Comments"
//                                 className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
//                             >
//                                 <div className="mr-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="24"
//                                         height="24"
//                                         viewBox="0 0 24 24"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         stroke="currentColor"
//                                         className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
//                                     >
//                                         <polyline
//                                             points="23 5 23 18 19 18 19 22 13 18 12 18"
//                                             fill="none"
//                                             strokeMiterlimit="10"
//                                         />
//                                         <polygon
//                                             points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeMiterlimit="10"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <p className="font-semibold ">32</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Blog;
import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Blog</h2>
        <p className="text-gray-600 text-center mb-12">
          Welcome to the AngelStudio blog, where we share tips, ideas, and inspiration to help you make the most of your events, photo booths, and party planning. Explore our articles below:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Creative Ways to Use a Photo Booth at Your Wedding
            </h3>
            <p className="text-gray-700 mb-4">
              Discover unique and fun ideas to incorporate a photo booth into your wedding celebration. From custom props to themed backdrops, we provide inspiration to make your special day even more memorable.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              How to Plan a Memorable Corporate Event with a Photo Booth
            </h3>
            <p className="text-gray-700 mb-4">
              Planning a corporate event? Our article outlines the benefits of having a photo booth at your corporate gathering. Learn how to maximize engagement, promote brand awareness, and create a fun-filled experience for your guests.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              The Ultimate Guide to Prop Selection for Your Photo Booth
            </h3>
            <p className="text-gray-700 mb-4">
              Props add an element of excitement and creativity to any photo booth experience. In this comprehensive guide, we discuss prop selection tips, popular prop themes, and how to customize props to suit your event.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Tips for Themed Backdrops: Setting the Perfect Scene
            </h3>
            <p className="text-gray-700 mb-4">
              Themed backdrops can transform your photo booth into a captivating environment. Dive into this article to explore different theme ideas, design tips, and how to choose the right backdrop to match your event style.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Enhancing Your Event with Green Screen Technology
            </h3>
            <p className="text-gray-700 mb-4">
              Unleash your imagination with green screen technology. This article explains how green screens work, and how you can use them to transport your guests to virtual backgrounds or themed locations.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
        <p className="text-center mt-12 text-gray-600">
          We regularly update our blog with new articles and helpful insights. Stay tuned for more event planning tips and photo booth inspiration!
        </p>
        <div className="flex justify-center mt-8">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Browse All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
