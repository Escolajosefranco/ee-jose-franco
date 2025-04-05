import React from 'react';
import { MapPin, Mail, Phone, Instagram, Clock } from 'lucide-react';

const MapaLocalizacao: React.FC = () => {
  return (
    <div className="escola-card">
      <div className="flex items-center mb-4">
        <MapPin className="text-escola-vermelho mr-2" size={24} />
        <h3 className="escola-subtitle text-escola-vermelho">Nossa Localização</h3>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-shadow">
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

      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-gray-700 text-sm mb-2">
          <strong>Endereço:</strong> Av. Vergílio Ferreira Franco, 150 - São Pedro, Caldas - MG
        </p>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={16} className="mr-1" />
          <span>Horário de funcionamento: 7h às 17h</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a 
          href="mailto:escola.124231@educacao.mg.gov.br" 
          className="flex items-center justify-center gap-2 p-3 bg-escola-azul/10 rounded-lg hover:bg-escola-azul/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-escola-azul"
        >
          <Mail className="text-escola-azul" size={20} />
          <span className="text-sm font-medium">E-mail</span>
        </a>

        <a 
          href="https://wa.me/553591017614" 
          className="flex items-center justify-center gap-2 p-3 bg-escola-verde/10 rounded-lg hover:bg-escola-verde/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-escola-verde"
        >
          <Phone className="text-escola-verde" size={20} />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        <a 
          href="https://instagram.com/e.e.josefranco" 
          className="flex items-center justify-center gap-2 p-3 bg-escola-laranja/10 rounded-lg hover:bg-escola-laranja/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-escola-laranja col-span-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-escola-laranja" size={20} />
          <span className="text-sm font-medium">@e.e.josefranco</span>
        </a>
      </div>
    </div>
  );
};

export default MapaLocalizacao;

