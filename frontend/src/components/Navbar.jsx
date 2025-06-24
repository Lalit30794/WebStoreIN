import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/products', label: 'Products' },
  { to: '/ai-theme', label: 'AI Theme' },
  { to: '/cart', label: 'Cart' },
  { to: '/login', label: 'Login' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-20  backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full shadow-lg" />
          <span className="text-2xl font-extrabold bg-gradient-to-tr from-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-tight">WebStoreIN</span>
        </motion.div>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-2 py-1 font-medium transition   hover:text-indigo-600 ${isActive ? 'text-indigo-600' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-indigo-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-6 h-0.5 bg-indigo-600" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-indigo-600" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-6 h-0.5 bg-indigo-600" />
        </button>
      </div>
      {/* Mobile nav menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 pb-4"
          >
            <div className="flex flex-col gap-4 mt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-2 py-1 font-medium transition text-gray-700 dark:text-gray-200 hover:text-indigo-600 ${isActive ? 'text-indigo-600' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <motion.div
                        layoutId="underline-mobile"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-indigo-500"
                        style={{ opacity: isActive ? 1 : 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 