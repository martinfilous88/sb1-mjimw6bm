import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from './cart/CartItem';
import { CartSummary } from './cart/CartSummary';
import { EmptyCart } from './cart/EmptyCart';

export const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment');
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center text-glow">Nákupní košík</h2>
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-xl">
        {items.map((item) => (
          <CartItem
            key={item.gameId}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
        <CartSummary total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
};