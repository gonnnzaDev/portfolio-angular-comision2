/**
 * Resuelve el icono SVG de una tecnologia.
 *
 * Los SVG viven en public/logos/tecs/ (locales, sin CDN) para no depender
 * de un servidor externo en tiempo de render.
 *
 * El mapa es explicito a proposito: normalizar el nombre a un slug
 * (`next.js` -> `nextjs`, `spring boot` -> `springboot`) falla en varios
 * casos reales. "Spring Boot" es `spring`, "CSS" es `css3` y "HTML" es
 * `html5`; "Kafka" es `apachekafka`.
 */

/** Ruta publica de los iconos, servida por Angular desde public/. */
const BASE = '/logos/tecs';

/** slug del archivo .svg, o null si la tecnologia no tiene icono. */
const ICONOS: Record<string, string | null> = {
  // devicon
  'rust': 'rust',
  'python': 'python',
  'docker': 'docker',
  'fastapi': 'fastapi',
  'typescript': 'typescript',
  'java': 'java',
  'postgresql': 'postgresql',
  'maven': 'maven',
  'vite': 'vite',
  'angular': 'angular',
  'react': 'react',
  'next.js': 'nextjs',
  'tailwind css': 'tailwindcss',
  'spring boot': 'spring',
  'css': 'css3',
  'html': 'html5',
  'kafka': 'apachekafka',
  'web3': 'web3js',

  // simple-icons
  'stellar': 'stellar',

  // sin icono disponible en ningun catalogo: se renderiza como badge de texto
  'soroban': null,
  'metamask': null,
  'alembic': null,
  'ia multimodal': null,
};

/** Parte "Rust, Soroban, Next.js" en una lista normalizada. */
export function tecnologiasDe(tecnologias: string): string[] {
  return (tecnologias ?? '')
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);
}

/** Ruta del icono, o null si la tecnologia no tiene uno. */
export function iconoDe(tecnologia: string): string | null {
  const slug = ICONOS[tecnologia.trim().toLowerCase()];
  return slug ? `${BASE}/${slug}.svg` : null;
}

/** Toda la info que la vista necesita de una tecnologia. */
export interface Tecnologia {
  nombre: string;
  icono: string | null;
}

export function vistaDeTecnologias(tecnologias: string): Tecnologia[] {
  return tecnologiasDe(tecnologias).map(nombre => ({ nombre, icono: iconoDe(nombre) }));
}