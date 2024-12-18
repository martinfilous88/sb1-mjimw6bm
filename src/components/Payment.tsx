import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Mail, Phone, User } from 'lucide-react';

export const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle payment processing
    alert('Platba byla úspěšně zpracována!');
    navigate('/');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl neon-border">
          <h2 className="text-3xl font-bold text-center mb-8 text-white text-glow">
            Platební údaje
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-purple-300 mb-2">Jméno</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-purple-400 h-5 w-5" />
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Jan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-purple-300 mb-2">Příjmení</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-purple-400 h-5 w-5" />
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Novák"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-purple-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-purple-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="jan.novak@email.cz"
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-300 mb-2">Telefon</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-purple-400 h-5 w-5" />
                <input
                  type="tel"
                  required
                  className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="+420 123 456 789"
                />
              </div>
            </div>

            <div className="border-t border-purple-500/30 pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Platební karta</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-purple-300 mb-2">Číslo karty</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 text-purple-400 h-5 w-5" />
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-300 mb-2">Platnost</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="MM/RR"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-300 mb-2">CVV</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] neon-border"
            >
              Zaplatit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};