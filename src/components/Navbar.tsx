import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Library, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { items } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md text-white py-6 neon-border">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-glow">NextWave Games</Link>
        <div className="flex items-center space-x-8">
          <Link to="/library" className="flex items-center hover:text-purple-400 transition-colors duration-300 text-lg">
            <Library className="w-6 h-6 mr-2" />
            <span>Knihovna</span>
          </Link>
          <Link to="/cart" className="flex items-center hover:text-purple-400 transition-colors duration-300 text-lg relative">
            <ShoppingCart className="w-6 h-6 mr-2" />
            <span>Košík</span>
            {items.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold neon-border">
                {items.length}
              </span>
            )}
          </Link>
          <Link to="/login" className="flex items-center hover:text-purple-400 transition-colors duration-300 text-lg">
            <User className="w-6 h-6 mr-2" />
            <span>{user ? user.email : 'Přihlásit'}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};