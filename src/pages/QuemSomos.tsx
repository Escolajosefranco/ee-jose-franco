
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Scroll } from 'lucide-react';

const QuemSomos = () => {
  return (
    <Layout>
      <div className="escola-container">
        <div className="escola-card max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Scroll className="text-escola-azul mr-3" size={32} />
            <h2 className="escola-title">Quem Somos</h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-escola-azul mb-6">
              <h3 className="text-xl font-bold text-escola-azul mb-3">Nossa Missão</h3>
              <p>
                Promover uma educação de qualidade, formando cidadãos críticos, 
                conscientes e capazes de transformar a sociedade, respeitando as 
                diferenças e valorizando o conhecimento e a criatividade.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-escola-verde mb-6">
              <h3 className="text-xl font-bold text-escola-verde mb-3">Nossa Visão</h3>
              <p>
                Ser referência na educação pública, reconhecida pela excelência no 
                ensino, pela inclusão e pelo desenvolvimento integral dos alunos, 
                preparando-os para os desafios do futuro.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-escola-laranja">
              <h3 className="text-xl font-bold text-escola-laranja mb-3">Nossos Valores</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold text-escola-verde">Alegria</span> - Cultivamos um ambiente escolar alegre e acolhedor</li>
                <li><span className="font-bold text-escola-azul">Amizade</span> - Valorizamos os laços de amizade e respeito mútuo</li>
                <li><span className="font-bold text-escola-vermelho">Conhecimento</span> - Buscamos a construção do saber com criatividade</li>
                <li><span className="font-bold text-escola-preto">Respeito</span> - Respeitamos as diferenças e a individualidade de cada um</li>
                <li><span className="font-bold text-escola-laranja">Responsabilidade</span> - Incentivamos a responsabilidade e o compromisso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuemSomos;
