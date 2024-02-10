import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Use stripe.createPaymentMethod to handle payment processing
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Payment Information</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Details</label>
        <CardElement className="p-2 border w-full border-gray-300 rounded" />
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-400 transition duration-300"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
