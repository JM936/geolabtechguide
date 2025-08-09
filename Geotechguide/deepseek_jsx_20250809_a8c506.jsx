// src/components/CookieModal.js
'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CookieModal() {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowModal(false);
  };
  
  const managePreferences = () => {
    // Implementar página de gerenciamento de cookies
    setShowModal(false);
  };
  
  if (!showModal) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 z-50 sm:items-center sm:p-0">
      <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 max-w-md w-full shadow-xl animate-fade-in-up">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Utilizamos cookies</h3>
          <button 
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-sm mb-4">
          Utilizamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. 
          Ao continuar navegando, você concorda com o uso de cookies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={managePreferences}
            className="px-4 py-2 text-sm rounded border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Mais opções
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}