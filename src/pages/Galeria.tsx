import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Image, Upload, X, Lock, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

interface Foto {
  id: string;
  url: string;
  legenda: string;
  created_at?: string;
}

const Galeria = () => {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha, setSenha] = useState('');
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [novaImagem, setNovaImagem] = useState<File | null>(null);
  const [novaLegenda, setNovaLegenda] = useState('');
  const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);

  const buscarFotos = async () => {
    try {
      const { data, error } = await supabase
        .from('galeria')
        .select('id, url, legenda, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar fotos:', error);
        return;
      }

      if (data) {
        setFotos(data);
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  };

  useEffect(() => {
    buscarFotos();
  }, []);

  const handleLogin = () => {
    if (senha === 'admin123') {
      setModoAdmin(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleAdicionarFoto = async () => {
    if (!novaImagem || !novaLegenda) {
      alert('Preencha a legenda e selecione uma imagem.');
      return;
    }

    const nomeArquivo = `${Date.now()}-${novaImagem.name}`;
    const { error: uploadError } = await supabase.storage.from('galeria').upload(nomeArquivo, novaImagem);
    if (uploadError) {
      alert('Erro ao fazer upload da imagem.');
      return;
    }

    const { data: publicUrlData } = supabase.storage.from('galeria').getPublicUrl(nomeArquivo);
    const urlPublica = publicUrlData?.publicUrl;
    if (!urlPublica) {
      alert('Erro ao gerar URL pública.');
      return;
    }

    const { error: insertError } = await supabase
      .from('galeria')
      .insert([{ url: urlPublica, legenda: novaLegenda }]);

    if (insertError) {
      alert('Erro ao salvar a imagem na galeria.');
      return;
    }

    setNovaImagem(null);
    setNovaLegenda('');
    buscarFotos();
  };

  const handleDeletarFoto = async (foto: Foto) => {
    const nomeArquivo = foto.url.split('/').pop();
    if (!nomeArquivo || !foto.id) return;

    const { error: storageError } = await supabase.storage.from('galeria').remove([nomeArquivo]);
    const { error: dbError } = await supabase.from('galeria').delete().eq('id', foto.id);

    if (storageError || dbError) {
      console.error('Erro ao deletar imagem:', storageError || dbError);
      alert('Erro ao deletar imagem.');
      return;
    }

    buscarFotos();
  };

  return (
    <Layout>
      <div className="escola-container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image className="text-escola-azul" size={32} />
            <h2 className="escola-title">Galeria de Fotos</h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira os momentos mais especiais da nossa escola através das fotos das nossas atividades e eventos.
          </p>
        </div>

        {!modoAdmin && !mostrarSenha && (
  <div className="text-center mb-6">
    <button
      onClick={() => setMostrarSenha(true)}
      className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto"
    >
      <Lock size={18} />
      Entrar como administrador
    </button>
  </div>
)}

{!modoAdmin && mostrarSenha && (
  <div className="text-center mb-6 flex flex-col items-center gap-3">
    <input
      type="password"
      placeholder="Senha do administrador"
      className="border p-2 rounded text-center"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
    />
    <button
      onClick={handleLogin}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Acessar Painel
    </button>
  </div>
)}


        {modoAdmin && (
          <div className="escola-card mb-8">
            <h3 className="text-xl font-bold mb-4 text-escola-azul">Adicionar Novas Fotos</h3>
            <div className="flex flex-col gap-4">
              <input type="file" accept="image/*" onChange={(e) => setNovaImagem(e.target.files?.[0] || null)} />
              <input
                type="text"
                placeholder="Digite a legenda da foto"
                className="border p-2 rounded"
                value={novaLegenda}
                onChange={(e) => setNovaLegenda(e.target.value)}
              />
              <button onClick={handleAdicionarFoto} className="bg-green-600 text-white px-4 py-2 rounded">
                Adicionar à Galeria
              </button>
            </div>
          </div>
        )}

        <div className="escola-card p-6">
          <h3 className="text-xl font-bold mb-4 text-escola-azul">Fotos da Escola</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fotos.map((foto) => (
              <div
                key={foto.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
              >
                <img
                  src={foto.url}
                  alt={foto.legenda}
                  className="w-full h-full object-cover"
                  onClick={() => setImagemAmpliada(foto.url)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 flex justify-between items-center">
                  <p className="text-sm truncate">{foto.legenda}</p>
                  {modoAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Tem certeza que deseja deletar esta imagem?')) {
                          handleDeletarFoto(foto);
                        }
                      }}
                      className="text-red-400 hover:text-red-200 text-xs ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {imagemAmpliada && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setImagemAmpliada(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white"
              onClick={() => setImagemAmpliada(null)}
            >
              <X size={24} />
            </button>
            <img
              src={imagemAmpliada}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Galeria;
