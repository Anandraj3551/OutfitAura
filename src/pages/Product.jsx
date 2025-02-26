import ReletedProducts from "../components/ReletedProducts";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

import ShareModal from "../components/ShareModal";

import {
  Heart,
  ShoppingBag,
  Truck,
  Clock,
  Shield,
  Star,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const {
    products,
    currency,
    addToCart,
    navigate,
    toggleWishlist,
    isInWishlist,
  } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setSelectedImage(item.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const decreaseQty = () => setQty((prev) => Math.max(1, prev - 1));
  const increaseQty = () => setQty((prev) => Math.min(10, prev + 1));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Product Gallery Section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnail Gallery */}
              <div
                className="flex md:flex-col order-2 md:order-1 md:w-20 gap-3 
                            overflow-x-auto md:overflow-y-auto md:max-h-[400px] 
                            thumbnails-scroll px-1 py-2 md:py-1
                            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                            flex-nowrap md:flex-wrap"
              >
                {productData.image.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`flex-shrink-0 w-16 md:w-full aspect-square rounded-lg 
                              overflow-hidden border-2 transition-all duration-200
                              hover:opacity-95 ${
                                selectedImage === img
                                  ? "border-emerald-500 ring-2 ring-emerald-500 ring-offset-2"
                                  : "border-gray-200 hover:border-emerald-200"
                              }`}
                  >
                    <img
                      src={img}
                      alt={`Product view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 order-1 md:order-2 h-[400px] rounded-xl overflow-hidden bg-gray-50">
                <img
                  src={selectedImage}
                  alt={productData.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2">
            <div
              className="
              /* Mobile height (< 640px) */
              h-[calc(100vh-6rem)] 
              /* Small tablets (640px - 767px) */
              sm:h-[calc(100vh-7rem)]
              /* iPads/tablets (768px - 1023px) */
              md:h-[calc(75vh-4rem)]
              /* Small laptops (1024px - 1279px) */
              lg:h-[calc(60vh-6rem)]
              /* Desktops (1280px and above) */
              xl:h-[calc(100vh-8rem)]
              /* Common styles */
              overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
              "
            >
              {" "}
              {/* Product Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  In Stock
                </span>
                <div className="flex items-center gap-4">
                  <button
                    // share button
                    onClick={() => setIsShareModalOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                  {/* change for wishlist */}
                  <button
                    onClick={() => toggleWishlist(productId)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isInWishlist(productId)
                          ? "text-red-500 fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  {/* end */}
                </div>
              </div>
              {/* Product Title & Price */}
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {productData.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(122 Reviews)</span>
              </div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {currency} {productData.price}
                </span>
                {productData.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {currency} {productData.originalPrice}
                  </span>
                )}
              </div>
              {/* Product Description */}
              <p className="text-gray-600 mb-6">{productData.description}</p>
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Select Size</span>
                  <button className="text-sm text-emerald-600 hover:text-emerald-700">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {productData.sizes.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSize(item)}
                      className={`h-10 rounded-lg font-medium transition-all duration-200 ${
                        size === item
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={decreaseQty}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center">{qty}</span>
                  <button
                    onClick={increaseQty}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span>Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>14-day easy returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>100% Secure checkout</span>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-4 sticky bottom-0 bg-white py-4">
                <button
                  onClick={() => addToCart(productData._id, size)}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/place-order")}
                  className="flex-1 border border-gray-300 px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors bg-orange-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex gap-8 -mb-px overflow-x-auto md:overflow-visible">
            {["description", "features", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p>{productData.description}</p>
              </div>
            )}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Premium quality materials</li>
                    <li>Comfort-fit design</li>
                    <li>Durable construction</li>
                    <li>Easy maintenance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Specifications</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      Material: {productData.material || "Premium Fabric"}
                    </li>
                    <li>Care Instructions: Machine washable</li>
                    <li>Country of Origin: Made in USA</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <p className="text-gray-600">
                      What people think about this product
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                <div className="space-y-6">
                  {/* Sample Reviews - You can map through actual reviews here */}
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        Verified Purchase
                      </span>
                    </div>
                    <h4 className="font-medium mb-2">Great product!</h4>
                    <p className="text-gray-600">Sample review content...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <ReletedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        productData={productData}
      />
    </div>
  );
};

export default Product;
