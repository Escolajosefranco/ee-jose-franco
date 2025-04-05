import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { supabase } from '@/lib/supabaseClient';
import { Headphones, Trash2, Lock } from 'lucide-react';

interface Episodio {
  id: string;
  titulo: string;
  descricao: string;
  tipo: 'audio' | 'video' | 'link';
  url: string;
}

const Podcast = () => {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha, setSenha] = useState('');
  const [episodios, setEpisodios] = useState<Episodio[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState<'audio' | 'video' | 'link'>('audio');
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [link, setLink] = useState('');

  const buscarEpisodios = async () => {
    const { data } = await supabase.from('podcast').select('*').order('created_at', { ascending: false });
    if (data) setEpisodios(data as Episodio[]);
  };

  useEffect(() => {
    buscarEpisodios();
  }, []);

  const handleLogin = () => {
    if (senha === 'admin123') {
      setModoAdmin(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleUpload = async () => {
    if (!titulo || !descricao) return alert('Preencha o título e a descrição.');

    let finalUrl = link;
    if (tipo !== 'link' && arquivo) {
      const nomeArquivo = `${Date.now()}-${arquivo.name}`;
      const { error: uploadError } = await supabase.storage.from('podcast').upload(nomeArquivo, arquivo);
      if (uploadError) return alert('Erro ao enviar o arquivo.');
      const { data } = supabase.storage.from('podcast').getPublicUrl(nomeArquivo);
      finalUrl = data.publicUrl;
    }

    await supabase.from('podcast').insert([{ titulo, descricao, tipo, url: finalUrl }]);
    setTitulo('');
    setDescricao('');
    setArquivo(null);
    setLink('');
    buscarEpisodios();
  };

  const deletarEpisodio = async (id: string, url: string) => {
    const nomeArquivo = url.split('/').pop();
    await supabase.from('podcast').delete().eq('id', id);
    if (tipo !== 'link') {
      await supabase.storage.from('podcast').remove([nomeArquivo!]);
    }
    buscarEpisodios();
  };

  return (
    <Layout>
      <div className="escola-container">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Headphones className="text-escola-verde" size={28} />
            <h2 className="escola-title">Podcast da Escola</h2>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ouça os episódios produzidos por alunos e professores da E.E. José Franco.
          </p>
        </div>

        {!modoAdmin && !mostrarSenha && (
          <div className="text-center mb-6">
            <button
              onClick={() => setMostrarSenha(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto"
            >
              <Lock size={18} /> Entrar como administrador
            </button>
          </div>
        )}

        {!modoAdmin && mostrarSenha && (
          <div className="text-center mb-6 flex flex-col items-center gap-3">
            <input
              type="password"
              placeholder="Senha do administrador"
              className="border p-2 rounded"
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
          <div className="escola-card mb-10">
            <h3 className="text-xl font-bold mb-4 text-escola-verde">Adicionar Episódio</h3>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Título" className="border p-2 rounded" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              <textarea placeholder="Descrição" className="border p-2 rounded" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              <select value={tipo} onChange={(e) => setTipo(e.target.value as any)} className="border p-2 rounded">
                <option value="audio">Áudio (mp3, m4a)</option>
                <option value="video">Vídeo (mp4)</option>
                <option value="link">Link Spotify/YouTube</option>
              </select>

              {tipo === 'link' ? (
                <input type="text" placeholder="Cole o link aqui" className="border p-2 rounded" value={link} onChange={(e) => setLink(e.target.value)} />
              ) : (
                <input type="file" accept={tipo === 'audio' ? 'audio/*' : 'video/*'} onChange={(e) => setArquivo(e.target.files?.[0] || null)} />
              )}

              <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
                Enviar Episódio
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {episodios.map((ep) => (
            <div key={ep.id} className="escola-card p-4">
              <h4 className="text-lg font-semibold text-escola-verde mb-1">{ep.titulo}</h4>
              <p className="text-sm text-gray-600 mb-3">{ep.descricao}</p>

              {ep.tipo === 'audio' && (
                <audio controls className="w-full">
                  <source src={ep.url} type="audio/mpeg" />
                  Seu navegador não suporta áudio.
                </audio>
              )}

              {ep.tipo === 'video' && (
                <div className="w-full flex justify-center">
                  <video
                    controls
                    className="w-full max-w-[480px] sm:max-w-[560px] md:max-w-[600px] rounded shadow-md"
                  >
                    <source src={ep.url} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>
              )}

              {ep.tipo === 'link' && (
                <a href={ep.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Abrir Link Externo
                </a>
              )}

              {modoAdmin && (
                <button
                  onClick={() => deletarEpisodio(ep.id, ep.url)}
                  className="text-red-500 text-sm flex items-center gap-1 mt-3"
                >
                  <Trash2 size={16} /> Deletar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;
