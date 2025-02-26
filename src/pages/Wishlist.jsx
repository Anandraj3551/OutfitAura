import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Heart, ShoppingBag } from "lucide-react";
import PropTypes from "prop-types";

const WishlistItem = ({ productId, currency }) => {
  const { products, moveToCart, toggleWishlist } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");

  const productData = products.find((product) => product._id === productId);

  if (!productData) return null;

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
                onClick={() => toggleWishlist(productId)}
                className="text-red-500 hover:text-red-600 transition-colors p-1"
              >
                <Heart className="w-5 h-5 fill-current" />
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

            {/* Size Selection and Move to Cart */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Size</option>
                  {productData.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => moveToCart(productId, selectedSize)}
                  className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation for WishlistItem
WishlistItem.propTypes = {
  productId: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const Wishlist = () => {
  const { wishlistItems, currency } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Title text1={"YOUR"} text2={"WISHLIST"} />
        </div>

        <div className="space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12">
              <div className="text-center">
                <div className="text-gray-400 text-6xl mb-4">❤️</div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-500">
                  Start adding items you love to your wishlist
                </p>
              </div>
            </div>
          ) : (
            wishlistItems.map((productId) => (
              <WishlistItem
                key={productId}
                productId={productId}
                currency={currency}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
