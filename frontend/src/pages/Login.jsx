import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setUser, setLoading, setError } from '../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCred.user.email, uid: userCred.user.uid }));
      dispatch(setError(null));
      navigate('/');
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white  p-8 rounded shadow-md w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 mb-2 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition mb-2"
          disabled={loading}
        >
          {loading ? 'Please wait...' : 'Login'}
        </button>
        <div className="text-center mt-2 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
        </div>
      </motion.form>
    </div>
  );
};

export default Login; 