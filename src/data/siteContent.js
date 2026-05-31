import {
  Cpu,
  Eye,
  MonitorSmartphone,
  Rocket,
  Target,
} from 'lucide-react';

export const mainNavigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Identidad', href: '#mision' },
  { label: 'Ciclos', href: '#ciclos' },
  { label: 'Eduteca', href: '#proyectos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export const homeHero = {
  kicker: 'Escuela Profesional de Educación Tecnológica',
  title: ['Tecnología con propósito.', 'Educación que transforma.'],
  description:
    'Descubre una carrera donde la creatividad y la tecnología se unen para resolver problemas reales. Bienvenido a la Escuela Profesional de Educación Tecnológica.',
  metrics: [
    { value: '4', label: 'ciclos visibles y escalables' },
    { value: '6', label: 'trabajos destacados con ficha propia' },
    { value: '12', label: 'imagenes iniciales en galeria' },
  ],
};

export const academicHighlights = [
  {
    title: 'Aprendizaje aplicado',
    description: 'Proyectos, prototipos y soluciones conectadas con necesidades reales del entorno educativo y tecnologico.',
    icon: Rocket,
  },
  {
    title: 'Competencias digitales',
    description: 'Formacion progresiva en software, datos, interfaces, automatizacion y cultura digital.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Innovacion regional',
    description: 'Enfoque intercultural y orientacion al desarrollo regional mediante tecnologia y docencia.',
    icon: Cpu,
  },
];

export const missionVisionCards = [
  {
    title: 'Mision',
    icon: Target,
    tone: 'blue',
    description:
      'Formar integralmente profesionales en Educacion Tecnologica en la especialidad de Computacion e Informatica, comprometidos con la docencia, investigacion y responsabilidad social con enfoque intercultural y de calidad.',
  },
  {
    title: 'Vision',
    icon: Eye,
    tone: 'emerald',
    description:
      'Ser una escuela lider en la formacion de docentes en Computacion e Informatica, reconocida por su excelencia academica y por su contribucion al desarrollo tecnologico y educativo de la region.',
  },
];

export const contactInformation = [
  {
    label: 'Direccion',
    value: 'Jiron Ancash N° 520 - Bagua, Amazonas',
  },
  {
    label: 'Telefono',
    value: '(+51) 939 571 296',
  },
  {
    label: 'Correo',
    value: 'educaciontecnologica@unibagua.edu.pe',
  },
];

// Placeholder data to fix build errors
export const cycles = [];

export const getProjectsByCycleId = (cycleId) => {
  return [];
};