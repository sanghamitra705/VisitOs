import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { Button } from '../components/common/Button';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-[85vh] bg-[#F3F9FD] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Logo size="large" className="justify-center mb-4" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#10243E] font-sans tracking-tight">
          Reset Administrator Password
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#5F7185] max-w-sm mx-auto">
          Enter your registered admin email address and we will dispatch password recovery instructions.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl shadow-[#10243E]/5 rounded-3xl border border-[#DCE6EF] sm:px-10">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#27B36A]/15 text-[#27B36A] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10243E] font-sans">
                Recovery Link Dispatched
              </h3>
              <p className="text-xs text-[#5F7185] leading-relaxed">
                If an organization admin account exists for <strong>{email}</strong>, a secure password reset link has been delivered to your inbox.
              </p>
              <div className="pt-3">
                <Button to="/login" variant="primary" size="md" className="w-full justify-center">
                  Return to Admin Login
                </Button>
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

              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={ArrowRight}
              >
                {loading ? 'Dispatching Reset Link...' : 'Send Password Reset Link'}
              </Button>

              <div className="text-center pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F7185] hover:text-[#10243E]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
