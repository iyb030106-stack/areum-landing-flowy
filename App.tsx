import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppShowcase from './components/AppShowcase';
import ValueProps from './components/ValueProps';
import Footer from './components/Footer';
import EmailFormPage from './components/EmailFormPage';

export default function App() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-12 pb-8 px-6 overflow-x-hidden bg-white text-[#111111]">
      <Navbar />
      
      {!showEmailForm ? (
        <>
          <Hero onCtaClick={() => setShowEmailForm(true)} />
          <AppShowcase />
          <ValueProps />
          <Footer />
        </>
      ) : (
        <EmailFormPage />
      )}
    </div>
  );
}