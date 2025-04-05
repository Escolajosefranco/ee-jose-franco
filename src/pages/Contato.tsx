import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Contato = () => {
  return (
    <Layout>
      <div className="escola-container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="text-escola-verde" size={32} />
            <h2 className="escola-title">Entre em Contato</h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos sempre à disposição para atender a comunidade escolar. 
            Utilize os canais abaixo para entrar em contato conosco.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Informações de contato */}
          <div className="escola-card">
            <h3 className="text-xl font-bold mb-6 text-escola-azul">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-escola-azul/10 p-3 rounded-lg">
                  <MapPin className="text-escola-azul" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <address className="not-italic text-gray-700">
                    Av. Vergílio Ferreira Franco, 150 – Centro<br />
                    Distrito de São Pedro de Caldas – Caldas/MG<br />
                    CEP 37780-000
                  </address>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-escola-verde/10 p-3 rounded-lg">
                  <Mail className="text-escola-verde" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">E-mail</h4>
                  <a 
                    href="mailto:escola.124231@educacao.mg.gov.br" 
                    className="text-gray-700 hover:text-escola-azul transition-colors"
                  >
                    escola.124231@educacao.mg.gov.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-escola-vermelho/10 p-3 rounded-lg">
                  <Phone className="text-escola-vermelho" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/3591017614" 
                    className="text-gray-700 hover:text-escola-azul transition-colors"
                  >
                    (35) 91017-1614
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-escola-laranja/10 p-3 rounded-lg">
                  <Instagram className="text-escola-laranja" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Instagram</h4>
                  <a 
                    href="https://instagram.com/e.e.josefranco" 
                    className="text-gray-700 hover:text-escola-azul transition-colors"
                  >
                    @e.e.josefranco
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="escola-card flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-escola-azul">Nossa Localização</h3>
            
            <div className="flex-grow rounded-lg overflow-hidden">
              <iframe
                title="Localização da Escola José Franco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.6016372129275!2d-46.38516292582457!3d-21.923516279968246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9f62ae3c1b275%3A0x6ae63e7b9fb0baa!2sAv.%20Verg%C3%ADlio%20Ferreira%20Franco%2C%20150%20-%20Centro%2C%20Caldas%20-%20MG%2C%2037780-000!5e0!3m2!1spt-BR!2sbr!4v1712271523831!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Horário de Funcionamento */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="escola-card">
            <h3 className="text-xl font-bold mb-6 text-escola-azul">Horário de Funcionamento</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Secretaria</h4>
                <p>Segunda a Sexta: 7h às 11h30 e 12h30 às 17h</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">Aulas - Turno Matutino</h4>
                <p>Segunda a Sexta: 7h às 11h30</p>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-bold mb-2">Aulas - Turno Vespertino</h4>
                <p>Segunda a Sexta: 12h30 às 17h</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">Biblioteca</h4>
                <p>Segunda a Sexta: 8h às 11h e 13h às 16h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contato;
