import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      isDefault: true,
      firstName: "X",
      lastName: "Faishion",
      email: "x.faishion@gmail.com",
      HouseNo: "xxxx",
      city: "Dehli",
      state: "Dehli",
      zipCode: "12121",
      country: "India",
      phoneNumber: "1234567890",
      alternateNumber: "7777777777",
    },
    {
      id: 2,
      type: "Office",
      isDefault: false,
      firstName: "Anand",
      lastName: "Kumar",
      email: "anand.office@example.com",
      HouseNo: "Business avc",
      city: "Mohali",
      state: "Punjab",
      zipCode: "14013",
      country: "India",
      phoneNumber: "8989898989",
      alternateNumber: "8888888888",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    type: "Home",
    firstName: "",
    lastName: "",
    email: "",
    HouseNo: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    alternateNumber: "",
    isDefault: false,
  });

  const [showAddressForm, setShowAddressForm] = useState(false);

  const validateForm = () => {
    const requiredFields = [
      { field: "firstName", label: "First Name" },
      { field: "lastName", label: "Last Name" },
      { field: "email", label: "Email" },
      { field: "HouseNo", label: "House No" },
      { field: "city", label: "City" },
      { field: "state", label: "State" },
      { field: "zipCode", label: "Zip Code" },
      { field: "country", label: "Country" },
      { field: "phoneNumber", label: "Phone Number" },
      { field: "alternateNumber", label: "Alternate Number" },
    ];

    const emptyFields = requiredFields.filter(
      ({ field }) => !newAddress[field]?.trim()
    );

    if (emptyFields.length > 0) {
      const emptyFieldNames = emptyFields.map(({ label }) => label).join(", ");
      toast.error(`Please fill in all required fields: ${emptyFieldNames}`);
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newAddress.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(newAddress.phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    if (!phoneRegex.test(newAddress.alternateNumber)) {
      toast.error("Please enter a valid 10-digit alternate number");
      return false;
    }

    return true;
  };

  const handleAddAddress = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newId =
      addresses.length > 0 ? Math.max(...addresses.map((a) => a.id)) + 1 : 1;

    setAddresses([
      ...addresses,
      {
        ...newAddress,
        id: newId,
        isDefault: addresses.length === 0 ? true : newAddress.isDefault,
      },
    ]);

    toast.success("Address saved successfully!");

    // Reset form
    setNewAddress({
      type: "Home",
      firstName: "",
      lastName: "",
      email: "",
      HouseNo: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      alternateNumber: "",
      isDefault: false,
    });

    setShowAddressForm(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    toast.success("Address deleted successfully!");
  };

  const handleSetDefaultAddress = (id) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
    toast.success("Default address updated!");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Saved Addresses</h2>
        <button
          onClick={() => setShowAddressForm(!showAddressForm)}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          {showAddressForm ? "Cancel" : "Add New Address"}
        </button>
      </div>

      {showAddressForm && (
        <form
          onSubmit={handleAddAddress}
          className="mb-6 space-y-4 border p-4 rounded-lg"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Type
              </label>
              <select
                name="type"
                value={newAddress.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={newAddress.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={newAddress.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={newAddress.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                House No, Building name *
              </label>
              <input
                type="text"
                name="HouseNo"
                value={newAddress.HouseNo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State *
              </label>
              <input
                type="text"
                name="state"
                value={newAddress.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code *
              </label>
              <input
                type="text"
                name="zipCode"
                value={newAddress.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <input
                type="text"
                name="country"
                value={newAddress.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={newAddress.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="10 digits"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternate Number *
              </label>
              <input
                type="text"
                name="alternateNumber"
                value={newAddress.alternateNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="10 digits"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <label className="text-sm font-medium text-gray-700">
              Set as Default
            </label>
            <input
              type="checkbox"
              name="isDefault"
              checked={newAddress.isDefault}
              onChange={handleInputChange}
              className="w-4 h-4"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Save Address
          </button>
        </form>
      )}

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`p-4 border rounded-lg ${
              address.isDefault ? "border-orange-500" : "border-gray-300"
            }`}
          >
            <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      address.type === "Home"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {address.type}
                  </span>
                  {address.isDefault && (
                    <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {`${address.firstName} ${address.lastName}`}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Contact Details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 shrink-0"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="text-sm truncate">{address.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 shrink-0"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      <div className="text-sm">
                        <span className="block">{address.phoneNumber}</span>
                        <span className="text-gray-500">
                          Alt: {address.alternateNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div className="flex items-start text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 shrink-0"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <div className="text-sm">
                      <p className="font-medium">{address.HouseNo}</p>
                      <p>{`${address.city}, ${address.state} ${address.zipCode}`}</p>
                      <p>{address.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-4 py-3 bg-gray-50 border-t flex flex-wrap gap-2">
                {!address.isDefault && (
                  <button
                    onClick={() => handleSetDefaultAddress(address.id)}
                    className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 rounded-md hover:bg-orange-100 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    Set as Default
                  </button>
                )}
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
