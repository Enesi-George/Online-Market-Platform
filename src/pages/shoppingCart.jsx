import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../hooks/ShoppingCartContext";

export function ShoppingCart() {
  const { cartItems, handleRemoveFromCart, handleAddToCart } =
    useShoppingCart();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className=" ">
      <div className="w-full px-16 md:px-44 sm:py-1.5 text-sm border-yellow-300 border-t-2 site-color-red text-white relative ">
        <div className="mx-auto relative max-w-4xl">
          <h1> My Cart</h1>
          <div className="flex  mt-3 ">
            <p className="font-bold">Total Price: ${getTotalPrice()}</p>
            <Link
              to={"/checkout/payment"}
              className="font-bold md:absolute ml-32 md:right-0 bg-gray-800 rounded-tr-md rounded-bl-lg hover:bg-gray-700  p-4 top-1/2 transform -translate-y-1/2 duration-300"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-4 mx-16">
        {cartItems.map((item) => (
          <div key={item.id}>
            <Card className="max-w-lg p-4 my-6 mx-auto">
              <div className="flex flex-row ">
                <div>
                  <Link to={item.to}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain h-48 w-full mb-4"
                    />
                    <h2 className=" font-semibold text-sm ">{item.name}</h2>
                  </Link>
                  <p className="text-gray-600 text-sm my-0 p-0 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="my-auto">
                  <div className="flex space-x-1">
                    <span>Unit Price: </span>
                    <p className="text-gray-800 font-bold text-md">
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  <div className="block justify-between items-center my-2 space-y-1">
                    <span className="mr-2 text-md">{`Quantity: ${item.quantity}`}</span>

                    <div className="flex items-center space-x-5">
                      <Button
                        onClick={() => handleAddToCart(item.id)}
                        className="flex-1"
                      >
                        +
                      </Button>

                      <Button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="flex-1"
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

// ShoppingCart.propTypes = {
//   cartItems: PropTypes.array,
//   handleRemoveFromCart: PropTypes.func.isRequired,
// };
