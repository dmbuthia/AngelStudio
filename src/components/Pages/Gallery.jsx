import React, { useState } from 'react';
import image1 from './../../assets/model6.jpg';
import image2 from './../../assets/model3.jpg';
import image3 from './../../assets/model2.jpg';
import image4 from './../../assets/model4.jpg';

import image5 from './../../assets/model5.jpg';
import image6 from './../../assets/model7.jpg';
import image7 from './../../assets/wedding1.jpg';
import image8 from './../../assets/event4.jpg';
import image9 from './../../assets/wedding2.jpg';
import image10 from './../../assets/event6.jpg';
import image11 from './../../assets/event8.jpg';
import image12 from './../../assets/party2.jpg';
import image13 from './../../assets/party4.jpg';
import image14 from './../../assets/party5.jpg';
import image15 from './../../assets/party6.jpg';

const EventGallery = () => {
  const eventPhotos = [
    {
      imageUrl: image1,
      event: 'model',
    },
    {
      imageUrl: image2,
      event: 'model',
    },
    {
      imageUrl: image3,
      event: 'model',
    },
    {
      imageUrl: image4,
      event: 'model',
    },
    {
      imageUrl: image5,
      event: 'model',
    },
    {
      imageUrl: image6,
      event: 'model',
    },
    {
      imageUrl: image7,
      event: 'wedding',
    },
    {
      imageUrl: image8,
      event: 'event',
    },
    {
      imageUrl: image9,
      event: 'wedding',
    },
    {
      imageUrl: image10,
      event: 'event',
    },
    {
      imageUrl: image11,
      event: 'event',
    },
    {
      imageUrl: image12,
      event: 'party',
    },
    {
      imageUrl: image13,
      event: 'party',
    },
    {
      imageUrl: image14,
      event: 'party',
    },
    {
      imageUrl: image15,
      event: 'party',
    },
  ];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {eventPhotos.map((photo, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="relative h-60">
            <img
              src={photo.imageUrl}
              alt={photo.event}
              className="object-cover w-full h-full rounded-lg cursor-pointer"
              onClick={() => openFullscreen(photo.imageUrl)}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-semibold capitalize">{photo.event}</p>
            </div>
          </div>
        </div>
      ))}
      {fullscreenImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black" onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-h-screen max-w-screen cursor-pointer"
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default EventGallery;
