import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AddToCartButton = ({ addToCart }) => {
  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-green-500 hover:bg-green-600 font-semibold rounded-md text-sm px-5 py-2.5"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

const ServiceCard = ({ photoService }) => {
  const { service_id, title, img, price, description } = photoService;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const newItem = {
      id: service_id,
      title,
      price,
    };

    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <PhotoProvider
      speed={() => 800}
      easing={type =>
        type === 2
          ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
          : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    >
      <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
        <div className="flex flex-col h-full">
          <PhotoView src={img}>
            <img
              src={img}
              style={{ objectFit: 'cover' }}
              className="object-cover w-full h-48"
              alt=""
            />
          </PhotoView>
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold text-2xl leading-5 hover:text-deep-purple-accent-400">
                {title}
              </h6>
              <p className="text-sm text-gray-900">
                {description.slice(0, 100)}...
              </p>
              <p className="text-xl text-deep-purple-accent-400 font-semibold mt-2">
                Price: ${price}
              </p>
              <div className="flex justify-between items-center">
                <Link to={`/allservices/${service_id}`}>
                  <button className="focus:outline-none text-white bg-deep-purple-accent-400 hover:bg-gray-400 hover:text-black focus:ring-4 font-semibold rounded-md text-sm px-5 py-2.5 mb-2">
                    View Details
                  </button>
                </Link>
                <AddToCartButton addToCart={addToCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
