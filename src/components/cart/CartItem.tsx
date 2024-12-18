import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { formatPrice } from '../../utils/price';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (gameId: number, quantity: number) => void;
  onRemove: (gameId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b border-purple-500/30 py-6 neon-border mb-4 bg-gray-800/80 rounded-lg p-4">
      <div className="flex items-center">
        <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded-lg shadow-lg" />
        <div className="ml-6">
          <h3 className="text-2xl font-bold text-white text-glow">{item.title}</h3>
          <p className="text-purple-400 text-xl font-semibold">{formatPrice(item.price)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4 bg-gray-700/50 rounded-lg px-4 py-2">
          <button
            onClick={() => onUpdateQuantity(item.gameId, Math.max(0, item.quantity - 1))}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Minus className="w-6 h-6" />
          </button>
          <span className="text-white text-xl font-bold min-w-[2ch] text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.gameId, item.quantity + 1)}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.gameId)}
          className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/20 rounded-lg"
        >
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};