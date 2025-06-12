function validarFormulario() {
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const email = document.getElementById("email").value;


  if (!/^[a-zA-Z]+$/.test(apellido)) {
    alert("El apellido solo debe tener letras");
    return;
  }


  if (!/^[a-zA-Z]+$/.test(nombre)) {
    alert("El nombre solo debe tener letras");
    return;
  }


  if (!/^\d{8}$/.test(dni)) {
    alert("El DNI debe tener 8 números");
    return;
  }


  const añoNacimiento = new Date(fechaNacimiento).getFullYear();
  if (añoNacimiento <= 2006) {
    alert("La fecha debe ser posterior al año 2006");
    return;
  }


  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Correo electrónico inválido");
    return;
  }


  alert("Formulario validado correctamente");
}


function hacerPreguntas() {
  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  const color = prompt("¿Cuál es tu color favorito?");
  const mascota = prompt("¿Cómo se llama tu mascota?");


  const respuestas = `
    <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
    <p><strong>Color favorito:</strong> ${color}</p>
    <p><strong>Nombre de tu mascota:</strong> ${mascota}</p>
  `;


  document.getElementById("respuestas").innerHTML = respuestas;
}