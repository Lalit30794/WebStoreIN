import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);

export default Layout; 