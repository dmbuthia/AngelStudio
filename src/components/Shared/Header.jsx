import React, { useContext, useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../assets/logo2.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(toast.warning("User logged out!"))
      .catch((error) => console.log(error));
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add cart state

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart on click
  };  

  return (
    <div className="dark:bg-gray-200">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="AngelStudio"
              title="AngelStudio"
              className="inline-flex items-center mr-8"
            >
              <img src={logo} alt="AngelStudio" className="w-32 h-32 mr-2" />
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                AngelStudio
              </span> */}
            </Link>

            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/About"
                  aria-label="services"
                  title="services"
                  className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About
                </Link>
              </li>

              <li className="relative">
                <Link
                  to="/AddOns"
                  aria-label="AddOns"
                  title="AddOns"
                  className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  onClick={handleDropdownToggle} // Toggle dropdown on click
                >
                  Add Ons
                </Link>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <li>
                      <Link
                        to="/Gallery"
                        aria-label="Gallery"
                        title="Gallery"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Contact"
                        aria-label="Contact"
                        title="Contact"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Frequently"
                        aria-label="FAQ"
                        title="FAQ"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Reservation"
                        aria-label="Reservation"
                        title="Reservation"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        Reservation
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/allservices"
                  aria-label="services"
                  title="services"
                  className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <>
                  {user?.uid ? (
                    <>
                      <span className="mr-3">
                        <Link
                          to="/myreviews"
                          aria-label="My Reviews"
                          title="My Reviews"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My Reviews
                        </Link>
                      </span>
                      <span className="ml-3">
                        <Link
                          to="/addservice"
                          aria-label="Add Service"
                          title="Add Service"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Service
                        </Link>
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <>
                {user?.uid ? (
                  <>
                    <span className="mr-5 text-deep-purple-accent-400 font-semibold">
                      Hello {user?.displayName}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-gray-700 hover:text-white text-gray-100"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      aria-label="Sign in"
                      title="Sign in"
                      className="font-semibold tracking-wide text-deep-purple-accent-400 transition-colors duration-200 hover:text-gray-700"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/signup"
                      className="ml-5 inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </>
            </li>
            {user?.photoURL ? (
              <img
                aria-label={user?.displayName}
                title={user?.displayName}
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
              ></img>
            ) : (
              <FaUser></FaUser>
            )}
            <button
  aria-label="Cart"
  title="Cart"
  className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
  onClick={handleCartToggle}
>
  <FaShoppingCart className="w-5 text-gray-600" />
</button>{isCartOpen && (
  <div className="absolute top-0 right-0 p-5 bg-white border rounded shadow-sm">
    {/* Add your cart content here */}
    <p>Your cart is empty</p>
  </div>
)}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={handleMenuToggle}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="AngelStudio"
                        title="AngelStudio"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          AngelStudio
                        </span>
                      </Link>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/About"
                          aria-label="About"
                          title="About"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          to="/AddOns"
                          aria-label="AddOns"
                          title="AddOns"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Ons
                        </Link>

                        <li>
                          <Link
                            to="/Gallery"
                            aria-label="Gallery"
                            title="Gallery"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                          >
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Contact"
                            aria-label="Contact"
                            title="Contact"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Frequently"
                            aria-label="FAQ"
                            title="FAQ"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Reservation"
                            aria-label="Reservation"
                            title="Reservation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-deep-purple-accent-100"
                          >
                            Reservation
                          </Link>
                        </li>
                      </li>
                      <li>
                        <Link
                          to="/allservices"
                          aria-label="Services"
                          title="Services"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      {user?.uid ? (
                        <li>
                          <Link
                            to="/myreviews"
                            aria-label="My Reviews"
                            title="My Reviews"
                            className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Reviews
                          </Link>
                          <Link
                            to="/addservice"
                            aria-label="Add Service"
                            title="Add Service"
                            className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add Service
                          </Link>
                        </li>
                      ) : null}
                      <li>
                        {user?.uid ? (
                          <>
                            <span className="mr-5 text-deep-purple-accent-400 font-semibold">
                              {user?.displayName}
                            </span>
                            <button
                              onClick={handleLogout}
                              className="px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-gray-700 hover:text-white text-gray-100"
                            >
                              Log out
                            </button>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/signin"
                              aria-label="Sign in"
                              title="Sign in"
                              className="font-semibold tracking-wide text-deep-purple-accent-400  transition-colors duration-200 hover:text-gray-700"
                            >
                              Sign in
                            </Link>
                            <Link
                              to="/signup"
                              className="ml-5 inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
