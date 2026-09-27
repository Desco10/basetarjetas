// ==========================================
// XV EXPERIENCE - APP
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------
  // ELEMENTOS
  // ------------------------------------------

  const intro = document.getElementById("intro");
  const btnAbrir = document.getElementById("btnAbrir");
  const invitacion = document.getElementById("invitacion");

  const introTitulo = document.getElementById("introTitulo");
  const introNombre = document.getElementById("introNombre");

  const heroNombre = document.getElementById("heroNombre");
  const closingNombre = document.getElementById("closingNombre");

  const fechaEvento = document.getElementById("fechaEvento");
  const horaEvento = document.getElementById("horaEvento");

  const nombreLugar = document.getElementById("nombreLugar");
  const direccionLugar = document.getElementById("direccionLugar");
  const btnMaps = document.getElementById("btnMaps");

  const vestimenta = document.getElementById("vestimenta");

  const regaloTitulo = document.getElementById("regaloTitulo");
  const regaloDescripcion = document.getElementById("regaloDescripcion");

  const musica = document.getElementById("musica");
  const musicControl = document.getElementById("musicControl");
  const musicPlayer = document.getElementById("musicPlayer");
  const volumePanel = document.getElementById("volumePanel");
  const volumeToggle = document.getElementById("volumeToggle");
  const volumeControl = document.getElementById("volumeControl");

  const rsvpMensaje = document.getElementById("rsvpMensaje");


  const nombrePadre =
  document.getElementById("nombrePadre");

const nombreMadre =
  document.getElementById("nombreMadre");

if (nombrePadre) {
  nombrePadre.textContent =
    EVENTO.padres.padre;
}

if (nombreMadre) {
  nombreMadre.textContent =
    EVENTO.padres.madre;
}


// ==========================================
// PÉTALOS
// ==========================================

function crearPetalos() {

  const container =
    document.getElementById("petalsContainer");

  if (!container) return;

  if (!EVENTO.efectos.petalos) return;


  const cantidad =
    EVENTO.efectos.intensidadPetalos || 18;


  for (let i = 0; i < cantidad; i++) {

    const petal =
      document.createElement("span");

    petal.className = "petal";


    const tamaño =
      8 + Math.random() * 10;

    const duracion =
      7 + Math.random() * 8;

    const retraso =
      Math.random() * 10;


    petal.style.left =
      `${Math.random() * 100}%`;

    petal.style.width =
      `${tamaño}px`;

    petal.style.height =
      `${tamaño * 1.45}px`;

    petal.style.animationDuration =
      `${duracion}s`;

    petal.style.animationDelay =
      `-${retraso}s`;

    petal.style.opacity =
      `${0.3 + Math.random() * 0.4}`;


    container.appendChild(petal);

  }

}

crearPetalos();


