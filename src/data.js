export const proyectos = [
  {
    id: 1,
    nombre: 'Proyecto ERP',
    dificultad: 'alta',
    tareas: [
      { id: 1, nombre: 'Definir requerimientos', avance: 100 },
      { id: 2, nombre: 'Diseño de base de datos', avance: 60 },
      { id: 3, nombre: 'Desarrollo backend', avance: 0 },
      { id: 4, nombre: 'Pruebas QA', avance: 0 },
    ],
  },
  {
    id: 2,
    nombre: 'Proyecto E-commerce',
    dificultad: 'media',
    tareas: [
      { id: 1, nombre: 'Diseño UI/UX', avance: 100 },
      { id: 2, nombre: 'Carrito de compras', avance: 45 },
      { id: 3, nombre: 'Pasarela de pagos', avance: 20 },
      { id: 4, nombre: 'Despliegue', avance: 0 },
    ],
  },
  {
    id: 3,
    nombre: 'Proyecto App Móvil',
    dificultad: 'baja',
    tareas: [
      { id: 1, nombre: 'Wireframes', avance: 100 },
      { id: 2, nombre: 'Módulo de notificaciones', avance: 100 },
      { id: 3, nombre: 'Módulo de perfil', avance: 70 },
      { id: 4, nombre: 'Publicación en tienda', avance: 0 },
    ],
  },
];

export const productos = [
  {
    id: 1,
    nombre: 'Mouse Logitech',
    imagen: 'https://promart.vteximg.com.br/arquivos/ids/10346240-1000-1000/Image-1.jpg?v=639085122598330000',
    marca: 'Logitech',
    modelo: 'M170',
    precio: 45,
    descripcion: 'Mouse inalámbrico ergonómico con receptor USB.',
  },
  {
    id: 2,
    nombre: 'Teclado Mecánico',
    imagen: 'https://rayotec.pe/wp-content/uploads/2024/02/HORUS-TKL-BLACK.jpg',
    marca: 'Redragon',
    modelo: 'K552',
    precio: 120,
    descripcion: 'Teclado mecánico retroiluminado para gaming.',
  },
  {
    id: 3,
    nombre: 'Monitor 24 pulgadas',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_836979-MLA95812905545_102025-O.webp',
    marca: 'Samsung',
    modelo: 'LS24',
    precio: 650,
    descripcion: 'Monitor Full HD IPS de 24 pulgadas.',
  },
  {
    id: 4,
    nombre: 'Audífonos Bluetooth',
    imagen: 'https://promart.vteximg.com.br/arquivos/ids/9739038/imageUrl_1.jpg?v=638998204742230000',
    marca: 'Sony',
    modelo: 'WH-CH510',
    precio: 180,
    descripcion: 'Audífonos inalámbricos con cancelación de ruido.',
  },
  {
    id: 5,
    nombre: 'Webcam HD',
    imagen: 'https://media.falabella.com/falabellaPE/118634907_01/w=1500,h=1500,fit=cover',
    marca: 'Logitech',
    modelo: 'C920',
    precio: 210,
    descripcion: 'Webcam Full HD 1080p con micrófono incorporado.',
  },
];
