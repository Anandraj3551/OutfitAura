import kid from "./kid.jpg";
import kidpajama from "./kidpajama.png";
import men from "./men.jpg";
import shoes_1 from "./shoes_1.png";
import shoes from "./shoes.jpeg";
import shuit from "./shuit.png";
import tshirt from "./tshirt.png";
import women from "./women.jpg";
import menTshirt from "./menTshirt.jpg";
import girlTshirt from "./girlTshirt.jpg";
import shoes3 from "./shoes3.jpg";
import kidStore from "./kidStore.jpg";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import mobile from "./mobile.jpg";
import beauty from "./beauty.jpg";
import headphones from "./headphones.jpg";
import jacket from "./jacket.jpg";
import palazzo from "./palazzo.jpg";
import topdeal from "./topdeal.jpg";
import littlegirl from "./littlegirl.jpg";
import kichen from "./kichen.jpg";
import aboutstory from "./aboutstory.png";

import logo from "./logo.png";
import logo1 from "./logo1.png";
import search from "./search.png";
import bin from "./bin.png";
import cart from "./cart.png";
import profile from "./profile.png";
import menu from "./menu.png";
import close from "./close.png";
import all from "./all.png";
import wishlist from "./wishlist.png";
import payment from "./payment.png";
import original from "./original.png";
import delivery from "./delivery.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import whatsapp from "./whatsapp.png";
import visa from "./visa.png";
import dropdown from "./dropdown.png";
import star from "./star.png";
import thambnail from "./thambnail.png";

