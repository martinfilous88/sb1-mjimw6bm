import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Váš košík je prázdný</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
        >
          Pokračovat v nákupu
        </button>
      </div>
    </div>
  );
};