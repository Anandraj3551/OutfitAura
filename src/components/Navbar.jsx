import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { handleSearch, searchQuery, getCartCount, getWishlistCount } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  // Handle click outside of profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    // Add click event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/collection");
      setSearchVisible(false);
    }
  };

  const handleSearchChange = (e) => {
    handleSearch(e.target.value);
  };

  const handleProfileItemClick = (path) => {
    navigate(path);
    setIsProfileOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className={`${visible ? "hidden sm:block" : "block"}`}>
        <div className="flex items-center justify-between px-4 sm:px-10 font-medium pt-5 pb-3 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
          <img
            onClick={() => setVisible(true)}
            src={assets.menu}
            className="w-8 cursor-pointer"
            alt=""
          />
          <Link to="/">
            <img src={assets.logo} className="w-36 pl-4" alt="" />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden sm:flex flex-1 mx-10">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 flex items-center bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-colors"
              >
                <img
                  src={assets.search}
                  className="w-5 h-5 cursor-pointer"
                  alt="search"
                />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            {/* Mobile Search Toggle */}
            <img
              onClick={() => setSearchVisible(!searchVisible)}
              src={assets.search}
              className="w-8 cursor-pointer sm:hidden"
              alt="search"
            />

            <Link to="/wishlist" className="relative">
              <img src={assets.wishlist} className="w-8 min-w-5" alt="" />
              <p className="absolute right-[-8px] top-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getWishlistCount()}
              </p>
            </Link>

            <Link to="/cart" className="relative">
              <img src={assets.cart} className="w-8 min-w-5" alt="" />
              <p className="absolute right-[-8px] top-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>

            <div className="relative" ref={profileMenuRef}>
              <img
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-8 min-w-5 cursor-pointer"
                src={assets.profile}
                alt=""
              />
              {isProfileOpen && (
                <div
                  className={`absolute right-0 pt-4 z-10 bg-slate-100 text-gray-500 rounded w-36 py-3 px-5 transition-all duration-300 ease-in-out ${
                    isProfileOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <p
                    onClick={() => handleProfileItemClick("/profile")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => handleProfileItemClick("/Orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={() => handleProfileItemClick("/login")}
                    className="cursor-pointer hover:text-black"
                  >
                    Login/SignUp
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {/* Mobile Search Bar */}
        <div
          className={`sm:hidden fixed top-[60px] left-0 right-0 bg-white transition-all duration-300 ease-in-out z-50 ${
            searchVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="p-3">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 flex items-center bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-colors"
              >
                <img
                  src={assets.search}
                  className="w-5 h-5 cursor-pointer"
                  alt="search"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sidebar menu for all screens */}
      <div
        className={`fixed top-0 sm:top-20 left-0 sm:left-4 bottom-0 sm:bottom-auto bg-white z-50 transform transition-transform duration-300 shadow-lg rounded-lg ${
          visible ? "translate-x-0" : "translate-x-[-110%]"
        } sm:w-64 sm:h-auto w-full h-full`}
      >
        <div className="flex flex-col h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-5 border-b cursor-pointer"
          >
            <img className="h-10" src={assets.close} alt="" />
            <p className="text-lg cursor-pointer">Back</p>
          </div>

          <div className="flex flex-col">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
