import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg mt-8">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-1"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Buy & Sell Web UI Components, Themes, and Developer Services</h1>
      <p className="mb-6 text-lg">Discover, customize, and purchase high-quality web assets. Generate unique themes with AI. Power your next project!</p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-100 transition">Explore Products</button>
    </motion.div>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex-1 flex justify-center mt-8 md:mt-0"
    >
      <Hero3D />
    </motion.div>
  </section>
);

export default Hero; 