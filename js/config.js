const EVENTO = {
  quinceanera: "Valentina",
  edad: 15,
 
    personalizacionInvitados: {
    habilitada: true,
    archivo: "invitados.json"
  },

  // ==========================================
  // PANTALLA DE APERTURA
  // ==========================================
  apertura: {

    // Imagen de fondo opcional (true / false)
    fondo: {
      habilitado: true,
      imagen: "assets/images/VALENTINA1P.jpeg",
      posicion: "center center",
      opacidad: 1,       // 0 a 1
      desenfoque: 0,     // en px
      oscurecer: 0.25    // 0 a 1 · capa oscura para leer el texto
    },

    // Sello de cera para abrir la invitación
    sello: {
      color: null,                 // null = usa colores.principal · o un hex: "#8c1c2b"
      emblema: "mono",             // "mono" (moño) o "inicial"
      inicial: null,               // null = primera letra de la quinceañera
      texto: "Abrir invitación",
      listones: true               // true / false
    }

  },

  fecha: "24 de octubre de 2026",
hora: "7:00 PM",
fechaEvento: "2026-10-24T19:00:00",

  whatsapp: {
  numero: "573146443417"
},
 
padres: {
  padre: "Andres Ordoñez",
  madre: "Yenny Urrea"
},
 
colores: {
  principal: "#3F82B8",
  secundario: "#78B4DC",
  acento: "#9FAAB5",
  fondo: "transparent",
  texto: "#17232D"
},

fondo: {
  habilitado: true,
  imagen: "/assets/images/fondovalen.jpeg",

  // Intensidad de la imagen de fondo
  opacidad: 0.85,

  // Posición de la imagen
  posicion: "center center",

  // cover, contain, etc.
  tamaño: "cover",

  // fijo al hacer scroll
  fijo: true,

  // 0 = sin desenfoque
  desenfoque: 0
},

cristal: {
  opacidad: 0.30,        // antes 0.68 — tarjetas más transparentes
  opacidadFuerte: 0.40,  // antes 0.80 — igual, la del hero/foto principal
  desenfoque: 20,        // un poco más de blur en el cristal mismo, para que siga siendo legible el texto
  saturacion: 140,       // un poco más de "pop" de color al fondo visto a través
  borde: 0.45            // borde un poco más marcado, típico del efecto glass
},

/* rosado 
  colores: {
    principal: "#d98b9b00",
    secundario: "#f7dde200",
    acento: "#c9a55c09",
    fondo: "#fff9fa00",
    texto: "#34282C"
  },
 */
  portada: {
    titulo: "Mis XV Años",
    subtitulo: "Una noche para recordar",
    imagen: "assets/images/portvalen.jpeg"
  },

  ubicacion: {
    nombre: "Salón Milan",
    direccion: "Dirección del evento",
    maps: "https://maps.app.goo.gl/ACu3f6iXzyMPC1CN8"
  },

  vestimenta: "Formal",

  regalo: {
    titulo: "Tu presencia es mi mejor regalo",
    descripcion: "Si deseas obsequiarme algo, será recibido con mucho cariño."
  },

  musica: {
  archivo: "assets/music/instrumental.mpeg",
  autoplayAlAbrir: true,
  volumenInicial: 0.25
},

efectos: {
  petalos: true,
  particulas: true,
  brillo: true,
  vestido: true,
  mariposas: true,   

  intensidadPetalos: 10,
  intensidadMariposas: 8  
},

itinerarioHabilitado: true,


itinerario: [
  {
    hora: "",
    titulo: "Ingreso y bienvenida",
    descripcion: "Recepción y bienvenida a los invitados."
  },
  {
    hora: "",
    titulo: "Photo Booth",
    descripcion: "Sesión de fotos y recuerdos con los invitados."
  },
  {
    hora: "",
    titulo: "Apertura",
    descripcion: "Inicio de la celebración."
  },
  {
    hora: "",
    titulo: "Proyección de video",
    descripcion: "Proyección de un video especial."
  },
  {
    hora: "",
    titulo: "Iniciación oficial",
    descripcion: "Inicio oficial del protocolo de los XV años."
  },
  {
    hora: "",
    titulo: "Ingreso de la corte de honor",
    descripcion: "Entrada de la corte de honor."
  },
  {
    hora: "",
    titulo: "Entrada de la quinceañera",
    descripcion: "Entrada especial de la quinceañera."
  },
  {
    hora: "",
    titulo: "Presentación",
    descripcion: "Presentación de la quinceañera ante sus invitados."
  },
  {
    hora: "",
    titulo: "Entrega de la muñeca",
    descripcion: "Momento especial de entrega de la muñeca."
  },
  {
    hora: "",
    titulo: "Protocolo tradicional",
    descripcion: "Ceremonia y momentos tradicionales de los XV años."
  },
  {
    hora: "",
    titulo: "Vals principal",
    descripcion: "Vals principal de la quinceañera."
  },
  {
    hora: "",
    titulo: "Vals con familiares",
    descripcion: "Vals especial junto a familiares."
  },
  {
    hora: "",
    titulo: "Brindis y palabras de agradecimiento",
    descripcion: "Brindis y palabras especiales para los invitados."
  },
  {
    hora: "",
    titulo: "Canto de cumpleaños",
    descripcion: "Celebración y canto de cumpleaños."
  },
  {
    hora: "",
    titulo: "Sesión de fotos y recuerdos",
    descripcion: "Sesión de fotos para conservar momentos especiales."
  },
  {
    hora: "",
    titulo: "Cena",
    descripcion: "Momento para compartir y disfrutar de la cena."
  },
  {
    hora: "",
    titulo: "Baile sorpresa y apertura de pista",
    descripcion: "Baile sorpresa y apertura de la pista de baile."
  },
  {
    hora: "",
    titulo: "Finalización del evento",
    descripcion: "Cierre de esta celebración tan especial."
  }
],



dressCode: {
  habilitado: true,

  estilo: "Formal",

  coloresReservadosHabilitado: true,

  coloresReservados: [
    {
      nombre: "Azul Celeste ",
      color: "#B5CFF4"
    },
    
    
  ],

  mensajeColores:
    "Este color estará reservado especialmente para la quinceañera. Gracias por ayudarnos a mantener este detalle especial de su celebración. ♡"
},
};