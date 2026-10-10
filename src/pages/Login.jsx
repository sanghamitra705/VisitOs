import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  LogIn, 
  ArrowRight, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { Button } from '../components/common/Button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDemoNotice(true);
    }, 600);
  };

  return (
    <div className="min-h-[85vh] bg-[#F3F9FD] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Logo size="large" className="justify-center mb-4" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#10243E] font-sans tracking-tight">
          Organization Admin Login
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#5F7185] max-w-sm mx-auto">
          Sign in to manage your facility’s visitor registers, staff directory, and security rules.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl shadow-[#10243E]/5 rounded-3xl border border-[#DCE6EF] sm:px-10">
          {demoNotice ? (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#10243E] font-sans">
                Marketing Demo Mode
              </h2>
              <div className="p-4 bg-[#EDF6FC] border border-[#DCE6EF] rounded-2xl text-left text-xs text-[#14263D] space-y-2">
                <p className="font-semibold text-[#1769D2]">
                  Authentication Notice:
                </p>
                <p>
                  In this public marketing demo, your admin credentials for <strong>{email}</strong> would redirect to your organization's dedicated cloud dashboard.
                </p>
                <p className="text-[11px] text-[#5F7185]">
                  To create a new workspace with your own company domain, complete the registration flow!
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Button to="/register" size="md" variant="primary" icon={ArrowRight} className="w-full justify-center">
                  Register a New Organization
                </Button>
                <button
                  type="button"
                  onClick={() => setDemoNotice(false)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#5F7185] hover:bg-[#F3F9FD] transition-colors cursor-pointer"
                >
                  Back to Login Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                  Admin Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#5F7185] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@yourcompany.com"
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E]">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[#1769D2] hover:text-[#1688E8] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5F7185] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5F7185] hover:text-[#10243E] focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#1769D2] focus:ring-[#1769D2] border-[#DCE6EF] rounded cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 block text-xs text-[#5F7185] cursor-pointer">
                  Remember this workstation for 30 days
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={LogIn}
              >
                {loading ? 'Authenticating...' : 'Sign In to Organization'}
              </Button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-[#DCE6EF] text-center">
            <p className="text-xs text-[#5F7185]">
              Don't have an organization workspace yet?
            </p>
            <Link
              to="/register"
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#1769D2] hover:text-[#1688E8] hover:underline"
            >
              <span>Register your organization (Start Free)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#5F7185] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#27B36A]" />
          <span>Protected by 256-Bit SSL Cloud Encryption</span>
        </div>
      </div>
    </div>
  );
};
