import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
}

const CalendarioWidget: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const buscarEventos = async () => {
      const hoje = new Date().toISOString().split('T')[0];

      const { data, error } = await supabase
        .from('calendario')
        .select('*')
        .gte('data', hoje)
        .order('data', { ascending: true })
        .limit(3);

      if (error) {
        console.error('Erro ao buscar eventos:', error.message);
      } else {
        setEventos(data || []);
      }
    };

    buscarEventos();
  }, []);

  return (
    <div className="escola-card">
      <div className="flex items-center mb-4">
        <Calendar className="text-escola-azul mr-2" size={24} />
        <h3 className="escola-subtitle text-escola-azul">Próximos Eventos</h3>
      </div>

      {eventos.length === 0 ? (
        <div className="p-6 text-center bg-blue-50 rounded-lg">
          <p className="text-gray-600 mb-4">Nenhum evento agendado no momento.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {eventos.map((evento) => (
            <li key={evento.id} className="bg-gray-100 rounded-md p-3">
              <strong>{evento.titulo}</strong>
              <p className="text-sm text-gray-700">{evento.data} - {evento.horario}</p>
              <p className="text-sm text-gray-600">{evento.local}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-center">
        <a href="/calendario" className="escola-button inline-block">
          Ver calendário completo
        </a>
      </div>
    </div>
  );
};

export default CalendarioWidget;
