import React from 'react';
import Layout from '@/components/Layout/Layout';
import ImageCarousel from '@/components/Home/ImageCarousel';
import CalendarioWidget from '@/components/Home/CalendarioWidget';
import MapaLocalizacao from '@/components/Home/MapaLocalizacao';
import PodcastPreview from '@/components/Home/PodcastPreview';
import ElementosDecorativos, { Lapis, Giz, Livro } from '@/components/ElementosDecorativos';
import { Award } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <ElementosDecorativos />
      
      <div className="escola-container">
        {/* Frase de impacto */}
        <div className="mb-8 text-center">
          <h2 className="escola-title mb-4">
            Onde a Educação com qualidade encontra a alegria de aprender!
          </h2>
        </div>
        
        {/* Carrossel de imagens */}
        <div className="mb-8">
          <ImageCarousel /> 
        </div>
        
        {/* Destaque IDEP */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-xl shadow-lg mb-8 flex items-center justify-center gap-3 text-white">
          <Award size={32} />
          <h3 className="text-xl md:text-2xl font-comic font-bold">
          Escola de melhor IDEB de Minas Gerais em 2023 - Anos finais do Ensino Fundamental
          </h3>
        </div>
        
        {/* Widgets (Calendário e Localização) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <CalendarioWidget />
          <MapaLocalizacao />
        </div>
        
        {/* Podcast Preview */}
        <div className="mb-8">
          <PodcastPreview />
        </div>
        
        {/* Elementos decorativos na página */}
        <div className="relative hidden md:block">
          <div className="absolute -top-20 -left-10 opacity-10 pointer-events-none">
            <Lapis className="w-24 h-24" />
          </div>
          <div className="absolute top-40 -right-10 opacity-10 pointer-events-none">
            <Giz className="w-20 h-20" />
          </div>
          <div className="absolute -bottom-10 -right-20 opacity-10 pointer-events-none">
            <Livro className="w-32 h-32" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