function crearMariposas() {

  const container =
    document.getElementById("butterfliesContainer");

  if (!container) return;

  if (!EVENTO.efectos.mariposas) return;

  const cantidad =
    EVENTO.efectos.intensidadMariposas || 6;

  const svgMariposa = `
    <svg viewBox="0 0 100 80" class="butterfly-svg">
      <g class="wing wing-left">
        <path d="M50 40 C 20 5, -5 15, 5 40 C -5 65, 20 75, 50 40 Z"/>
      </g>
      <g class="wing wing-right">
        <path d="M50 40 C 80 5, 105 15, 95 40 C 105 65, 80 75, 50 40 Z"/>
      </g>
      <ellipse cx="50" cy="40" rx="3" ry="14" class="body"/>
    </svg>
  `;

  for (let i = 0; i < cantidad; i++) {

    const mariposa =
      document.createElement("span");

    mariposa.className = "butterfly";
    mariposa.innerHTML = svgMariposa;

    const duracion = 16 + Math.random() * 10;
    const retraso = Math.random() * duracion;
    const tamaño = 30 + Math.random() * 20;

    mariposa.style.left = `${Math.random() * 100}%`;
    mariposa.style.top = `${20 + Math.random() * 60}%`;
    mariposa.style.animationDuration = `${duracion}s`;
    mariposa.style.animationDelay = `-${retraso}s`;
    mariposa.style.width = `${tamaño}px`;
    mariposa.style.height = `${tamaño * 0.8}px`;

    container.appendChild(mariposa);

  }

}
function crearMariposas() {

  const container =
    document.getElementById("butterfliesContainer");

  if (!container) return;

  if (!EVENTO.efectos.mariposas) return;

  const cantidad =
    EVENTO.efectos.intensidadMariposas || 6;

  const svgMariposa = `
    <svg viewBox="0 0 100 80" class="butterfly-svg">
      <defs>
        <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eaf4ff"/>
          <stop offset="45%" stop-color="#a9cdeb"/>
          <stop offset="100%" stop-color="#5b8fc4"/>
        </linearGradient>
      </defs>
      <g class="wing wing-left">
        <path d="M50 40 C 20 5, -8 12, 3 38 C -8 64, 20 78, 50 40 Z" fill="url(#wingGradient)" stroke="#3F6F9F" stroke-width="0.6"/>
        <path d="M50 40 C 32 20, 12 22, 15 38 C 12 55, 32 60, 50 40 Z" fill="#ffffff" opacity="0.35"/>
      </g>
      <g class="wing wing-right">
        <path d="M50 40 C 80 5, 108 12, 97 38 C 108 64, 80 78, 50 40 Z" fill="url(#wingGradient)" stroke="#3F6F9F" stroke-width="0.6"/>
        <path d="M50 40 C 68 20, 88 22, 85 38 C 88 55, 68 60, 50 40 Z" fill="#ffffff" opacity="0.35"/>
      </g>
      <ellipse cx="50" cy="40" rx="2.5" ry="15" fill="#3F6F9F"/>
    </svg>
  `;

  for (let i = 0; i < cantidad; i++) {

    const wrapper =
      document.createElement("span");

    wrapper.className = "butterfly";

    const duracion = 16 + Math.random() * 10;
    const retraso = Math.random() * duracion;
    const tamaño = 34 + Math.random() * 22;

    wrapper.style.left = `${Math.random() * 100}%`;
    wrapper.style.top = `${20 + Math.random() * 60}%`;
    wrapper.style.animationDuration = `${duracion}s`;
    wrapper.style.animationDelay = `-${retraso}s`;
    wrapper.style.width = `${tamaño}px`;
    wrapper.style.height = `${tamaño * 0.8}px`;

    wrapper.innerHTML = `
      ${svgMariposa}
      <span class="butterfly-trail">
        ${Array.from({ length: 5 }).map((_, idx) =>
          `<span class="spark" style="animation-delay:-${idx * 0.35}s"></span>`
        ).join("")}
      </span>
    `;

    container.appendChild(wrapper);

  }

}

crearMariposas();




// ==========================================
// FONDO DESENFOCADO EN CARRUSELES
// ==========================================

function aplicarFondoDesenfocado() {

  document.querySelectorAll(".carousel-slide").forEach((slide) => {

    const img = slide.querySelector("img");

    if (!img) return;

    slide.style.setProperty(
      "--slide-bg-image",
      `url("${img.getAttribute("src")}")`
    );

  });

}

aplicarFondoDesenfocado();

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

function activarAnimacionesScroll() {

  const secciones =
    document.querySelectorAll(".section");

  if (!secciones.length) return;

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  secciones.forEach((seccion) => {
    observer.observe(seccion);
  });

}

activarAnimacionesScroll();



  // ------------------------------------------
  // CONFIGURACIÓN VISUAL
  // ------------------------------------------

  document.documentElement.style.setProperty(
    "--primary",
    EVENTO.colores.principal
  );

  document.documentElement.style.setProperty(
    "--secondary",
    EVENTO.colores.secundario
  );

  document.documentElement.style.setProperty(
    "--accent",
    EVENTO.colores.acento
  );

  document.documentElement.style.setProperty(
    "--background",
    EVENTO.colores.fondo
  );

  document.documentElement.style.setProperty(
    "--text",
    EVENTO.colores.texto
  );



   // ------------------------------------------
// CONFIGURACIÓN DEL FONDO
// ------------------------------------------

