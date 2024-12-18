import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Game } from '../types/game';
import { CartItem } from '../types/cart';
import { calculateTotal } from '../utils/price';

interface CartContextType {
  items: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
  updateQuantity: (gameId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.gameId === game.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.gameId === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, {
        gameId: game.id,
        quantity: 1,
        price: game.price,
        title: game.title,
        imageUrl: game.imageUrl
      }];
    });
  };

  const removeFromCart = (gameId: number) => {
    setItems(currentItems => currentItems.filter(item => item.gameId !== gameId));
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(gameId);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.gameId === gameId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = calculateTotal(items);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};