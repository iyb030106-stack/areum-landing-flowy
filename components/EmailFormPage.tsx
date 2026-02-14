import React, { useState } from 'react';

import { saveLead, trackEvent } from '../lib/analytics';

const EmailFormPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await saveLead(email);
      await trackEvent('email_submit');
      setSubmitted(true);
      // Here you would typically send the email to your backend
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto py-20 px-6 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h2>
        <p className="text-gray-500">빠른 시일 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto py-8 px-4">
      <div className="w-full text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          매장 매뉴얼 자동화 시작하기
        </h2>
        <p className="text-gray-500 text-sm">
          이메일을 입력하시면 매뉴얼 제작 가이드를 보내드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            이메일 주소
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform hover:bg-gray-800"
        >
          무료로 시작하기
        </button>
      </form>
      
      <p className="mt-4 text-xs text-gray-400 text-center">
        입력하신 정보는 서비스 제공 목적으로만 사용됩니다.
      </p>
    </div>
  );
};

export default EmailFormPage;