if (EVENTO.fondo) {

  if (EVENTO.fondo.habilitado === true && EVENTO.fondo.imagen) {

    document.documentElement.style.setProperty(
      "--event-background-image",
      `url("${EVENTO.fondo.imagen}")`
    );

    document.documentElement.style.setProperty(
      "--event-background-position",
      EVENTO.fondo.posicion || "center center"
    );

    document.documentElement.style.setProperty(
      "--event-background-size",
      EVENTO.fondo.tamaño || "cover"
    );

    document.documentElement.style.setProperty(
      "--event-background-repeat",
      EVENTO.fondo.repeticion || "no-repeat"
    );

       document.documentElement.style.setProperty(
      "--event-background-attachment",
      EVENTO.fondo.fijo ? "fixed" : "scroll"
    );

    document.documentElement.style.setProperty(
      "--event-background-opacity",
      EVENTO.fondo.opacidad ?? 0.42
    );

    document.documentElement.style.setProperty(
      "--event-background-blur",
      `${EVENTO.fondo.desenfoque ?? 0}px`
    );

  } else {

    document.documentElement.style.setProperty(
      "--event-background-image",
      "none"
    );

  }

}


// ------------------------------------------
// CONFIGURACIÓN DEL EFECTO CRISTAL
// ------------------------------------------

if (EVENTO.cristal) {

  document.documentElement.style.setProperty(
    "--glass-opacity",
    EVENTO.cristal.opacidad ?? 0.68
  );

  document.documentElement.style.setProperty(
    "--glass-strong-opacity",
    EVENTO.cristal.opacidadFuerte ?? 0.80
  );

  document.documentElement.style.setProperty(
    "--glass-blur",
    `${EVENTO.cristal.desenfoque ?? 16}px`
  );

  document.documentElement.style.setProperty(
    "--glass-saturate",
    `${EVENTO.cristal.saturacion ?? 120}%`
  );

  document.documentElement.style.setProperty(
    "--glass-border-opacity",
    EVENTO.cristal.borde ?? 0.35
  );

}
  // ------------------------------------------
  // DATOS DEL EVENTO
  // ------------------------------------------

  introTitulo.textContent = EVENTO.portada.titulo;
  introNombre.textContent = EVENTO.quinceanera;

  heroNombre.textContent = EVENTO.quinceanera;
  closingNombre.textContent = EVENTO.quinceanera;

  fechaEvento.textContent = EVENTO.fecha;
  horaEvento.textContent = EVENTO.hora;

  nombreLugar.textContent = EVENTO.ubicacion.nombre;
  direccionLugar.textContent = EVENTO.ubicacion.direccion;

  btnMaps.href = EVENTO.ubicacion.maps;

  vestimenta.textContent = EVENTO.vestimenta;

  regaloTitulo.textContent = EVENTO.regalo.titulo;
  regaloDescripcion.textContent = EVENTO.regalo.descripcion;


  // ------------------------------------------
  // FOTO PRINCIPAL
  // ------------------------------------------

  const fotoPrincipal = document.getElementById("fotoPrincipal");

  if (fotoPrincipal && EVENTO.portada.imagen) {
    fotoPrincipal.src = EVENTO.portada.imagen;
  }


  // ------------------------------------------
  // MÚSICA
  // ------------------------------------------

  if (EVENTO.musica.archivo) {
    musica.src = EVENTO.musica.archivo;
  }

  let musicaReproduciendo = false;
  // Volumen inicial
musica.volume = EVENTO.musica.volumenInicial ?? 0.25;

volumeControl.value = musica.volume;
  

// ------------------------------------------
// CONTROL DE VOLUMEN
// ------------------------------------------

volumeToggle.addEventListener("click", (event) => {

  event.stopPropagation();

  musicPlayer.classList.toggle("show-volume");

});


