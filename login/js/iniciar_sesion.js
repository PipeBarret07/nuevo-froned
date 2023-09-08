let formularioRegistro = document.getElementById('formulario-registro');
let usuarioInput = document.getElementById('registro-usuario');
let correoInput = document.getElementById('registro-correo');
let telefonoInput = document.getElementById('registro-telefono');
let documentoInput = document.getElementById('registro-documento');
let contraseñaInput = document.getElementById('registro-contraseña');

// Comprobar si ya hay datos en el localStorage
let datosUsuarioGuardados = localStorage.getItem('datos_usuario');
if (datosUsuarioGuardados) {
    let datosUsuario = JSON.parse(datosUsuarioGuardados);
    usuarioInput.value = datosUsuario.usuario || '';
    correoInput.value = datosUsuario.correo || '';
    telefonoInput.value = datosUsuario.telefono || '';
    documentoInput.value = datosUsuario.documento || '';
}

// Manejar el envío del formulario de registro
formularioRegistro.addEventListener('submit', function (event) {
    event.preventDefault();

    // Recoger datos del formulario
    let usuario = usuarioInput.value;
    let correo = correoInput.value;
    let telefono = telefonoInput.value;
    let documento = documentoInput.value;
    let contraseña = contraseñaInput.value;

    // Comprobar si el usuario ya está registrado (adaptarlo a la lógica que se vaya a implementar)
    let usuarioRegistrado = comprobarRegistroUsuario(usuario, correo, documento);

    if (usuarioRegistrado) {
        // Redirigir al inicio
        window.location.href = 'iniciar_sesion.html';
    } else {
        // Guardar los datos en localStorage
        let datosUsuario = { usuario, correo, telefono, documento };
        localStorage.setItem('datos_usuario', JSON.stringify(datosUsuario));

        // Redirigir a una página de éxito
        window.location.href = 'exito.html';
    }
});

let animatedBackground = false;

window.addEventListener('scroll', () => {
    if (!animatedBackground) {
        startBackgroundAnimation();
        animatedBackground = true;
    }
});

function startBackgroundAnimation() {
    const body = document.body;
    body.style.animation = 'gradient 15s linear infinite';
}

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });