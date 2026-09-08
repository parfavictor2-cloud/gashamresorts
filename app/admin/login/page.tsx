'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/dashboard');
        router.refresh();
      } else {
        setError(data.message || 'Access denied');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-cream p-8 rounded-2xl shadow-2xl border border-gold/30 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Secure Portal
          </span>
          <h1 className="font-serif text-3xl font-bold text-charcoal">Gasham Admin</h1>
          <p className="text-stone-600 text-xs">Enter your authorization credentials to manage inventory.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-xs font-medium border border-red-200 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Admin Password
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gold/30 focus:outline-none focus:border-gold text-sm bg-white text-charcoal"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold-secondary text-charcoal font-bold py-3.5 rounded-xl transition-all shadow text-xs uppercase tracking-wider cursor-pointer"
          >
            {loading ? 'Verifying Session...' : 'Authenticate'}
          </button>
        </form>
      </div>
    </div>
  );
}