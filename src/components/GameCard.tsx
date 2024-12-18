import React from 'react';
import { useCart } from '../context/CartContext';
import { Game } from '../types';
import { ShoppingCart } from 'lucide-react';

interface GameCardProps extends Game {}

export const GameCard: React.FC<GameCardProps> = ({ id, title, price, imageUrl, description }) => {
  const { addToCart } = useCart();
  const game = { id, title, price, imageUrl, description };

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 neon-border">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 text-glow">{title}</h3>
        <p className="text-gray-300 mb-4 text-lg">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-purple-400 text-glow">{price} €</span>
          <button
            onClick={() => addToCart(game)}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 text-lg font-semibold neon-border"
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            Přidat do košíku
          </button>
        </div>
      </div>
    </div>
  );
};