import {
  BookOpen,
  BrainCircuit,
  Cpu,
  Eye,
  Fingerprint,
  Globe,
  GraduationCap,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Rocket,
  Target,
} from 'lucide-react';
import logoUni from '../assets/logo_Uni.png';

// Import images for portfolios
import centroTrabajoImg from '../assets/Centro_de_trabajo.jpg';
import ciudadUniversitariaImg from '../assets/Ciudad_Universitaria.jpg';
import ensayoImg from '../assets/Ensayo.jpg';
import eventoInterculturalImg from '../assets/Evento_Intercultural.jpg';
import practicaCCImg from '../assets/Practica_CC.jpeg';
import practicaNugkuiImg from '../assets/Practica_Nugkui.jpg';
import visitaTutumberosImg from '../assets/Visita-Comunidad_Tutumberos.jpg';

// Nuevas imágenes para los portafolios
import portafolio1Img from '../assets/Portafolio1.jpg';
import portafolio2Img from '../assets/Portafolio2.jpg';
import portafolio3Img from '../assets/portafolio3.jpg';
import portafolio4Img from '../assets/portafolio4.png';
import portafolio5Img from '../assets/Portafolio5.png';
import portafolio6Img from '../assets/Portafolio6.jpg';

export const mainNavigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Identidad', href: '#mision' },
  { label: 'Ciclos', href: '#ciclos' },
  { label: 'Trabajos', href: '#proyectos' },
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

export const cycles = [
  {
    id: 'iii',
    title: 'III Ciclo',
    subtitle: 'Fundamentos de Programacion',
    icon: BookOpen,
    status: 'Disponible para ampliacion',
    description: 'Base para pensamiento computacional, logica y primeras practicas de desarrollo.',
    headline: 'Bases solidas para comprender logica, algoritmos y pensamiento computacional.',
    focusAreas: ['Algoritmos y diagramas de flujo', 'Logica de programacion', 'Estructuras basicas de datos'],
    outcomes: ['Primeros proyectos funcionales', 'Resolucion estructurada de problemas', 'Capacidad de modelar procesos'],
  },
  {
    id: 'iv',
    title: 'IV Ciclo',
    subtitle: 'Desarrollo Web y Bases de Datos',
    icon: Globe,
    status: 'Disponible para ampliacion',
    description: 'Arquitecturas web, persistencia de datos y soluciones conectadas para entornos educativos.',
    headline: 'Construccion de experiencias web conectadas a datos y flujos reales de informacion.',
    focusAreas: ['Interfaces web responsivas', 'Modelo relacional y consultas', 'Integracion frontend y backend'],
    outcomes: ['Sitios funcionales con datos reales', 'CRUD academicos y administrativos', 'Buenas practicas de modelado'],
  },
  {
    id: 'v',
    title: 'V Ciclo',
    subtitle: 'Inteligencia Artificial y Redes',
    icon: BrainCircuit,
    status: 'Disponible para ampliacion',
    description: 'Integracion de redes, automatizacion y modelos inteligentes aplicados a proyectos academicos.',
    headline: 'Automatizacion, redes e inteligencia aplicada a escenarios educativos y de laboratorio.',
    focusAreas: ['Fundamentos de machine learning', 'Infraestructura de redes', 'Automatizacion y sensores'],
    outcomes: ['Prototipos inteligentes', 'Monitoreo y conectividad', 'Integracion de hardware y software'],
  },
  {
    id: 'vi',
    title: 'VI Ciclo',
    subtitle: 'Proyectos Integradores',
    icon: Network,
    status: 'Activo',
    description: 'Espacio de sintesis para presentar proyectos finales, investigaciones aplicadas y soluciones con impacto.',
    headline: 'Un ciclo orientado a integrar tecnologia, comunicacion y presentacion profesional de resultados.',
    focusAreas: ['Proyecto final con ficha completa', 'Presentacion y defensa publica', 'Trabajo colaborativo y documentacion'],
    outcomes: ['Portafolio academico visible', 'Soluciones con valor demostrable', 'Mayor proyeccion institucional'],
  },
];

