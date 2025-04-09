
import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md shadow-inner mt-10">
      <div className="escola-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-escola-azul">E.E. José Franco</h3>
            <p className="text-gray-700">
              Educação com qualidade, respeito e alegria!
            </p>
        
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-escola-azul">Contato</h3>
            <address className="not-italic text-gray-700">
              <p>Av. Vergílio Ferreira Franco, 150 – Centro</p>
              <p>Distrito de São Pedro de Caldas – Caldas/MG</p>
              <p>CEP 37780-000</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-escola-azul">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:escola.124231@educacao.mg.gov.br" 
                className="text-escola-azul hover:text-escola-vermelho transition-colors"
                aria-label="E-mail"
              >
                <Mail />
              </a>
              <a 
                href="https://wa.me/3591017614" 
                className="text-escola-verde hover:text-escola-vermelho transition-colors"
                aria-label="WhatsApp"
              >
                <Phone />
              </a>
              <a 
                href="https://instagram.com/e.e.josefranco" 
                className="text-escola-laranja hover:text-escola-vermelho transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} E.E. José Franco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
