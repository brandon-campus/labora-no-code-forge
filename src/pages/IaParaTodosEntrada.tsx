import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type VirtualTicket = {
  id: string;
  createdAt: string;
  eventName: string;
  attendeeName?: string;
  dateText: string;
  timeText: string;
  locationText: string;
};

const STORAGE_PREFIX = "ia-para-todos:ticket:";

const IaParaTodosEntrada: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState<VirtualTicket | null>(null);

  const storageKey = useMemo(() => {
    if (!id) return null;
    return `${STORAGE_PREFIX}${id}`;
  }, [id]);

  useEffect(() => {
    if (!storageKey) return;
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      setTicket(null);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as VirtualTicket;
      setTicket(parsed);
    } catch {
      setTicket(null);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!ticket) return;
    const t = window.setTimeout(() => {
      window.print();
    }, 250);
    return () => window.clearTimeout(t);
  }, [ticket]);

  if (!id) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-10">
        <div className="mx-auto max-w-xl space-y-4">
          <h1 className="text-2xl font-bold">Entrada no encontrada</h1>
          <p className="text-slate-300">Falta el identificador de la entrada.</p>
          <Button onClick={() => navigate("/ia-para-todos/gracias")}>Volver</Button>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 px-4 py-10">
        <div className="mx-auto max-w-xl space-y-4">
          <h1 className="text-2xl font-bold">Entrada no encontrada</h1>
          <p className="text-slate-300">
            No encontramos tu entrada virtual en este navegador. Volvé a la pantalla anterior y generala nuevamente.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => navigate("/ia-para-todos/gracias")}>Volver</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950 px-4 py-10 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-2xl space-y-6 print:max-w-none print:space-y-0">
        <div className="flex items-center justify-between gap-4 print:hidden">
          <div>
            <h1 className="text-xl font-bold">Tu entrada</h1>
            <p className="text-sm text-slate-600">Se va a abrir el diálogo de impresión para que la guardes como PDF.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.print()}>
              Imprimir / Guardar PDF
            </Button>
            <Button onClick={() => navigate("/ia-para-todos/gracias")}>Volver</Button>
          </div>
        </div>

        <Card className="border border-slate-200 shadow-sm print:border-0 print:shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Entrada</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{ticket.eventName}</h2>
                {ticket.attendeeName ? (
                  <p className="mt-1 text-sm text-slate-700">A nombre de: {ticket.attendeeName}</p>
                ) : null}
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">ID</p>
                <p className="mt-2 font-mono text-sm">{ticket.id}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3 print:bg-white">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Fecha</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{ticket.dateText}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Horario</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{ticket.timeText}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Lugar</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{ticket.locationText}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">Generada: {new Date(ticket.createdAt).toLocaleString()}</p>
              <p className="text-xs text-slate-500">Labora</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IaParaTodosEntrada;
