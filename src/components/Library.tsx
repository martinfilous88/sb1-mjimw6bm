import React from 'react';
import { useAuth } from '../context/AuthContext';
import { games } from '../data/games';

export const Library: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4 glow">Pro zobrazení knihovny se prosím přihlaste</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center glow">Moje knihovna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:glow transition-all duration-300">
            <div className="relative">
              <img src={game.imageUrl} alt={game.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full transition-colors duration-300">
                Hrát
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};