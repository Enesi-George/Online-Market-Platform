import { Card, Button } from "flowbite-react";
import { phoneDetails } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../hooks/ShoppingCartContext";

export function Phone() {
  const { cartItems, setCartItems } = useShoppingCart();

  const handleAddToCart = (id) => {
    const selectedPhone = phoneDetails.find((phone) => phone.id === id);
    const existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...selectedPhone, quantity: 1 },
      ]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
      } else {
        existingCartItem.quantity -= 1;
        setCartItems([...cartItems]);
      }
    }
  };

  return (
    <div className="flex flex-wrap px-14 mt-4 ">
      {phoneDetails.map((phoneDetail) => (
        <div
          key={phoneDetail.id}
          className="w-full my-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-2"
        >
          <Card className="max-w-sm">
            <Link to={phoneDetail.to}>
              <img
                src={phoneDetail.image}
                alt={phoneDetail.name}
                className="object-contain h-48 w-full mb-4"
              />
              <h2 className=" font-semibold text-sm">{phoneDetail.name}</h2>
            </Link>
            <p className="text-gray-600 text-sm my-0 p-0 font-light">
              {phoneDetail.description}
            </p>
            <p className="text-gray-800 font-bold text-sm ">
              ${phoneDetail.price}
            </p>
            <div className="flex justify-between items-center my-0">
              <Button
                onClick={() => handleAddToCart(phoneDetail.id)}
                className={`flex-1 mr-2 ${
                  cartItems.find((item) => item.id === phoneDetail.id)
                    ?.quantity > 0
                    ? "pl-0 pr-0"
                    : ""
                }`}
              >
                {cartItems.find((item) => item.id === phoneDetail.id)
                  ?.quantity > 0
                  ? "+"
                  : "Add to Cart +"}
              </Button>

              {cartItems.find((item) => item.id === phoneDetail.id) ? (
                <div className="flex items-center">
                  <span className="mr-2 text-sm">{`Quantity: ${
                    cartItems.find((item) => item.id === phoneDetail.id)
                      .quantity
                  }`}</span>
                  <Button
                    onClick={() => handleRemoveFromCart(phoneDetail.id)}
                    className="flex-1"
                  >
                    -
                  </Button>
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      ))}

      {/* Render the ShoppingCart component */}
      {/* <div>
        <ShoppingCart />
      </div> */}
    </div>
  );
}
