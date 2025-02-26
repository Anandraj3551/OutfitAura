import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const ProductSummaryItem = ({
  item,
  productData,
  currency,
  updateQuantity,
  onSaveForLater,
}) => {
  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    const options = {
      day: "numeric",
      month: "short",
      weekday: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white rounded-lg  mb-4   duration-200">
      <div className="flex flex-row gap-4">
        {/* Image - Updated with responsive sizing */}
        <div className="relative w-24 sm:w-32 h-24 sm:h-32">
          <img
            className="w-full h-full object-cover cursor-pointer rounded-lg"
            src={productData.image[0]}
            alt={productData.name}
          />
          <div className="flex items-center gap-2 pt-1 pl-2">
            <div className="inline-flex items-center border rounded overflow-hidden">
              <button
                onClick={() =>
                  updateQuantity(
                    item._id,
                    item.size,
                    Math.max(1, item.quantity - 1)
                  )
                }
                className="px-2 py-1 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1 border-x">{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item._id, item.size, item.quantity + 1)
                }
                className="px-2 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 line-clamp-2">
              {productData.name}
            </h3>
          </div>

          <div className="space-y-2">
            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">
                {currency}
                {productData.price}
              </span>
              {productData.originalPrice && (
                <>
                  <span className="text-sm line-through text-gray-400">
                    {currency}
                    {productData.originalPrice}
                  </span>
                  {productData.discount && (
                    <span className="px-2 py-1  text-green-600 text-xs font-medium ">
                      {productData.discount} OFF
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Size and Quantity */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Size:</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-sm font-medium">
                  {item.size}
                </span>
              </div>
            </div>

            {/* Rating */}
            {productData.rating && (
              <div className="flex items-center gap-1">
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm text-gray-700 font-medium mr-1">
                    {productData.rating}
                  </span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">
                  ({productData.numberOfReviews})
                </span>
              </div>
            )}

            {/* Save for Later and Remove buttons */}
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => onSaveForLater(item._id)}
                className="text-sm text-black"
              >
                Save for later
              </button>
              <button
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="text-sm text-black "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col  mt-2 gap-2">
        <p className="text-gray-600 font-medium">{getDeliveryDate()}</p>
        <p className="text-sm text-gray-500">Standard Delivery</p>
      </div>
    </div>
  );
};
ProductSummaryItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  productData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string,
    rating: PropTypes.number,
    numberOfReviews: PropTypes.number,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  onSaveForLater: PropTypes.func.isRequired,
};

const ProductSummary = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

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

  const handleSaveForLater = (productId) => {
    const itemToSave = cartData.find((item) => item._id === productId);
    if (itemToSave) {
      setSavedItems([...savedItems, itemToSave]);
      updateQuantity(productId, itemToSave.size, 0);
    }
  };

  return (
    <div className=" rounded-lg ">
      {/* Active Cart Items */}
      <div className="space-y-4">
        {cartData.map((item) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <ProductSummaryItem
              key={`${item._id}-${item.size}`}
              item={item}
              productData={productData}
              currency={currency}
              updateQuantity={updateQuantity}
              onSaveForLater={handleSaveForLater}
            />
          );
        })}
      </div>
    </div>
  );
};

ProductSummary.contextTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.arrayOf(PropTypes.string).isRequired,
      originalPrice: PropTypes.number,
      discount: PropTypes.string,
      rating: PropTypes.number,
      numberOfReviews: PropTypes.number,
    })
  ).isRequired,
  currency: PropTypes.string.isRequired,
  cartItems: PropTypes.object.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default ProductSummary;
