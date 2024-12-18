import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validation';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });

    let hasErrors = false;
    if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Neplatný email' }));
      hasErrors = true;
    }
    if (!validatePassword(password)) {
      setErrors(prev => ({ ...prev, password: 'Heslo musí mít alespoň 6 znaků' }));
      hasErrors = true;
    }

    if (!hasErrors) {
      await onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-700 text-white rounded px-3 py-2"
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-400 mb-2">Heslo</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-700 text-white rounded px-3 py-2"
          required
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-bold"
      >
        Přihlásit se
      </button>
    </form>
  );
};