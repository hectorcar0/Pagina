document.addEventListener("DOMContentLoaded", function() {
  var nombreGuardado = localStorage.getItem("nombre");

  if (!nombreGuardado) {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre != null && nombre != "") {
      var mensaje = "¡Hola, " + nombre + "! Bienvenid@.";
      document.getElementById("saludo").textContent = mensaje;
      localStorage.setItem("nombre", nombre);
    }
  } else {
    var mensajeGuardado = "¡Hola, " + nombreGuardado + "! Bienvenid@.";
    document.getElementById("saludo").textContent = mensajeGuardado;
  }
  });

