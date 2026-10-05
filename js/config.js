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
      imagen: "assets/images/aperturavalen.jpeg",
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
  numero: "573246030396"
},
 
padres: {
  padre: "Andres Ordoñez",
  madre: "Yenni Urrea"
},
 
colores: {
  principal: "#5B9BCB",
  secundario: "#BFDDF2",
  acento: "#C7CCD1",
  fondo: "transparent",
  texto: "#17232D"
},


fondo: {
  habilitado: true,
  imagen: "/assets/images/portsenci.png",

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
    maps: "https://share.google/cVRSlkT5BKEvAPO14"
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

itinerarioHabilitado: false,

itinerario: [
  {
    hora: "7:00 PM",
    icono: "♡",
    titulo: "Recepción de invitados",
    descripcion: "Bienvenida y recepción de nuestros invitados."
  },
  {
    hora: "9:00 PM",
    icono: "✦",
    titulo: "Entrada de la quinceañera",
    descripcion: "Un momento especial para dar inicio a la celebración."
  },
  
  {
    hora: "9:30 PM",
    icono: "♕",
    titulo: "Vals de XV años",
    descripcion: "El tradicional vals de nuestra quinceañera."
  },
  {
    hora: "10:30 PM",
    icono: "♢",
    titulo: "Cena",
    descripcion: "Compartiremos una deliciosa cena."
   },


  {
    hora: "12:00 PM",
    icono: "♫",
    titulo: "Celebración",
    descripcion: "Música, baile y mucha diversión."
  },
  {
    hora: "3:00 AM",
    icono: "♡",
    titulo: "Despedida",
    descripcion: "Gracias por acompañarnos en esta noche tan especial."
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