volumeControl.addEventListener("input", () => {

  musica.volume = Number(volumeControl.value);

});



  // ------------------------------------------
  // ABRIR INVITACIÓN
  // ------------------------------------------

  btnAbrir.addEventListener("click", async () => {

    intro.classList.add("intro-open");

    setTimeout(() => {
      invitacion.classList.add("invitation-visible");
    }, 700);


    // La música solamente intenta comenzar
    // después de la interacción del usuario.
        if (EVENTO.musica.autoplayAlAbrir && musica.src) {

      try {

        await musica.play();

        musicaReproduciendo = true;
        musicControl.classList.add("playing");
        iniciarNotasMusicales();

      } catch (error) {

        console.log(
          "La música necesita iniciar manualmente:",
          error
        );

      }

    }
  });


  // ------------------------------------------
  // CONTROL DE MÚSICA
  // ------------------------------------------

   musicControl.addEventListener("click", async () => {

    if (musica.paused) {

      try {

        await musica.play();

        musicaReproduciendo = true;
        musicControl.classList.add("playing");
        iniciarNotasMusicales();

      } catch (error) {

        console.log(
          "No fue posible reproducir la música:",
          error
        );

      }

    } else {

      musica.pause();

      musicaReproduciendo = false;
      musicControl.classList.remove("playing");
      detenerNotasMusicales();

    }

  });


  // ------------------------------------------
  // NOTAS MUSICALES FLOTANTES
  // ------------------------------------------

  let intervaloNotas = null;

  function crearNota() {

    const contenedor =
      document.getElementById("musicNotes");

    if (!contenedor) return;

    const nota =
      document.createElement("span");

    nota.className = "music-note";
    nota.textContent =
      Math.random() > 0.5 ? "♪" : "♫";

        const deriva =
      (Math.random() - 0.5) * 20;

    const rotacion =
      (Math.random() - 0.5) * 40;

    nota.style.setProperty(
      "--note-drift",
      `${deriva}px`
    );

    nota.style.setProperty(
      "--note-rotate",
      `${rotacion}deg`
    );

    contenedor.appendChild(nota);

    setTimeout(() => {
      nota.remove();
    }, 1800);

  }

  function iniciarNotasMusicales() {

    if (intervaloNotas) return;

    crearNota();

    intervaloNotas = setInterval(
      crearNota,
      500
    );

  }

  function detenerNotasMusicales() {

    clearInterval(intervaloNotas);
    intervaloNotas = null;

  }

  // ------------------------------------------
  // CUENTA REGRESIVA
  // ------------------------------------------

  iniciarCuentaRegresiva();


  function iniciarCuentaRegresiva() {

    /*
      IMPORTANTE:

      Por ahora usamos la fecha directamente
      desde la configuración.

      Para que JavaScript pueda calcularla
      correctamente, necesitamos convertir
      el texto a una fecha.

      Actualmente:
      14 de noviembre de 2026
    */

    const fechaObjetivo = new Date(EVENTO.fechaEvento);


    function actualizarCountdown() {

      const ahora = new Date();

      const diferencia = fechaObjetivo - ahora;


      if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
      }


      const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
      );

      const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      );

      const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
      );

      const segundos = Math.floor(
        (diferencia / 1000) % 60
      );


      document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

      document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

      document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

      document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
    }


    actualizarCountdown();

    setInterval(actualizarCountdown, 1000);
  }

 

// ------------------------------------------
// ITINERARIO
// ------------------------------------------

function cargarItinerario() {

  const seccion =
    document.getElementById("seccionItinerario");

  const contenedor =
    document.getElementById("itinerario");

  if (!seccion || !contenedor) return;


  // ----------------------------------------
  // ACTIVAR / DESACTIVAR ITINERARIO
  // ----------------------------------------

  if (EVENTO.itinerarioHabilitado !== true) {

    seccion.style.display = "none";

    return;
  }


  // ----------------------------------------
  // MOSTRAR ITINERARIO
  // ----------------------------------------

  seccion.style.display = "";


  contenedor.innerHTML = "";


  EVENTO.itinerario.forEach((evento) => {

    const item =
      document.createElement("div");

    item.className = "timeline-item";


    item.innerHTML = `

      <div class="timeline-dot">

        <span class="timeline-icon">
          ${evento.icono || "♡"}
        </span>

      </div>

      <div class="timeline-content">

        <span class="timeline-time">
          ${evento.hora}
        </span>

        <h3>
          ${evento.titulo}
        </h3>

        <p>
          ${evento.descripcion}
        </p>

      </div>

    `;


    contenedor.appendChild(item);

  });
}


