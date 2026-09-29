import React, { useEffect, useState } from 'react';
import { auth, signOut } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/admin');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-foreground text-white p-6 flex flex-col">
        <h2 className="text-xl font-bold tracking-widest uppercase mb-12">Admin Panel</h2>
        
        <div className="flex flex-col gap-6 flex-1 text-sm font-medium tracking-wide">
          <button className="text-left text-accent">Dashboard</button>
          <button className="text-left hover:text-accent transition-colors">Manage Projects</button>
          <button className="text-left hover:text-accent transition-colors">Manage Achievements</button>
          <button className="text-left hover:text-accent transition-colors">Profile & Contact</button>
        </div>

        <button 
          onClick={handleLogout}
          className="text-left text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase">Dashboard</h1>
        <p className="text-gray-500 font-light mb-8">Welcome back. Select a section from the sidebar to edit your portfolio content.</p>
        
        <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
          <h3 className="text-lg font-bold tracking-wide mb-4">Connection Status</h3>
          <p className="text-gray-600 text-sm mb-4">
            Firebase Database and Storage connection is active. 
          </p>
          <p className="text-gray-500 text-xs italic">
            (The actual editing forms will be built here once your Firebase project is fully set up and configured!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
