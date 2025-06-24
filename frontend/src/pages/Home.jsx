import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Hero />
    <ProductList />
    <motion.section
      className="max-w-3xl mx-auto my-16 p-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg shadow text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700">Try Our AI Theme Generator!</h2>
      <p className="mb-6 text-gray-700">Describe your dream UI component and let AI generate it for you instantly. Perfect for rapid prototyping and inspiration.</p>
      <Link
        to="/ai-theme"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
      >
        Generate with AI
      </Link>
    </motion.section>
  </>
);

export default Home;