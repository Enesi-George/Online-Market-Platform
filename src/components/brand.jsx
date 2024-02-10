import "../index.css";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../hooks/ShoppingCartContext";
export const Brand = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className="bg-white lg:px-44 py-3 sm:px-4 ">
      <div className="flex justify-between items-center">
        <div className="sm:justify-center text-2xl">
          <span className="text-red-500 font-bold">GG</span> CONNECT
        </div>

        <div className="">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-96">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Products..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-0 bottom-0 top-0 bg-red-500 hover:bg-red-400 focus:ring-3 focus:outline-none focus:ring-red-300 font-medium rounded-r-lg text-sm px-4 py-2.5  dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="relative mr-0 ">
          <Link to={"/shopping/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute w-5 h-5 rounded-full bg-red-500 text-white text-center top-0 right-0 my-auto text-sm">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
