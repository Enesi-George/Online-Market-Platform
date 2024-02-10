import { Link } from "react-router-dom";
import { useShoppingCart } from "../hooks/ShoppingCartContext";
import { Card } from "flowbite-react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CheckoutForm from "./checkoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const Checkout = () => {
  const { getTotalPrice, cartItems } = useShoppingCart();
  const stripePromise = loadStripe("your_publishable_key");

  // Placeholder user data for billing address
  const billingAddress = {
    name: "Name",
    email: "Email",
    contact: "+234-81...",
    address: "23, los Angela Street....",
    city: "City...",
    state: "State...",
    zipcode: "Zipcode...",
    country: "Country...",
  };

  return (
    <div className="mx-44 mt-8">
      <Card className="mb-4">
        <Link
          to={"/Shopping/Cart"}
          className=" text-sm text-white mx-12 rounded-md border w-32 p-2 bg-gray-800 hover:bg-gray-700 transition-all duration-300"
        >
          <p className="flex flex-row w-52">
            <FaLongArrowAltLeft className="my-auto mx-1" />
            Back to cart
          </p>
        </Link>
        <hr className="mt-0 mb-5" />

        <div className="flex flex-row justify-between mx-12 gap-12">
          <div className="w-2/5">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className=" flex justify-between text-center mb-9"
              >
                <img src={item.image} alt={item.name} className="w-16 h-20" />
                <p className="my-auto">{item.name}</p>
                <p className="my-auto">${item.price}</p>
                <p className="my-auto">x{item.quantity}</p>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex space-x-5 items-center w-2/5">
              <p className="">Items:</p>
              <b>{cartItems.length}</b>
            </div>
            <div className="flex space-x-5 items-center w-2/5">
              <p className="">Total:</p>
              <b>$ {getTotalPrice()}</b>
            </div>
          </div>

          <div className=" w-1/2">
            <h3 className="text-lg font-bold mb-2">Billing Address</h3>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={billingAddress.name}
                className="p-2 border w-full border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder={billingAddress.email}
                className="p-2 border w-full border-gray-300 rounded"
              />

              <input
                type="text"
                placeholder={billingAddress.contact}
                className="p-2 border w-full border-gray-300 rounded"
              />
            </div>

            <div className=" mt-5">
              <p className="mb-2"> Shipping Address</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={billingAddress.address}
                  className="p-2 border w-full border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder={billingAddress.city}
                  className="p-2 border w-full border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder={billingAddress.state}
                  className="p-2 border w-full border-gray-300 rounded"
                />

                <input
                  type="text"
                  placeholder={billingAddress.country}
                  className="p-2 border w-full border-gray-300 rounded"
                />

                <input
                  type="text"
                  placeholder={billingAddress.zipcode}
                  className="p-2 border w-full border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>

            {/* <div className="mt-4">
              <Button className="bg-green-500 text-white hover:bg-green-400 transition duration-300">
                Complete Purchase
              </Button>
            </div> */}
          </div>
        </div>
      </Card>
    </div>
  );
};
