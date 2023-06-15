import React, { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import PrivateRoute from '../../../Routes/PrivateRoute';
import AllReviews from '../Reviews/AllReviews';
import ReviewForm from '../Reviews/ReviewForm';

const ServiceDetails = () => {
  const [allServices, setAllServices] = useState();
  const services = useLoaderData();
  const { _id, service_id, title, img, price, description } = services;
  const { user } = useContext(AuthContext);

  const addToCart = () => {
    // Get the existing cart items from the local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create a new item object with the necessary details
    const newItem = {
      id: service_id,
      title,
      img,
      price,
    };

    // Add the new item to the existing cart items
    const updatedCartItems = [...existingCartItems, newItem];

    // Update the cart items in the local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    console.log('Item added to cart');
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <PhotoProvider
        speed={() => 800}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
      >
        <div className='text-center mt-10'>
          <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300 mb-10">
            Service Details
          </p>
        </div>
        <div className='flex justify-center align-middle mb-10'>
          <div
            aria-label="View Item"
            className="lg:w-1/4 w-full inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
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
                    {description}
                  </p>
                  <p className="text-xl text-deep-purple-accent-400 font-semibold mt-2">Price: ${price}</p>
                  <button
                    onClick={addToCart}
                    className="px-4 py-2 mt-4 font-semibold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PhotoProvider>
      <AllReviews></AllReviews>
      <div className='text-center mt-20'>
        <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300 mb-5">
          Your Feedback
        </p>
      </div>
      <>
        {user?.uid ? (
          <PrivateRoute>
            <ReviewForm></ReviewForm>
          </PrivateRoute>
        ) : (
          <div className='text-3xl font-semibold text-center mb-10'>
            <h1>Please, <span className='text-deep-purple-accent-400 hover:text-gray-600'><Link to='/signin'>SignIn</Link></span> to add a review</h1>
          </div>
        )}
      </>
    </div>
  );
};

export default ServiceDetails;
