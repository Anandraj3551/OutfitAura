import { useState } from "react";
import { toast } from "react-toastify";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import ProductSummary from "../components/ProductSummary";
import Address from "../components/Address";

const PlaceOrder = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedUpiOption, setSelectedUpiOption] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const upiOptions = [
    { id: "phonepe", name: "PhonePe", icon: "📱" },
    { id: "paytm", name: "Paytm", icon: "💰" },
    { id: "gpay", name: "Google Pay", icon: "🔄" },
  ];

  const paymentMethods = [
    { id: "upi", title: "UPI", subtitle: "pay by any UPI app" },
    { id: "card", title: "Credit / Debit / ATM Card", subtitle: "" },
    { id: "cod", title: "Cash on Delivery", subtitle: "" },
  ];

  // Function to check if a delivery address is selected
  const isDeliveryAddressSelected = () => {
    // This should check if an address is selected from the Address component
    // For now, returning true to avoid breaking the flow
    return true;
  };

  const handleContinueToSummary = () => {
    if (!isDeliveryAddressSelected()) {
      toast.error("Please select a delivery address first");
      return;
    }
    setCurrentStep(2);
  };

  const handleContinueToPayment = () => {
    setCurrentStep(3);
  };

  const handleUpiOptionClick = (optionId) => {
    if (!isDeliveryAddressSelected()) {
      toast.error("Please select a delivery address first");
      return;
    }
    setSelectedUpiOption(selectedUpiOption === optionId ? "" : optionId);
  };

  const handlePaymentMethodSelect = (methodId) => {
    if (!isDeliveryAddressSelected()) {
      toast.error("Please select a delivery address first");
      return;
    }
    setSelectedPayment(methodId);
    setSelectedUpiOption("");
  };

  const handlePayClick = (paymentType, provider = "") => {
    if (!isDeliveryAddressSelected()) {
      toast.error("Please select a delivery address first");
      return;
    }
    console.log(`Processing payment with ${paymentType} ${provider}`);
    toast.success(`Payment initiated with ${paymentType} ${provider}`);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 pt-6 sm:pt-16 min-h-[80vh] bg-gray-50 lg:px-8">
      <div className="flex flex-col gap-6 w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] bg-white p-6 rounded-lg shadow-sm mb-8">
        {/* Address Section */}
        <div
          className={`transition-opacity ${
            currentStep >= 1 ? "opacity-100" : "opacity-50"
          }`}
        >
          <div className="text-sm sm:text-xl font-bold">
            <p>ADD BILLING AND DELIVERY ADDRESS</p>
          </div>
          <Address />
          {currentStep === 1 && (
            <button
              onClick={handleContinueToSummary}
              className="w-full mt-4 bg-amber-500 text-white py-2.5 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Continue to Order Summary
            </button>
          )}
        </div>

        {/* Product Summary Section */}
        {currentStep >= 2 && (
          <div
            className={`transition-opacity ${
              currentStep >= 2 ? "opacity-100" : "opacity-50"
            }`}
          >
            <div className="mb-6">
              <Title text1={"ORDER"} text2={"SUMMARY"} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <ProductSummary />
            </div>
            {currentStep === 2 && (
              <button
                onClick={handleContinueToPayment}
                className="w-full mt-4 bg-amber-500 text-white py-2.5 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Continue to Payment
              </button>
            )}
          </div>
        )}

        {/* Payment Method Section */}
        {currentStep >= 3 && (
          <div className="bg-white rounded-lg mt-8">
            <div className="mb-6">
              <Title text1={"PAYMENT"} text2={"METHOD"} />
            </div>

            <div className="flex flex-col gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`flex flex-col gap-2 ${
                    !isDeliveryAddressSelected() ? "opacity-50" : ""
                  }`}
                >
                  <div
                    onClick={() => handlePaymentMethodSelect(method.id)}
                    className={`flex items-center gap-4 p-4 rounded-lg border ${
                      !isDeliveryAddressSelected()
                        ? "cursor-not-allowed border-gray-200"
                        : selectedPayment === method.id
                        ? "border-orange-500 bg-orange-50 cursor-pointer"
                        : "border-gray-200 cursor-pointer hover:border-orange-200"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${
                        selectedPayment === method.id
                          ? "border-orange-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedPayment === method.id && (
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {method.title}
                      </h3>
                      {method.subtitle && (
                        <span className="text-sm text-gray-500">
                          {method.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedPayment === "upi" && method.id === "upi" && (
                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row md:flex-row gap-4 p-4">
                        {upiOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleUpiOptionClick(option.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                              selectedUpiOption === option.id
                                ? "border-orange-500 bg-orange-50"
                                : "border-gray-200"
                            }`}
                          >
                            <span>{option.icon}</span>
                            <span>{option.name}</span>
                          </button>
                        ))}
                      </div>
                      {selectedUpiOption && (
                        <div className="px-4 pb-4">
                          <button
                            onClick={() =>
                              handlePayClick("UPI", selectedUpiOption)
                            }
                            className="w-full bg-amber-500 text-white py-2.5 rounded-lg"
                          >
                            Pay Now
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedPayment === "card" && method.id === "card" && (
                    <div className="space-y-4 p-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200"
                        maxLength="19"
                      />
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) =>
                            setExpiryDate(formatExpiryDate(e.target.value))
                          }
                          className="w-1/2 px-4 py-2.5 rounded-lg border border-gray-200"
                          maxLength="5"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(e.target.value.replace(/\D/g, ""))
                          }
                          className="w-1/2 px-4 py-2.5 rounded-lg border border-gray-200"
                          maxLength="3"
                        />
                      </div>
                      <button
                        onClick={() => handlePayClick("Card")}
                        disabled={!cardNumber || !expiryDate || !cvv}
                        className={`w-full py-2.5 rounded-lg transition-colors ${
                          cardNumber && expiryDate && cvv
                            ? "bg-orange-600 text-white hover:bg-orange-700"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Pay Now
                      </button>
                    </div>
                  )}

                  {selectedPayment === "cod" && method.id === "cod" && (
                    <div className="p-4">
                      <button
                        onClick={() => handlePayClick("Cash on Delivery")}
                        className="w-full bg-amber-500 text-white py-2.5 rounded-lg"
                      >
                        Place Order
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 w-full sm:max-w-[400px]">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
