// ==========================================
// XV EXPERIENCE - PERSONALIZACIÓN DE INVITADOS
// ==========================================

(function () {

  "use strict";

  // ------------------------------------------
  // ESTADO DEL INVITADO
  // ------------------------------------------

  window.INVITADO_ACTUAL = null;

  // Indica a app.js cuándo terminó la carga del invitado
  // (exista o no, con o sin errores), para revelar la
  // pantalla de apertura ya completa.
  window.INVITADOS_LISTOS = false;

  function terminarCarga() {

    window.INVITADOS_LISTOS = true;

    document.dispatchEvent(
      new Event("invitados:resuelto")
    );

  }


  // ------------------------------------------
  // COMPROBAR CONFIGURACIÓN
  // ------------------------------------------

  if (
    typeof EVENTO === "undefined" ||
    !EVENTO.personalizacionInvitados ||
    EVENTO.personalizacionInvitados.habilitada !== true
  ) {
    window.INVITADOS_LISTOS = true;
    return;
  }


  // ------------------------------------------
  // OBTENER ID DESDE LA URL
  // ------------------------------------------

  function obtenerIdInvitado() {

    const ruta =
      window.location.pathname
        .replace(/^\/+|\/+$/g, "");

    if (!ruta) {
      return null;
    }

    // Evitamos tratar rutas especiales
    if (
      ruta === "admin" ||
      ruta.startsWith("admin/")
    ) {
      return null;
    }

    // Por ahora utilizamos solamente
    // el primer segmento de la URL.
    return ruta.split("/")[0].toLowerCase();

  }


  // ------------------------------------------
  // CARGAR INVITADOS
  // ------------------------------------------

  async function cargarInvitadoInterno() {

    const idInvitado =
      obtenerIdInvitado();

    if (!idInvitado) {
      return;
    }


    try {

      const respuesta =
        await fetch(
          EVENTO.personalizacionInvitados.archivo
        );


      if (!respuesta.ok) {
        throw new Error(
          "No fue posible cargar invitados.json"
        );
      }


      const invitados =
        await respuesta.json();


      if (!Array.isArray(invitados)) {
        throw new Error(
          "El archivo de invitados no tiene un formato válido"
        );
      }


      const invitado =
        invitados.find(
          (item) =>
            String(item.id).toLowerCase() === idInvitado
        );


      if (!invitado) {

        console.log(
          "Invitado no encontrado:",
          idInvitado
        );

        return;
      }


      // --------------------------------------
      // GUARDAR INVITADO ACTUAL
      // --------------------------------------

      window.INVITADO_ACTUAL = invitado;


      console.log(
        "Invitado identificado:",
        invitado
      );


      // --------------------------------------
      // MOSTRAR PERSONALIZACIÓN
      // --------------------------------------

      mostrarInvitado(invitado);


      // --------------------------------------
      // AVISAR A LA APP (RSVP, etc.)
      // --------------------------------------

      document.dispatchEvent(
        new CustomEvent(
          "invitado:cargado",
          { detail: invitado }
        )
      );


    } catch (error) {

      console.error(
        "Error en personalización de invitados:",
        error
      );

    }

  }


  async function cargarInvitado() {

    try {

      await cargarInvitadoInterno();

    } finally {

      terminarCarga();

    }

  }


  // ------------------------------------------
  // MOSTRAR INVITADO
  // ------------------------------------------

  function mostrarInvitado(invitado) {

    const introContent =
      document.querySelector(".intro-content");

    if (!introContent) {
      return;
    }


    const tarjeta =
      document.createElement("div");

    tarjeta.className =
      "guest-personalization";


    const nombreCompleto =
      `${invitado.nombre} ${invitado.apellido}`;


    let textoPersonas;


    if (
      Number(invitado.acompanantes) > 0
    ) {

      const total =
        1 + Number(invitado.acompanantes);

      textoPersonas =
        `Invitación para ${total} personas`;

    } else {

      textoPersonas =
        "Invitación individual";

    }


    tarjeta.innerHTML = `

      <span class="guest-personalization-label">
        Invitación especial para
      </span>

      <strong class="guest-personalization-name">
        ${nombreCompleto}
      </strong>

      <span class="guest-personalization-people">
        ${textoPersonas}
      </span>

    `;


    const botonAbrir =
      document.getElementById("btnAbrir");


    if (botonAbrir) {

      introContent.insertBefore(
        tarjeta,
        botonAbrir
      );

    } else {

      introContent.appendChild(
        tarjeta
      );

    }

  }


  // ------------------------------------------
  // INICIAR
  // ------------------------------------------

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      cargarInvitado
    );

  } else {

    cargarInvitado();

  }

})();