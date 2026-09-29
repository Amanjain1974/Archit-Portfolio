import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full bg-white p-8 shadow-sm rounded-sm">
        <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase text-center">Admin Login</h1>
        <p className="text-gray-500 text-sm mb-8 text-center font-light">Enter your credentials to access the portfolio dashboard.</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-sm text-sm mb-6 border border-red-100">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-foreground text-white font-bold tracking-widest uppercase text-sm p-4 mt-2 hover:bg-accent transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