export const assets = {
  thambnail,
  aboutstory,
  beauty,
  card1,
  card2,
  card3,
  card4,
  dropdown,
  headphones,
  littlegirl,
  jacket,
  kid,
  kidStore,
  kidpajama,
  kichen,
  men,
  menTshirt,
  mobile,
  palazzo,
  shoes_1,
  shoes3,
  shoes,
  shuit,
  tshirt,
  topdeal,
  women,
  girlTshirt,
  logo,
  logo1,
  search,
  bin,
  whatsapp,
  wishlist,
  cart,
  profile,
  menu,
  close,
  all,
  payment,
  original,
  delivery,
  twitter,
  facebook,
  instagram,
  youtube,
  linkedin,
  visa,
  star,
};
export const products = [
  {
    _id: "01",
    name: "Women Round Neck Pure Cotton Top",
    description:
      "Stay stylish and comfortable with our Women Round Neck Pure Cotton Top, perfect for any casual occasion. Crafted from soft, breathable cotton, it offers a relaxed fit and timeless appeal.",
    price: 1299, // Discounted price
    originalPrice: 1999, // Original price
    discount: "35% off", // Discount percentage
    rating: 4.4, // Rating
    numberOfReviews: 240, // Number of reviews
    image: [girlTshirt],
    category: "women",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "02",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "Elevate your wardrobe with our Men Round Neck Pure Cotton T-shirt. This versatile piece combines comfort and style, making it ideal for layering or wearing solo.",
    price: 399, // Discounted price
    originalPrice: 599, // Original price
    discount: "33% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 180, // Number of reviews
    image: [menTshirt, girlTshirt],
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "03",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "Comfort meets style in our Boy Round Neck Pure Cotton T-shirt. Perfect for everyday wear, this t-shirt is soft, durable, and available in fun colors to match your child’s personality.",
    price: 349, // Discounted price
    originalPrice: 499, // Original price
    discount: "30% off", // Discount percentage
    rating: 4.3, // Rating
    numberOfReviews: 150, // Number of reviews
    image: [kidStore],
    category: "kid",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "04",
    name: "Women Round Neck Pure Cotton Top",
    description:
      "Enjoy a blend of comfort and style with our Women Round Neck Pure Cotton Top. Ideal for both casual outings and office wear, this top is a wardrobe essential.",
    price: 1499, // Discounted price
    originalPrice: 1999, // Original price
    discount: "25% off", // Discount percentage
    rating: 4.6, // Rating
    numberOfReviews: 320, // Number of reviews
    image: [girlTshirt],
    category: "women",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "05",
    name: "Women's Slip-On Canvas Loafers",
    description:
      "Step out in style with our Women's Slip-On Canvas Loafers. These trendy shoes offer unmatched comfort and a chic look, perfect for any casual outing.",
    price: 1799, // Discounted price
    originalPrice: 2499, // Original price
    discount: "28% off", // Discount percentage
    rating: 4.4, // Rating
    numberOfReviews: 410, // Number of reviews
    image: [shoes3],
    category: "women",
    subCategory: "footwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "06",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "Experience all-day comfort with our Men Round Neck Pure Cotton T-shirt. Soft and breathable, it's the perfect companion for your active lifestyle.",
    price: 499, // Discounted price
    originalPrice: 599, // Original price
    discount: "17% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 220, // Number of reviews
    image: [menTshirt],
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "07",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "Let your child express their style with our Boy Round Neck Pure Cotton T-shirt. Featuring a soft touch and vibrant colors, it's perfect for every adventure.",
    price: 349, // Discounted price
    originalPrice: 499, // Original price
    discount: "30% off", // Discount percentage
    rating: 4.3, // Rating
    numberOfReviews: 135, // Number of reviews
    image: [kidStore],
    category: "kid",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "08",
    name: "Men's Slip-On Canvas Sneakers",
    description:
      "Casual meets cool with our Men's Slip-On Canvas Sneakers. Easy to wear and stylish, they provide the perfect finishing touch to any laid-back outfit.",
    price: 1799, // Discounted price
    originalPrice: 2499, // Original price
    discount: "28% off", // Discount percentage
    rating: 4.4, // Rating
    numberOfReviews: 390, // Number of reviews
    image: [shoes3],
    category: "men",
    subCategory: "footwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "09",
    name: "Women Round Neck Pure Cotton Top",
    description:
      "Our Women Round Neck Pure Cotton Top combines elegance with comfort. Ideal for any occasion, this top enhances your style effortlessly.",
    price: 1499, // Discounted price
    originalPrice: 1999, // Original price
    discount: "25% off", // Discount percentage
    rating: 4.6, // Rating
    numberOfReviews: 310, // Number of reviews
    image: [girlTshirt],
    category: "women",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "10",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "Stay cool and comfortable in our Men Round Neck Pure Cotton T-shirt. The perfect blend of style and ease, it’s a must-have for your everyday wardrobe.",
    price: 499, // Discounted price
    originalPrice: 599, // Original price
    discount: "17% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 200, // Number of reviews
    image: [menTshirt],
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "11",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "Experience comfort and style with our Men Round Neck Pure Cotton T-shirt. Perfect for any casual occasion, it offers a great fit and soft fabric.",
    price: 499, // Discounted price
    originalPrice: 599, // Original price
    discount: "17% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 180, // Number of reviews
    image: [menTshirt],
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "12",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "Make a statement with our Men Slim Fit Relaxed Denim Jacket. Stylish and versatile, it’s perfect for layering and adds a touch of rugged charm to any outfit.",
    price: 1999, // Discounted price
    originalPrice: 2499, // Original price
    discount: "20% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 260, // Number of reviews
    image: [jacket],
    category: "men",
    subCategory: "outerwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "13",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "automatically transformed into React code without needing the explicit import.",
    price: 1999, // Discounted price
    originalPrice: 2499, // Original price
    discount: "20% off", // Discount percentage
    rating: 4.5, // Rating
    numberOfReviews: 180, // Number of reviews
    image: [jacket],
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "14",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "automatically transformed into React code without needing the explicit import.",
    price: 1499, // Discounted price
    originalPrice: 1999, // Original price
    discount: "25% off", // Discount percentage
    rating: 4.6, // Rating
    numberOfReviews: 320, // Number of reviews
    image: [palazzo],
    category: "women",
    subCategory: "bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "15",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "automatically transformed into React code without needing the explicit import.",
    price: 1499, // Discounted price
    originalPrice: 1999, // Original price
    discount: "25% off", // Discount percentage
    rating: 4.6, // Rating
    numberOfReviews: 320, // Number of reviews
    image: [palazzo],
    category: "women",
    subCategory: "bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
  {
    _id: "16",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "automatically transformed into React code without needing the explicit import.",
    price: 1499, // Discounted price
    originalPrice: 1999, // Original price
    discount: "25% off", // Discount percentage
    rating: 4.6, // Rating
    numberOfReviews: 320, // Number of reviews
    image: [palazzo],
    category: "women",
    subCategory: "bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    newArrival: true,
    bestSeller: true,
  },
];
