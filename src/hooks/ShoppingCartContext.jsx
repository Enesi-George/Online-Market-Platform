import { createContext, useContext, useState } from "react";

import { phoneDetails } from "../constants/constants";

// Create a new context instance
const ShoppingCartContext = createContext();

// Create a provider component for the context
export const ShoppingCartProvider = ({ children }) => {
  // Define the state for cart items and a function to update it
  const [cartItems, setCartItems] = useState([]);


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

  // Function to handle removing items from the cart
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

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, handleRemoveFromCart, handleAddToCart, getTotalPrice }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Create a custom hook to use the context easily in functional components
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
