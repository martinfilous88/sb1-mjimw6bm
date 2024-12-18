import React from 'react';
import { formatPrice } from '../../utils/price';

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout }) => {
  return (
    <div className="mt-8 flex justify-between items-center bg-gray-800/90 p-6 rounded-lg neon-border">
      <div className="text-white">
        <span className="text-2xl">Celkem:</span>
        <span className="text-3xl font-bold ml-4 text-purple-400 text-glow">{formatPrice(total)}</span>
      </div>
      <button
        onClick={onCheckout}
        className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 neon-border"
      >
        Pokračovat k platbě
      </button>
    </div>
  );
};