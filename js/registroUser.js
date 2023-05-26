var empleados = [];

function registroUsuaio() {
  var usuario = document.getElementById('usuario').value;
  var password = document.getElementById('password').value;
  var profile = document.getElementById('profile').value;

  var empleado = {usuario: usuario,password: password,profile: profile};

  empleados.push(empleado);

  document.getElementById('usuario').value = '';
  document.getElementById('password').value = '';
  document.getElementById('profile').selectedIndex = 0;
  alert("credenciales guardadas");
}

function iniciarSesion() {
  var usuario = document.getElementById('identificador').value;
  var password = document.getElementById('clave').value;

  var foundempleado = empleados.find(function(empleado) {
    return empleado.usuario === usuario && empleado.password === password;
  });

  if (foundempleado) {
    document.getElementById('identificador').value = '';
    document.getElementById('clave').value = '';

    var encontrarUser = foundempleado.profile;

    if (encontrarUser === 'administrativo') {
      window.location.href = 'menuadmin.html';
    } else if (encontrarUser === 'funcionario') {
      window.location.href = 'menufuncionario.html';
    } else if (encontrarUser === 'docente') {
      window.location.href = 'menudocente.html';
    }
  } else {
    alert("Las credenciales no concuerdan con las ingresadas en el registro");
  }
}