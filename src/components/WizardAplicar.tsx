import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './wizard-animaciones.css';
import { supabase } from '@/lib/supabaseClient';

const pasos = [
  {
    pregunta: '¿Cuál es tu principal objetivo con este Bootcamp?',
    opciones: [
      'Crear mi propio producto digital.',
      'Aprender a desarrollar productos para mi empresa.',
      'Conseguir un trabajo en tecnología.',
      'Ofrecer servicios como freelancer.',
      'Otro.'
    ],
    key: 'objetivo',
  },
  {
    pregunta: 'Sobre tu estadio actual',
    opciones: [
      'Soy estudiante.',
      'Estoy en búsqueda de empleo.',
      'Estoy trabajando en otra industria.',
      'Estoy trabajando como developer.',
      'Soy emprendedor.'
    ],
    key: 'estadio',
  },
  {
    pregunta: 'Sobre tu presupuesto',
    opciones: [
      'Podré pagar $250 USD que corresponde al costo total del programa.',
      'Puedo dividir el pago en 3 cuotas de $94 USD.'
    ],
    key: 'presupuesto',
  },
];

const WizardAplicar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<any>({});
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [wsp, setWsp] = useState('');
  const [error, setError] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  React.useEffect(() => {
    setOpcionSeleccionada(null);
  }, [paso]);

  const handleOpcion = (valor: string) => {
    setRespuestas({ ...respuestas, [pasos[paso].key]: valor });
    setError('');
    setPaso(paso + 1);
  };

  const codigosPais = [
    { code: '+54', name: 'Argentina' },
    { code: '+52', name: 'México' },
    { code: '+57', name: 'Colombia' },
    { code: '+56', name: 'Chile' },
    { code: '+51', name: 'Perú' },
    { code: '+34', name: 'España' },
    { code: '+598', name: 'Uruguay' },
    { code: '+595', name: 'Paraguay' },
    { code: '+591', name: 'Bolivia' },
    { code: '+593', name: 'Ecuador' },
    { code: '+58', name: 'Venezuela' },
    { code: '+1', name: 'USA' },
    { code: '+55', name: 'Brasil' },
  ];
  const [codigoPais, setCodigoPais] = useState(codigosPais[0].code);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !correo || !wsp) {
      setError('Por favor completa todos los campos.');
      return;
    }
    const wspCompleto = `${codigoPais}${wsp}`;
    // Guardar en Supabase
    const { error: supaError } = await supabase.from('aplicaciones_bootcamp').insert({
      nombre,
      correo,
      wsp: wspCompleto,
      objetivo: respuestas.objetivo,
      estadio: respuestas.estadio,
      presupuesto: respuestas.presupuesto,
      created_at: new Date().toISOString()
    });
    if (supaError) {
      setError('Hubo un error al guardar tu aplicación. Intenta de nuevo.');
      return;
    }
    window.location.href = 'https://www.labora.ar/bootcamp/quiero-crear-con-ia';
  };

  const totalPasos = pasos.length + 1; // Incluye el paso de datos de contacto

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="max-w-md w-full bg-white rounded-xl p-8">
        {/* Barra de progreso visual */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mr-4">
            <div
              className="h-2 bg-labora-neon transition-all duration-300"
              style={{ width: `${((paso + 1) / totalPasos) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 font-semibold">Paso {paso + 1} de {totalPasos}</span>
        </div>
        {/* Animación entre pasos */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={paso}
            timeout={300}
            classNames="wizard-fade"
          >
            <div>
              {paso < pasos.length ? (
                <div>
                  <h2 className="text-xl font-bold mb-4">{pasos[paso].pregunta}</h2>
                  <div className="space-y-3 mb-6">
                    {pasos[paso].opciones.map((op, idx) => (
                      <label
                        key={op}
                        className={`block w-full text-left px-4 py-3 rounded-lg border border-gray-200 transition-colors text-gray-800 font-medium cursor-pointer ${opcionSeleccionada === op ? 'bg-labora-neon/20 border-labora-neon' : 'hover:bg-labora-neon/10'}`}
                      >
                        <input
                          type="radio"
                          name={`opcion-${paso}`}
                          value={op}
                          checked={opcionSeleccionada === op}
                          onChange={() => setOpcionSeleccionada(op)}
                          className="mr-2 accent-labora-neon"
                        />
                        <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}</span> {op}
                      </label>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-labora-neon text-black mt-2"
                    disabled={!opcionSeleccionada}
                    onClick={() => {
                      if (opcionSeleccionada) {
                        setRespuestas({ ...respuestas, [pasos[paso].key]: opcionSeleccionada });
                        setError('');
                        setPaso(paso + 1);
                      }
                    }}
                  >
                    Siguiente
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold mb-2">¡Solo te queda un paso más!</h2>
                  <Input
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                  <Input
                    placeholder="Correo electrónico"
                    type="email"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <select
                      value={codigoPais}
                      onChange={e => setCodigoPais(e.target.value)}
                      className="border rounded-lg px-2 py-2 bg-gray-100 text-gray-800 font-medium"
                      style={{ minWidth: 90 }}
                    >
                      {codigosPais.map(p => (
                        <option key={p.code} value={p.code}>{p.code} {p.name}</option>
                      ))}
                    </select>
                    <Input
                      placeholder="WhatsApp (sin código de país)"
                      value={wsp}
                      onChange={e => setWsp(e.target.value)}
                      className="flex-1"
                    />
                  </div>
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                  <Button type="submit" className="w-full bg-labora-neon text-black">
                    Quiero Unirme
                  </Button>
                </form>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </DialogContent>
    </Dialog>
  );
};

export default WizardAplicar; 