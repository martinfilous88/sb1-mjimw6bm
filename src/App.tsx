import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Library } from './components/Library';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { Payment } from './components/Payment';
import { GameCard } from './components/GameCard';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { games } from './data/games';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <div className="cyber-grid">
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <main className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center text-glow">
                      Nejnovější hry
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {games.map((game) => (
                        <GameCard
                          key={game.id}
                          id={game.id}
                          title={game.title}
                          price={game.price}
                          imageUrl={game.imageUrl}
                          description={game.description}
                        />
                      ))}
                    </div>
                  </main>
                } />
                <Route path="/library" element={<Library />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </div>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;