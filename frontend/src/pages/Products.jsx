import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { scale: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
  hover: {
    scale: 1.04,
    boxShadow: '0 8px 32px rgba(99,102,241,0.15)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-tr from-indigo-500 to-purple-500 bg-clip-text text-transparent">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-indigo-100 dark:border-gray-800 transition-all overflow-hidden"
          >
            <motion.div
              className="absolute -top-8 right-6 w-20 h-20 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30"
              layoutId={`glow-${product.id}`}
            />
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-300 shadow-lg">
              {product.name[0]}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{product.name}</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-300 text-lg font-medium">${product.price}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm text-center">{product.description}</p>
            <p className="mb-4 text-yellow-500 text-lg">{'★'.repeat(Math.round(product.rating))}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition mb-2"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </motion.button>
            {getQuantity(product.id) > 0 && (
              <span className="text-sm text-green-600">In Cart: {getQuantity(product.id)}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products; 