import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Category = () => {
  const navigate = useNavigate();
  const { handleSearch } = useContext(ShopContext);

  const handleCategoryClick = (categoryType, subCategoryType) => {
    // Clear any existing search
    handleSearch("");

    // First navigate to collection page
    navigate("/collection");

    // Wait for component to mount before applying filters
    setTimeout(() => {
      // Handle category filter
      if (categoryType) {
        const categoryInput = document.querySelector(
          `input[value="${categoryType}"]`
        );
        if (categoryInput) {
          categoryInput.click();
        }
      }

      // Handle subcategory filter
      if (subCategoryType) {
        const subCategoryInput = document.querySelector(
          `input[value="${subCategoryType}"]`
        );
        if (subCategoryInput) {
          subCategoryInput.click();
        }
      }
    }, 100);
  };

  const categories = [
    {
      type: "men",
      image: assets.men,
      label: "Men",
      alt: "Men's Fashion",
    },
    {
      type: "women",
      image: assets.women,
      label: "Women",
      alt: "Women's Fashion",
    },
    {
      type: "kid",
      image: assets.kid,
      label: "Kids",
      alt: "Kids' Fashion",
    },
    {
      type: null,
      subType: "footwear",
      image: assets.shoes,
      label: "Footwear",
      alt: "Footwear",
    },
  ];

  return (
    <div>
      <div className="px-3 py-3 bg-white flex flex-wrap justify-center">
        {categories.map((category) => (
          <div
            key={category.label}
            onClick={() => handleCategoryClick(category.type, category.subType)}
            className="shrink-0 hover:cursor-pointer hover:text-[#2874F4] mx-2 my-2 text-center font-semibold text-sm"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={category.image}
                alt={category.alt}
              />
            </div>
            <p className="mt-1">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
