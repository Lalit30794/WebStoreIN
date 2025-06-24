import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);

  const getQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section id="products" className="py-12 px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-indigo-100 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">{product.name[0]}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-300">${product.price}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm text-center">{product.description}</p>
            <p className="mb-4 text-yellow-500">{'★'.repeat(Math.round(product.rating))}</p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mb-2"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            {getQuantity(product.id) > 0 && (
              <span className="text-sm text-green-600">In Cart: {getQuantity(product.id)}</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductList; 