cargarItinerario();


// ------------------------------------------
// DRESS CODE
// ------------------------------------------

function cargarDressCode() {

  const seccion =
    document.getElementById("seccionDressCode");

  const vestimenta =
    document.getElementById("vestimenta");

  const coloresReservados =
    document.getElementById("coloresReservados");

  const listaColores =
    document.getElementById("listaColoresReservados");

  const mensajeColores =
    document.getElementById("mensajeColoresReservados");


  if (!seccion) return;


  // ----------------------------------------
  // ACTIVAR / DESACTIVAR DRESS CODE
  // ----------------------------------------

  if (
    EVENTO.dressCode &&
    EVENTO.dressCode.habilitado === false
  ) {

    seccion.style.display = "none";

    return;
  }


  seccion.style.display = "";


  // ----------------------------------------
  // ESTILO DE VESTIMENTA
  // ----------------------------------------

  if (
    vestimenta &&
    EVENTO.dressCode
  ) {

    vestimenta.textContent =
      EVENTO.dressCode.estilo || "Elegante";

  }


  // ----------------------------------------
  // COLORES RESERVADOS
  // ----------------------------------------

  if (
    !coloresReservados ||
    !listaColores ||
    !mensajeColores
  ) return;


  if (
    !EVENTO.dressCode ||
    EVENTO.dressCode.coloresReservadosHabilitado !== true
  ) {

    coloresReservados.style.display = "none";

    return;
  }


  coloresReservados.style.display = "";


  listaColores.innerHTML = "";


  const colores =
    EVENTO.dressCode.coloresReservados || [];


  colores.forEach((color) => {

    const item =
      document.createElement("div");

    item.className = "reserved-color";


    item.innerHTML = `

      <span
        class="color-swatch"
        style="background-color: ${color.color};"
        aria-hidden="true"
      ></span>

      <span class="color-name">
        ${color.nombre}
      </span>

    `;


    listaColores.appendChild(item);

  });


  mensajeColores.textContent =
    EVENTO.dressCode.mensajeColores || "";

}


cargarDressCode();



  // ------------------------------------------
// RSVP → WHATSAPP
// ------------------------------------------

const botonesRSVP = document.querySelectorAll(
  ".btn-rsvp"
);

let respuestaRSVP = null;


// ------------------------------------------
// ABRIR FORMULARIO DE RSVP
// ------------------------------------------

botonesRSVP.forEach((boton) => {

  boton.addEventListener("click", () => {

    respuestaRSVP =
      boton.dataset.respuesta;

    abrirModalRSVP();

  });

});


// ------------------------------------------
// ABRIR MODAL
// ------------------------------------------

function abrirModalRSVP() {

  const modal = document.getElementById("rsvpModal");

  if (!modal) return;

  const titulo =
    document.getElementById("rsvpModalTitle");

  const texto =
    document.getElementById("rsvpModalText");

  if (respuestaRSVP === "si") {

    titulo.textContent =
      "¡Qué alegría contar contigo!";

    texto.textContent =
      "Déjanos tu nombre y apellido para confirmar tu asistencia.";

  } else {

    titulo.textContent =
      "Gracias por avisarnos";

    texto.textContent =
      "Déjanos tu nombre y apellido para registrar tu respuesta.";

  }

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";


  setTimeout(() => {

    const nombre =
      document.getElementById("rsvpNombre");

    if (nombre) {
      nombre.focus();
    }

  }, 250);

}


// ------------------------------------------
// CERRAR MODAL
// ------------------------------------------

const rsvpModalClose =
  document.getElementById("rsvpModalClose");


if (rsvpModalClose) {

  rsvpModalClose.addEventListener(
    "click",
    cerrarModalRSVP
  );

}


function cerrarModalRSVP() {

  const modal =
    document.getElementById("rsvpModal");

  const formulario =
    document.getElementById("rsvpForm");

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

  if (formulario) {
    formulario.reset();
  }

  respuestaRSVP = null;

}


