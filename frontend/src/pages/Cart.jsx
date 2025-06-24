import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { motion } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl text-gray-500 dark:text-gray-300"
        >
          Your cart is empty.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow p-6"
      >
        <ul className="divide-y divide-gray-200 dark:divide-gray-800 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-300">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">${item.price}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-lg font-bold"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-2 font-semibold">{item.quantity}</span>
                <button
                  className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-lg font-bold"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-500 hover:underline text-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6">
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart; 