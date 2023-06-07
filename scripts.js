function alerta() {
  alert('Hola, esta es una alerta desde JavaScript');
}

const form = document.getElementById('myForm');

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
  const Input = document.getElementById("email");
  const Inputvalue = Input.value;
}

  
if (!validateEmail(Inputvalue)) {
  alert('Por favor ingrese un correo electrónico válido.');
} else {
  alert('Correo electrónico enviado correctamente.');
}

form.addEventListener('submit', function(evento) {
  evento.preventDefault();
  validateForm();
});







   
