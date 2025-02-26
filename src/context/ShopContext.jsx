import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 40;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [wishlistItems, setWishlistItems] = useState([]); // Add wishlist state

  const navigate = useNavigate();

  // Add to wishlist function
  const toggleWishlist = (productId) => {
    setWishlistItems((prevItems) => {
      const isItemInWishlist = prevItems.includes(productId);
      if (isItemInWishlist) {
        toast.success("Removed from wishlist");
        return prevItems.filter((id) => id !== productId);
      } else {
        toast.success("Added to wishlist");
        return [...prevItems, productId];
      }
    });
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.includes(productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  // Move to cart from wishlist
  const moveToCart = async (productId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    await addToCart(productId, size);
    setWishlistItems((prevItems) => prevItems.filter((id) => id !== productId));
    toast.success("Moved to cart");
  };

  // end

  // logic for add to cart item
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch {
          // No need to handle the error if it's not being used
        }
      }
    }

    return totalCount;
  };

  // end

  // delete item from  cart page
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  // for cartTotal section

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  // Add getOriginalAmount function here
  const getOriginalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.originalPrice * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  // cartTotal section end

  // end

  // Helper function to normalize text for searching
  const normalizeText = (text) => {
    return (
      text
        .toLowerCase()
        // Remove special characters and replace with spaces
        .replace(/[^a-z0-9\s]/g, " ")
        // Replace multiple spaces with single space
        .replace(/\s+/g, " ")
        // Remove spaces at start and end
        .trim()
    );
  };

  // Helper function to check if a product matches search terms
  const productMatchesSearch = (product, searchTerms) => {
    // Normalize product fields
    const normalizedName = normalizeText(product.name);
    const normalizedCategory = product.category
      ? normalizeText(product.category)
      : "";
    const normalizedSubCategory = product.subCategory
      ? normalizeText(product.subCategory)
      : "";

    // Additional keywords for common variations
    const keywords = [
      normalizedName,
      normalizedCategory,
      normalizedSubCategory,
      // Add common variations and abbreviations
      normalizedName.replace("shirt", "tshirt"),
      normalizedName.replace("tshirt", "t shirt"),
      normalizedName.replace("t shirt", "tee"),
      normalizedName.replace("trousers", "pants"),
      normalizedName.replace("sneakers", "shoes"),
    ];

    // Check if all search terms match any of the keywords
    return searchTerms.every((term) =>
      keywords.some((keyword) => keyword.includes(term))
    );
  };

  // Enhanced search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    // Normalize and split the search query into terms
    const searchTerms = normalizeText(query).split(" ");

    const searchResults = products.filter((product) =>
      productMatchesSearch(product, searchTerms)
    );

    setFilteredProducts(searchResults);
  };

  const value = {
    products: filteredProducts,
    allProducts: products,
    currency,
    delivery_fee,
    searchQuery,
    handleSearch,
    // cart
    cartItems,
    addToCart,
    getCartCount,
    //cart page
    updateQuantity,
    getCartAmount,
    getOriginalAmount, // Add this line here
    navigate,
    // wishlist
    wishlistItems,
    toggleWishlist,
    isInWishlist,
    moveToCart,
    getWishlistCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
