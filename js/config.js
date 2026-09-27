const EVENTO = {
  quinceanera: "Scarlett",
  edad: 15,

  fecha: "03 de octubre de 2026",
  hora: "7:00 PM",
  
 fechaEvento: "2026-10-03T19:00:00",

  whatsapp: {
  numero: "573127148078"
},
 
padres: {
  padre: "Marcos Rodriguez",
  madre: "Esmeralda Arboleda"
},
 
colores: {
  principal: "#3F6F9F",
  secundario: "#6FA8D7",
  acento: "#D6B45F",
  fondo: "transparent",
  texto: "#010a0f"
},

fondo: {
  habilitado: true,
  imagen: "/assets/images/fondo.png",

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
    imagen: "assets/images/portada.jpeg"
  },

  ubicacion: {
    nombre: "Salón Quinta Real",
    direccion: "Dirección del evento",
    maps: "https://maps.app.goo.gl/9VfBoxhSjmJo65bn7"
  },

  vestimenta: "Elegante",

  regalo: {
    titulo: "Tu presencia es mi mejor regalo",
    descripcion: "Si deseas obsequiarme algo, será recibido con mucho cariño."
  },

  musica: {
  archivo: "assets/music/15PRIMAVERASSI.mp3",
  autoplayAlAbrir: true,
  volumenInicial: 0.25
},

efectos: {
  petalos: true,
  particulas: true,
  brillo: true,
  vestido: true,
  mariposas: true,   

  intensidadPetalos: 18,
  intensidadMariposas: 6  
},

itinerarioHabilitado: true,

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