// ------------------------------------------
// CERRAR AL HACER CLICK FUERA
// ------------------------------------------

const rsvpModal =
  document.getElementById("rsvpModal");


if (rsvpModal) {

  rsvpModal.addEventListener("click", (event) => {

    if (
      event.target.classList.contains(
        "rsvp-modal-overlay"
      )
    ) {

      cerrarModalRSVP();

    }

  });

}


// ------------------------------------------
// ENVIAR RESPUESTA A WHATSAPP
// ------------------------------------------

const rsvpForm =
  document.getElementById("rsvpForm");


if (rsvpForm) {

  rsvpForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
      document
        .getElementById("rsvpNombre")
        .value
        .trim();

    const apellido =
      document
        .getElementById("rsvpApellido")
        .value
        .trim();


    if (!nombre || !apellido) {

      return;

    }


    const nombreCompleto =
      `${nombre} ${apellido}`;


    let mensaje;


    // --------------------------------------
    // CONFIRMA ASISTENCIA
    // --------------------------------------

    if (respuestaRSVP === "si") {

      mensaje =
`Hola ${EVENTO.quinceanera} 👋

Soy ${nombreCompleto}.

Muchas gracias por invitarme a tus XV años. 💕

Confirmo con mucha alegría que sí asistiré a tu celebración.

Será un placer acompañarte en este momento tan especial. ✨

¡Nos vemos! 💐`;


    // --------------------------------------
    // NO PODRÁ ASISTIR
    // --------------------------------------

    } else {

      mensaje =
`Hola ${EVENTO.quinceanera} 👋

Soy ${nombreCompleto}.

Muchas gracias por invitarme a tus XV años. 💕

Lamentablemente no podré asistir a tu celebración.

Te agradezco muchísimo la invitación y deseo que tengas una noche hermosa e inolvidable. ✨

¡Felicidades por tus XV años! ❤️`;

    }


    // --------------------------------------
    // ABRIR WHATSAPP
    // --------------------------------------

    const numero =
      EVENTO.whatsapp.numero;


    const url =
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


    window.location.href = url;

  });

}

  // ------------------------------------------
  // ESTADO INICIAL
  // ------------------------------------------

  invitacion.classList.remove("invitation-visible");



// ==========================================
// CARRUSELES
// ==========================================

document.querySelectorAll("[data-carousel]").forEach((carousel) => {

  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-slide");

  const prevButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");

  const dotsContainer = carousel.querySelector(".carousel-dots");

  let currentIndex = 0;

  let startX = 0;
  let endX = 0;


  // ------------------------------------------
  // INDICADORES
  // ------------------------------------------

  slides.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.className = "carousel-dot";

    dot.setAttribute(
      "aria-label",
      `Ir a fotografía ${index + 1}`
    );

    dot.addEventListener("click", () => {

      currentIndex = index;

      actualizarCarrusel();

    });

    dotsContainer.appendChild(dot);

  });


  const dots =
    dotsContainer.querySelectorAll(".carousel-dot");


  // ------------------------------------------
  // ACTUALIZAR
  // ------------------------------------------

  function actualizarCarrusel() {

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;


    dots.forEach((dot, index) => {

      dot.classList.toggle(
        "active",
        index === currentIndex
      );

    });

  }


  // ------------------------------------------
  // SIGUIENTE
  // ------------------------------------------

  nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    actualizarCarrusel();

  });


  // ------------------------------------------
  // ANTERIOR
  // ------------------------------------------

  prevButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }

    actualizarCarrusel();

  });


  // ------------------------------------------
  // SWIPE MÓVIL
  // ------------------------------------------

  track.addEventListener("touchstart", (event) => {

    startX = event.touches[0].clientX;

  });


  track.addEventListener("touchend", (event) => {

    endX = event.changedTouches[0].clientX;

    const diferencia = startX - endX;


    if (Math.abs(diferencia) < 50) {
      return;
    }


    if (diferencia > 0) {

      currentIndex++;

      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }

    } else {

      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }

    }

    actualizarCarrusel();

  });


  actualizarCarrusel();

});






});