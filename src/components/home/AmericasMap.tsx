import { useState } from 'react';
import { AMERICAS_DOTS_PATH, AMERICAS_DOT_STEP, AMERICAS_VIEWBOX, STUDENT_COUNTRIES } from './americasMapData';

// Mapa de puntos de América con los países donde hay alumnos, marcados con el acento neón.
// Al pasar el mouse (o tocar) un país, se resalta y se muestra su nombre.
const AmericasMap = () => {
  const [active, setActive] = useState<string | null>(null);
  const current = STUDENT_COUNTRIES.find((c) => c.code === active);

  return (
    <figure className="relative">
      <svg viewBox={AMERICAS_VIEWBOX} className="w-full h-auto" role="img" aria-labelledby="americas-map-title">
        <title id="americas-map-title">{`Mapa de América con alumnos en ${STUDENT_COUNTRIES.map((c) => c.name).join(', ')}`}</title>
        <path d={AMERICAS_DOTS_PATH} stroke="currentColor" strokeWidth={AMERICAS_DOT_STEP * 0.5} strokeLinecap="round" className="text-white/25" />

        {STUDENT_COUNTRIES.map((c, i) => {
          const isActive = active === c.code;
          return (
            <g
              key={c.code}
              tabIndex={0}
              role="button"
              aria-label={c.name}
              onMouseEnter={() => setActive(c.code)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.code)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : c.code)}
              className="cursor-pointer outline-none"
            >
              {/* Pulso: escalonado para que no laten todos a la vez */}
              <circle cx={c.x} cy={c.y} r="4" className="fill-labora-neon/40 motion-reduce:hidden">
                <animate attributeName="r" values="4;13;4" dur="2.8s" begin={`${(i * 0.37) % 2.8}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" begin={`${(i * 0.37) % 2.8}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={c.x} cy={c.y} r="14" fill="transparent" />
              <circle
                cx={c.x}
                cy={c.y}
                r={isActive ? 6 : 4.5}
                className="fill-labora-neon transition-all duration-200"
                style={{ filter: 'drop-shadow(0 0 6px rgba(193,255,114,0.9))' }}
              />
            </g>
          );
        })}

        {current && (
          <g pointerEvents="none">
            <rect
              x={current.x + 10}
              y={current.y - 13}
              width={current.name.length * 6.6 + 16}
              height="22"
              rx="11"
              className="fill-surface-container-high stroke-labora-neon/40"
              strokeWidth="1"
            />
            <text x={current.x + 18} y={current.y + 2} className="fill-on-surface" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
              {current.name}
            </text>
          </g>
        )}
      </svg>
    </figure>
  );
};

export default AmericasMap;
