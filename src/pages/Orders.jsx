import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { PackageCheck, MapPin } from "lucide-react";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t pt-12 pb-8">
        <div className="mb-8">
          <Title text1={"MY"} text2={"ORDERS"} />
          <p className="mt-2 text-gray-600 text-sm">
            View and track your orders
          </p>
        </div>

        <div className="space-y-6">
          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Product Info Section */}
                <div className="flex gap-6">
                  <div className="relative">
                    <img
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
                      src={item.image[0]}
                      alt={item.name}
                    />
                    <span className="absolute top-2 left-2 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full border border-green-200">
                      Active
                    </span>
                  </div>

                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        {item.name}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <span className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {currency} {item.price}
                            </span>
                          </span>
                          <span className="flex items-center gap-2">
                            Quantity:{" "}
                            <span className="font-medium text-gray-900">1</span>
                          </span>
                          <span className="flex items-center gap-2">
                            Size:{" "}
                            <span className="font-medium text-gray-900">M</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                      Ordered on{" "}
                      <span className="font-medium text-gray-900">
                        Nov 11, 2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status & Actions Section */}
                <div className="md:w-1/3 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-green-600">
                    <PackageCheck className="w-5 h-5" />
                    <span className="text-sm font-medium">Ready to ship</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                      <MapPin className="w-4 h-4" />
                      Track Order
                    </button>
                    <button className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
