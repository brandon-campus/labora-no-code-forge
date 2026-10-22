import { Hammer } from 'lucide-react';
import { Card, PageHeader } from '@/components/admin/ui';

// Sin uso por ahora: la tabla `leads` se eliminó en la limpieza de seguridad y el módulo no aparece en el menú
export default function LeadsManager() {
  return (
    <div>
      <PageHeader title="Leads" />
      <Card>
        <div className="flex flex-col items-center text-center gap-space-sm py-space-xl">
          <Hammer className="w-8 h-8 text-on-surface-variant" />
          <p className="text-body-md text-on-surface-variant max-w-md">Módulo en construcción. Las aplicaciones se reciben por los formularios de Tally.</p>
        </div>
      </Card>
    </div>
  );
}
