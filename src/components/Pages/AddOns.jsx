import React from 'react';
import prop1 from './../../assets/prop1.jpg';
import gscreen from './../../assets/gscreen.jpg';
import socialmedia from './../../assets/socialmedia.jpg';
import scrapbookfinal from './../../assets/scrapbookfinal.jpg';
import vmessage from './../../assets/vmessage.jpg';
import attendant from './../../assets/attendant.jpg';
import backdrop from './../../assets/backdrop.jpg';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 sm:py-16 sm:px-12 lg:px-20 xl:px-32">
      <div className="container mx-auto py-12">
  <h1 className="text-4xl font-bold text-center mb-8">Add-Ons Page</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Custom Props</h2>
      <p className="text-gray-700 mb-4">
        Take your event to the next level with unique and personalized props. Our talented team can design and create custom props tailored to your event theme or branding.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $150 per prop.</p>
      <img
      src={prop1}
     alt="Prop"                  
   />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Themed Backdrops</h2>
      <p className="text-gray-700 mb-4">
        Set the perfect scene with our selection of themed backdrops. Choose from a variety of options, including floral, rustic, glamour, or even create your own custom-designed backdrop.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $975 per backdrop.</p>
      
      <img
                   src={backdrop}
                  alt="Prop"                  
                />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Social Media Integration</h2>
      <p className="text-gray-700 mb-4">
        Share the excitement of your event with social media integration. Allow guests to instantly share their photos and GIFs on popular platforms like Instagram, Facebook, and Twitter.
      </p>
      <p className="text-gray-700 mb-4">Price: Included in all packages.</p>
      <img
      src={socialmedia}
     alt="Prop"                  
   />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">On-Site Attendants</h2>
      <p className="text-gray-700 mb-4">
        Ensure a seamless and enjoyable experience with our professional on-site attendants. Our friendly attendants will assist guests, manage props, and provide technical support throughout your event.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $75 per hour.</p>
      <img
      src={attendant}
     alt="Prop"                  
   />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Green Screen Technology</h2>
      <p className="text-gray-700 mb-4">
        Transport your guests to virtual backgrounds or themed locations with our green screen technology. Create captivating and immersive experiences by replacing the backdrop with digital images or custom-designed backgrounds.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $375 per event.</p>
      <img
      src={gscreen}
     alt="Prop"                  
   />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Video Messaging</h2>
      <p className="text-gray-700 mb-4">
        Add a personal touch with video messaging. Allow guests to record short video messages alongside their photos, creating memorable moments.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $220 per event.</p>
      <img
      src={vmessage}
     alt="Prop"                  
   />
    </div>

    <div className="bg-white rounded shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Scrapbook Station</h2>
      <p className="text-gray-700 mb-4">
        Preserve your memories with our dedicated scrapbook station. Guests can create a physical scrapbook using their photo prints and leave personalized messages.
      </p>
      <p className="text-gray-700 mb-4">Price: Starting at $150 per event.</p>
      <img
      src={scrapbookfinal}
     alt="Prop"                  
   />
    </div>
  </div>

  <p className="text-gray-700 mt-8">
    Please note that prices may vary based on the duration of your rental and specific requirements. Contact our team for a customized quote or further information.
  </p>

  <p className="text-gray-700 mt-8">
    Make your photo booth experience truly unforgettable by adding these exciting add-ons to your rental package. Let us help you create lasting memories!
  </p>
 
</div>

    </div>
  );
};

export default AboutUsPage;
