import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center escola-card max-w-md">
        <h1 className="escola-title mb-4">Página não encontrada</h1>
        <p className="text-xl text-gray-600 mb-6">
          Ops! A página que você está procurando não existe.
        </p>
        <Link 
          to="/" 
          className="escola-button inline-flex items-center gap-2"
        >
          <Home size={18} />
          <span>Voltar para a Página Inicial</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
