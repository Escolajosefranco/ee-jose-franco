import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { supabase } from '@/lib/supabaseClient';
import { CalendarDays, Trash2, Lock, Pencil } from 'lucide-react';

interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  banner_url?: string;
}

const Calendario = () => {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha, setSenha] = useState('');
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [local, setLocal] = useState('');
  const [banner, setBanner] = useState<File | null>(null);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const buscarEventos = async () => {
    const { data, error } = await supabase
      .from('calendario')
      .select('*')
      .order('data', { ascending: true });

    if (error) {
      alert(`Erro ao buscar eventos: ${error.message}`);
      return;
    }

    if (data) setEventos(data as Evento[]);
  };

  useEffect(() => {
    buscarEventos();
  }, []);

  const handleLogin = () => {
    if (senha === 'admin123') {
      setModoAdmin(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleAdicionarOuEditarEvento = async () => {
    if (!titulo || !descricao || !data || !horario || !local) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    let banner_url = '';

    if (banner) {
      const nomeArquivo = `${Date.now()}-${banner.name}`;
      const { error: uploadError } = await supabase.storage.from('calendario').upload(nomeArquivo, banner);

      if (uploadError) {
        alert(`Erro ao enviar banner: ${uploadError.message}`);
        return;
      }

      const { data: publicUrlData } = supabase.storage.from('calendario').getPublicUrl(nomeArquivo);
      banner_url = publicUrlData?.publicUrl || '';
    }

    if (editandoId) {
      const { error: updateError } = await supabase
        .from('calendario')
        .update({ titulo, descricao, data, horario, local, ...(banner_url && { banner_url }) })
        .eq('id', editandoId);

      if (updateError) {
        alert(`Erro ao atualizar evento: ${updateError.message}`);
        return;
      }
      setEditandoId(null);
    } else {
      const { error: insertError } = await supabase.from('calendario').insert([
        { titulo, descricao, data, horario, local, banner_url },
      ]);

      if (insertError) {
        alert(`Erro ao inserir no Supabase: ${insertError.message}`);
        console.error(insertError);
        return;
      }
    }

    setTitulo('');
    setDescricao('');
    setData('');
    setHorario('');
    setLocal('');
    setBanner(null);
    buscarEventos();
  };

  const handleEditarEvento = (evento: Evento) => {
    setEditandoId(evento.id);
    setTitulo(evento.titulo);
    setDescricao(evento.descricao);
    setData(evento.data);
    setHorario(evento.horario);
    setLocal(evento.local);
  };

  const handleDeletarEvento = async (id: string, banner_url?: string) => {
    if (banner_url) {
      const nomeArquivo = banner_url.split('/').pop();
      await supabase.storage.from('calendario').remove([nomeArquivo!]);
    }

    await supabase.from('calendario').delete().eq('id', id);
    buscarEventos();
  };

  return (
    <Layout>
      <div className="escola-container">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <CalendarDays className="text-escola-azul" size={28} />
            <h2 className="escola-title">Calendário de Eventos</h2>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fique por dentro dos próximos eventos da nossa escola.
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
          <div className="flex flex-col items-center gap-3 mb-6">
            <input
              type="password"
              placeholder="Senha do administrador"
              className="border p-2 rounded"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded">
              Acessar Painel
            </button>
          </div>
        )}

        {modoAdmin && (
          <div className="escola-card mb-10">
            <h3 className="text-xl font-bold mb-4 text-escola-azul">
              {editandoId ? 'Editar Evento' : 'Adicionar Evento'}
            </h3>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Título" className="border p-2 rounded" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              <textarea placeholder="Descrição" className="border p-2 rounded" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              <input type="date" className="border p-2 rounded" value={data} onChange={(e) => setData(e.target.value)} />
              <input type="time" className="border p-2 rounded" value={horario} onChange={(e) => setHorario(e.target.value)} />
              <input type="text" placeholder="Local do evento" className="border p-2 rounded" value={local} onChange={(e) => setLocal(e.target.value)} />
              <input type="file" accept="image/*" onChange={(e) => setBanner(e.target.files?.[0] || null)} />
              <button onClick={handleAdicionarOuEditarEvento} className="bg-blue-600 text-white px-4 py-2 rounded">
                {editandoId ? 'Salvar Alterações' : 'Salvar Evento'}
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {eventos.map((ev) => (
            <div key={ev.id} className="escola-card p-4">
              <h4 className="text-lg font-semibold text-escola-azul">{ev.titulo}</h4>
              <p>{ev.descricao}</p>
              <p>📅 {ev.data} ⏰ {ev.horario}</p>
              <p>📍 {ev.local}</p>
              {ev.banner_url && (
                <img
                  src={ev.banner_url}
                  alt={`Banner do evento ${ev.titulo}`}
                  className="w-full max-w-[280px] h-auto rounded mt-2 mx-auto shadow"
                />
              )}
              {modoAdmin && (
                <div className="flex gap-3 mt-3">
                  <button onClick={() => handleEditarEvento(ev)} className="text-blue-600 flex items-center gap-1">
                    <Pencil size={16} /> Editar
                  </button>
                  <button onClick={() => handleDeletarEvento(ev.id, ev.banner_url)} className="text-red-500 flex items-center gap-1">
                    <Trash2 size={16} /> Deletar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Calendario;