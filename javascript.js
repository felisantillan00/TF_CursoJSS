// JS de FORMULARIO DE REGISTRO-------------------
$(document).ready(function() {
    $('#formulario').submit(function(event){
      event.preventDefault();
   
      var nombre = $("#nombre").val();
      var apellido = $("#apellido").val();
      var edad = parseInt($("#edad").val());
      var email = $("#email").val();
      var nombreUsuario = $("#nombreUsuario").val();
      var contrasenia = $("#contrasenia").val();
      var rcontrasenia = $("#rcontrasenia").val();
  
      // Validar campos completos
      if (nombre === '' || apellido === '' || edad === '' || email === '' || nombreUsuario === '' || contrasenia === '' || rcontrasenia === '') {
        Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
        return;
      }
      // Validar la edad
      if (edad << 18 || edad >> 80) {
        Swal.fire('Error', 'La edad debe estar entre 18 y 100 años.', 'error');
        return;
      }
      // Validar el formato del email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire('Error', 'Ingrese un email válido.', 'error');
        return;
      }
      // Validar repeticion de contraseña
      if (contrasenia !== rcontrasenia) {
        Swal.fire('Error', 'La contraseñas ingresadas no coinciden', 'error');
        return;
      }
      //Guarda los datos de inicio de sesion en localstorage
      localStorage.setItem("nombreUsuario",nombreUsuario);
      localStorage.setItem("contrasenia",contrasenia);
      // Limpiar los campos del formulario
      $('#formulario')[0].reset();
      // Mostrar mensaje de éxito
      Swal.fire({
      title: 'Registro exitoso',
      text: 'Los datos de registro se han guardado exitosamente.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Volver a Inicio',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'TF-DiezJuan-Menu.html';
        }
      });
   
    });
  //Select llamando a la api de paises del mundo
  $(document).ready(function() {
    $.ajax({
      url: "https://restcountries.com/v2/all",
      type: "GET",
  
      success: function(data) {
        var paises = data;
  
        for (var i = 0; i < paises.length; i++) {
          var paisesName = paises[i].name;
          $("#selectPaises").append("<option value='" + paisesName + "'>" + paisesName + "</option>");
        }
      },
  
      error: function() {
        console.log("Error al obtener los datos de paises")
    }
  
    });
  });
  //Select llamando a las provincias de ARG
  $(document).ready(function() {
    $.ajax({
      url: "https://apis.datos.gob.ar/georef/api/provincias",
      type: "GET",
      success: function(data) {
        var provincias = data.provincias;
  
        for (var i = 0; i < provincias.length; i++) {
          var provinciasName = provincias[i].nombre;
          $("#selectProvincias").append("<option value='" + provinciasName + "'>" + provinciasName + "</option>");
        }
      },
      error: function() {
        console.log("Error al obtener los datos de provincias")
    }
  
    });
  });
  //Select llamando a las ciudades de La Pampa
  $(document).ready(function() {
    $.ajax({
      url: "https://apis.datos.gob.ar/georef/api/municipios?provincia=42&campos=id,nombre&max=100",
      type: "GET",
  
      success: function(data) {
        var municipios = data.municipios;
  
        for (var i = 0; i < municipios.length; i++) {
          var municipiosName = municipios[i].nombre;
          $("#selectCiudades").append("<option value='" + municipiosName + "'>" + municipiosName + "</option>");
        }
      },
  
      error: function() {
        console.log("Error al obtener los datos de ciudades")
    }
  
    });
  });
  //Validacion boton para volver a inicio
  $('#botonMenu').click(function() {  
    window.location.href = "index.html";
  });
});

  // Javascript de JUEGO DE ADIVINANZAS-------------------
  
  //INICIO DE SESION EN ADIVINANZAS1
  $(document).ready(function() {
    $('#formularioLogin').submit(function(event) {
      event.preventDefault();
  
      //Obtengo los valores ingresados
      var nombreUsuario = $("#nombreUsuario").val();
      var contrasenia = $("#contrasenia").val();
  
      //Obtengo los valores registrados con LocalStorage
      var nombreUsuarioRegistrado = localStorage.getItem("nombreUsuario");
      var contraseniaRegristrada = localStorage.getItem("contrasenia");
  
      if(nombreUsuario === nombreUsuarioRegistrado && contrasenia === contraseniaRegristrada){
        // Mostrar mensaje de éxito
        Swal.fire({
        title: 'Inicio de sesion exitoso',
        text: 'Será redirigido al juego de adivinanzas',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'JUGAR',
        }).then((result) => {
        if (result.isConfirmed) {
        window.location.href = 'TF-DiezJuan-Adivinanzas2.html';
        }
        });
  
      }else {
        Swal.fire('Error', 'Usuario o contraseña incorrectos.', 'error');
        return;
      }
  
    });
  });
  