import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Heart } from 'lucide-react';

const ValorCard = ({ cor, valor, descricao }: { cor: string; valor: string; descricao: string }) => {
  const getBgColor = () => {
    switch (cor) {
      case 'verde': return 'bg-escola-verde';
      case 'azul': return 'bg-escola-azul';
      case 'vermelho': return 'bg-escola-vermelho';
      case 'preto': return 'bg-escola-preto';
      case 'laranja': return 'bg-escola-laranja';
      default: return 'bg-gray-500';
    }
  };

  const getTextColor = () => {
    return 'text-white';
  };

  return (
    <div className="group escola-card hover:scale-105 transition-transform duration-300">
      <div className="relative h-60 rounded-lg overflow-hidden mb-4">
        {/* Fundo colorido com menor opacidade */}
        <div className={`absolute inset-0 ${getBgColor()} opacity-60`} />

        {/* Logotipo da escola como marca d'água */}
        <img 
          src="/assets/logo.png"
          alt={`Logotipo da escola representando o valor ${valor}`}
          className="absolute inset-0 w-full h-full object-contain opacity-20 z-0"
        />

        {/* Texto centralizado mais abaixo */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 z-10">
          <div className={`text-4xl font-bold mt-4 ${getTextColor()}`}>
            {valor}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-center min-h-[80px]">{descricao}</p>
    </div>
  );
};

const Valores = () => {
  const valoresEscola = [
    {
      cor: 'verde',
      valor: 'Alegria',
      descricao: 'Promovemos um ambiente escolar alegre, onde o aprendizado é uma experiência prazerosa e estimulante.'
    },
    {
      cor: 'azul',
      valor: 'Amizade',
      descricao: 'Incentivamos laços de amizade, cooperação e respeito entre todos os membros da comunidade escolar.'
    },
    {
      cor: 'vermelho',
      valor: 'Conhecimento',
      descricao: 'Valorizamos a busca pelo conhecimento, a curiosidade e o desenvolvimento do pensamento crítico.'
    },
    {
      cor: 'preto',
      valor: 'Respeito',
      descricao: 'Cultivamos o respeito às diferenças, à diversidade e à dignidade de cada indivíduo.'
    },
    {
      cor: 'laranja',
      valor: 'Responsabilidade',
      descricao: 'Desenvolvemos o senso de responsabilidade, compromisso e cidadania em nossos alunos.'
    }
  ];

  return (
    <Layout>
      <div className="escola-container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-escola-vermelho" size={32} />
            <h2 className="escola-title">Nossos Valores</h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Na E.E. José Franco, nossos valores são representados por cores que simbolizam 
            os princípios que norteiam nossa comunidade escolar e o desenvolvimento integral dos nossos alunos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valoresEscola.map((valor, index) => (
            <ValorCard key={index} {...valor} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Valores;
