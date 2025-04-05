
import React from 'react';
import { Headphones } from 'lucide-react';

const PodcastPreview: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-escola-azul to-escola-verde p-6 rounded-xl shadow-lg text-white">
      <div className="flex items-center gap-3 mb-4">
        <Headphones size={32} />
        <h3 className="text-2xl font-comic font-bold">Podcast da Escola</h3>
      </div>
      
      <p className="mb-4">
        Ouça os episódios do podcast produzido pelos alunos e professores da E.E. José Franco!
      </p>
      
      <div className="text-center">
        <a 
          href="/podcast" 
          className="inline-block bg-white text-escola-azul font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Ouvir agora
        </a>
      </div>
    </div>
  );
};

export default PodcastPreview;
