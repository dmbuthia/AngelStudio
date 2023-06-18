
import React from 'react';
import booth5 from './../../assets/booth5.jpg';
import booth6 from './../../assets/booth6.jpg';
import propall from './../../assets/propall.webp';
import backdrop from './../../assets/backdrop.jpg';
import greenscreen1 from './../../assets/greenscreen1.webp';

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
            <img
            src={booth5}
           alt="booth"                  
         />
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
            <img
            src={booth6}
           alt="booth"                  
         />
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
            <img
            src={propall}
           alt="booth"                  
         />
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
            <img
            src={backdrop}
           alt="booth"                  
         />
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
            <img
            src={greenscreen1}
           alt="booth"                  
         />
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