export const projects = [
  {
    slug: 'charla-vocacional-2026',
    title: 'Landing Page para Charla Vocacional',
    description: 'Página web informativa para la promoción y registro a la Charla Vocacional 2026.',
    longDescription:
      'Proyecto de desarrollo de una landing page atractiva y funcional para un evento académico, optimizada para la conversión y el registro de asistentes.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: GraduationCap,
    category: 'Evento Académico',
    shortLabel: 'Charla Vocacional 2026',
    accent: '#d9862d',
    roleLine: 'Línea: Comunicación Digital',
    teamLine: 'Equipo: Integrador VI Ciclo',
    cycleLine: 'VI Ciclo 2026',
    cycleId: 'vi',
    goals: ['Promocionar el evento', 'Facilitar el registro de asistentes', 'Proveer información clave'],
    deliverables: ['Landing page responsiva', 'Formulario de registro', 'Agenda del evento'],
    externalUrl: 'https://gildemisterjulca.github.io/Charla-vocacional-2026/',
  },
  {
    slug: 'diccionario-awajun-wampis',
    title: 'Diccionario Digital Awajún-Wampis',
    description: 'Aplicación web para la consulta y preservación de las lenguas Awajún y Wampis.',
    longDescription:
      'Herramienta digital interactiva que sirve como diccionario bilingüe, contribuyendo a la preservación y difusión de las lenguas originarias Awajún y Wampis.',
    technologies: ['React', 'API', 'CSS'],
    icon: Globe,
    category: 'App Educativa',
    shortLabel: 'Diccionario Digital',
    accent: '#2b5f95',
    roleLine: 'Línea: Educación Intercultural',
    teamLine: 'Equipo: Prácticas Móviles',
    cycleLine: 'VI Ciclo 2026',
    cycleId: 'vi',
    goals: ['Facilitar la consulta de términos', 'Promover el aprendizaje de lenguas', 'Contribuir a la preservación cultural'],
    deliverables: ['Buscador interactivo', 'Fichas de palabras con audio', 'Interfaz amigable'],
    externalUrl: 'https://julcajhimy-tech.github.io/diccionario-awajun-wampis/',
  },
  {
    slug: 'elearning-realidad-aumentada',
    title: 'Plataforma E-learning con Realidad Aumentada',
    description: 'Experiencias inmersivas para la ensenanza de algoritmos y contenidos practicos.',
    longDescription:
      'Experiencia de aprendizaje inmersiva que combina contenidos teoricos, material visual y practicas guiadas apoyadas por realidad aumentada.',
    technologies: ['Unity', 'C#', 'Laravel'],
    icon: Lightbulb,
    category: 'Innovacion educativa',
    shortLabel: 'AR Lab',
    accent: '#7f4ea3',
    roleLine: 'Linea: aprendizaje inmersivo',
    teamLine: 'Equipo: laboratorio XR',
    cycleLine: 'VI Ciclo 2026',
    cycleId: 'vi',
    goals: ['Hacer mas tangible la teoria', 'Aumentar retencion del contenido', 'Crear experiencias practicas memorables'],
    deliverables: ['Escenas interactivas', 'Panel de contenidos', 'Rutas guiadas por modulo'],
  },
  {
    slug: 'red-neuronal-desercion',
    title: 'Red Neuronal para Prediccion de Desercion',
    description: 'Modelo de aprendizaje automatico aplicado a datos educativos para deteccion temprana.',
    longDescription:
      'Proyecto de analitica predictiva enfocado en estimar riesgo de desercion y habilitar intervenciones tempranas desde coordinacion academica.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    icon: BrainCircuit,
    category: 'Analitica educativa',
    shortLabel: 'Predict',
    accent: '#1d7f74',
    roleLine: 'Linea: inteligencia artificial',
    teamLine: 'Equipo: ciencia de datos',
    cycleLine: 'V Ciclo 2026',
    cycleId: 'v',
    goals: ['Modelar factores de riesgo', 'Mejorar decisiones preventivas', 'Conectar datos con acciones tutoriales'],
    deliverables: ['Modelo predictivo', 'Indicadores por cohortes', 'Base para tablero de seguimiento'],
  },
  {
    slug: 'seguridad-biometrica-labs',
    title: 'Sistema de Seguridad Biometrica',
    description: 'Control de acceso a laboratorios mediante reconocimiento facial y trazabilidad.',
    longDescription:
      'Solucion para control de acceso a laboratorios tecnologicos, registro de ingreso y mejora de la seguridad de espacios especializados.',
    technologies: ['OpenCV', 'Raspberry Pi'],
    icon: Fingerprint,
    category: 'Infraestructura inteligente',
    shortLabel: 'BioLab',
    accent: '#303947',
    roleLine: 'Linea: seguridad y control',
    teamLine: 'Equipo: hardware + vision',
    cycleLine: 'V Ciclo 2026',
    cycleId: 'v',
    goals: ['Controlar acceso a laboratorios', 'Automatizar registro de ingreso', 'Reducir vulnerabilidades operativas'],
    deliverables: ['Registro biometrico', 'Historial de accesos', 'Base de alertas de seguridad'],
  },
  {
    slug: 'portal-emprendimiento-tecnologico',
    title: 'Portal Web para Emprendimiento Tecnologico',
    description: 'Espacio para conectar estudiantes, mentores y proyectos con enfoque de incubacion.',
    longDescription:
      'Portal de articulacion entre estudiantes, mentores y oportunidades de incubacion para potenciar iniciativas tecnologicas desde la escuela.',
    technologies: ['Next.js', 'Tailwind', 'Supabase'],
    icon: Globe,
    category: 'Vinculacion y emprendimiento',
    shortLabel: 'Impulsa',
    accent: '#b95f3d',
    roleLine: 'Linea: ecosistema emprendedor',
    teamLine: 'Equipo: innovacion y comunidad',
    cycleLine: 'IV Ciclo 2026',
    cycleId: 'iv',
    goals: ['Vincular estudiantes con mentores', 'Dar visibilidad a iniciativas', 'Promover comunidad y colaboracion'],
    deliverables: ['Modelo predictivo', 'Indicadores por cohortes', 'Base para tablero de seguimiento'],
  },
];

