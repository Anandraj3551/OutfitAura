import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, getOriginalAmount } =
    useContext(ShopContext);

  const originalAmount = getOriginalAmount();
  const discountedAmount = getCartAmount();
  const totalSavings = originalAmount - discountedAmount;
  const finalTotal =
    discountedAmount === 0 ? 0 : discountedAmount + delivery_fee;

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm">
      <div className="text-2xl mb-4">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-center text-gray-700">
          <p>Price</p>
          <p className="line-through text-gray-500">
            {currency} {originalAmount.toFixed(2)}
          </p>
        </div>
        <hr className="border-gray-200" />

        <div className="flex justify-between items-center text-green-600">
          <p>Discount</p>
          <p>
            - {currency} {totalSavings.toFixed(2)}
          </p>
        </div>
        <hr className="border-gray-200" />

        <div className="flex justify-between items-center text-gray-700">
          <p>Delivery Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr className="border-gray-200" />

        <div className="flex justify-between items-center font-bold text-gray-900 text-lg">
          <p>Total Amount</p>
          <p>
            {currency} {finalTotal.toFixed(2)}
          </p>
        </div>

        {totalSavings > 0 && (
          <div className="mt-2 text-green-600 font-medium text-center">
            You will save {currency} {totalSavings.toFixed(2)} on this order
          </div>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
