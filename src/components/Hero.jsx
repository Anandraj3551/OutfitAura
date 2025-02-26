import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <div className="text-center pt-8">
        <h1 className="font-medium text-3xl pb-2 text-orange-600 ">
          Outfit-Aura is India’s Best Online Gift Store
        </h1>
        <p className="font-medium text-gray-700">
          Personalized Gifts | Corporate Gifts | Business Gifts | Doctor Gifts |
          Promotional Gifts
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
        {/* Offer Banner 1 */}
        <div className="border border-gray-400">
          <img
            className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            src={assets.women}
            alt="Offer 1"
          />
        </div>

        {/* Offer Banner 2 */}
        <div className="border border-gray-400">
          <img
            className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            src={assets.women}
            alt="Offer 2"
          />
        </div>

        {/* Offer Banner 3 */}
        <div className="border border-gray-400">
          <img
            className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            src={assets.women}
            alt="Offer 3"
          />
        </div>

        {/* Offer Banner 4 */}
        <div className="border border-gray-400">
          <img
            className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            src={assets.women}
            alt="Offer 4"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