export const galleryItems = [
  {
    id: 1,
    title: 'Evento Intercultural',
    image: eventoInterculturalImg,
    alt: 'Estudiantes en evento intercultural',
    category: 'Eventos',
    description: 'Participación activa de los estudiantes en eventos de intercambio cultural.',
  },
  {
    id: 2,
    title: 'Visita a Tutumberos',
    image: visitaTutumberosImg,
    alt: 'Visita a la comunidad de Tutumberos',
    category: 'Comunidad',
    description: 'Jornada de aprendizaje y vinculación con la comunidad de Tutumberos.',
  },
  {
    id: 3,
    title: 'Práctica en Nugkui',
    image: practicaNugkuiImg,
    alt: 'Práctica de campo en Nugkui',
    category: 'Prácticas',
    description: 'Desarrollo de habilidades prácticas en el campo, en la localidad de Nugkui.',
  },
  {
    id: 4,
    title: 'Centro de Trabajo',
    image: centroTrabajoImg,
    alt: 'Estudiantes en su centro de trabajo',
    category: 'Prácticas',
    description: 'Estudiantes aplicando sus conocimientos en un entorno de trabajo real.',
  },
  {
    id: 5,
    title: 'Ciudad Universitaria',
    image: ciudadUniversitariaImg,
    alt: 'Vista de la ciudad universitaria',
    category: 'Campus',
    description: 'Una vista panorámica de las instalaciones de la ciudad universitaria.',
  },
  {
    id: 6,
    title: 'Práctica de Computación',
    image: practicaCCImg,
    alt: 'Estudiantes durante una práctica de computación',
    category: 'Laboratorio',
    description: 'Sesión intensiva en el laboratorio de cómputo, desarrollando proyectos.',
  },
  {
    id: 7,
    title: 'Presentación de Ensayo',
    image: ensayoImg,
    alt: 'Presentación de un ensayo',
    category: 'Académico',
    description: 'Estudiante presentando los resultados de su investigación y ensayo.',
  },
  {
    id: 8,
    title: 'Práctica Destacada',
    image: practicaNugkuiImg,
    alt: 'Otra vista de la práctica en Nugkui',
    category: 'Prácticas',
    isFeatured: true,
    description: 'Imagen destacada de las prácticas de campo, mostrando el compromiso estudiantil.',
  },
];

export const groupPortfolios = [
  {
    id: 1,
    title: 'Cultura Awajún',
    description: 'Exploración de las tradiciones y cosmovisión del pueblo Awajún.',
    image: portafolio1Img,
    url: 'https://sites.google.com/view/culturaawajn/inicio',
  },
  {
    id: 2,
    title: 'Cultura Awajún JCTK',
    description: 'Recopilación de videos y testimonios sobre la cultura Awajún.',
    image: portafolio2Img,
    url: 'https://sites.google.com/view/cultura-awajun-jctk/videos',
  },
  {
    id: 3,
    title: 'Portafolio Grupo C',
    description: 'Análisis de prácticas en centros de trabajo y su impacto educativo.',
    image: portafolio3Img,
    url: '#',
  },
  {
    id: 4,
    title: 'Portafolio Grupo D',
    description: 'Proyecto de vinculación con la comunidad y la ciudad universitaria.',
    image: portafolio4Img,
    url: '#',
  },
  {
    id: 5,
    title: 'Portafolio Grupo E',
    description: 'Documentación de prácticas pre-profesionales y desarrollo de competencias.',
    image: portafolio5Img,
    url: '#',
  },
  {
    id: 6,
    title: 'Portafolio Grupo F',
    description: 'Registro de la visita de estudio a la comunidad de Tutumberos.',
    image: portafolio6Img,
    url: '#',
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

export function getProjectsByCycleId(cycleId) {
  return projects.filter((project) => project.cycleId === cycleId);
}