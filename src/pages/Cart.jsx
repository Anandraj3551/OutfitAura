import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const CartItem = ({ item, productData, currency, updateQuantity }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-row sm:flex-row gap-6">
        {/* Image Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg w-full sm:w-32 h-32">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
              src={productData.image[0]}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                {productData.name}
              </h3>
              <button
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <img className="w-5 h-5" src={assets.bin} alt="Remove" />
              </button>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">
                {currency}
                {productData.price}
              </span>
              {productData.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-lg line-through text-gray-400">
                    {currency}
                    {productData.originalPrice}
                  </span>
                  {productData.discount && (
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                      {productData.discount} OFF
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Size */}
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Size:</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md font-medium text-gray-700">
                  {item.size}
                </span>
              </div>

              {/* Rating */}
              {productData.rating && (
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-yellow-400">
                    <span className="text-gray-700 font-medium mr-1">
                      {productData.rating}
                    </span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({productData.numberOfReviews})
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quantity Input */}
          <div className="mt-4">
            <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="w-20 px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  productData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string,
    rating: PropTypes.number,
    numberOfReviews: PropTypes.number,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section - Left Side */}
          <div className="flex-1 space-y-4">
            {cartData.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12">
                <div className="text-center">
                  <div className="text-gray-400 text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500">
                    Looks like you haven{"'"}t added any items to your cart yet.
                  </p>
                </div>
              </div>
            ) : (
              cartData.map((item, index) => {
                const productData = products.find(
                  (product) => product._id === item._id
                );
                return (
                  <CartItem
                    key={index}
                    item={item}
                    productData={productData}
                    currency={currency}
                    updateQuantity={updateQuantity}
                  />
                );
              })
            )}
          </div>

          {/* Cart Total Section - Right Side */}
          <div className="lg:w-[400px]">
            <div className="sticky top-8">
              <CartTotal />
              <div className="w-full">
                <button
                  onClick={() => navigate("/place-order")}
                  disabled={cartData.length === 0}
                  className={`w-full rounded text-sm my-8 px-5 py-3 transition-colors ${
                    cartData.length === 0
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-orange-600 hover:bg-orange-700 text-white"
                  }`}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
