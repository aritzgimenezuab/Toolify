// --- 1. LÓGICA DE HERRAMIENTA 1: LIMPIADOR DE TEXTO ---
function convertirTexto(tipo) {
    const textarea = document.getElementById('input-texto');
    if (tipo === 'mayus') {
        textarea.value = textarea.value.toUpperCase();
    } else if (tipo === 'minus') {
        textarea.value = textarea.value.toLowerCase();
    }
}

function limpiarEspacios() {
    const textarea = document.getElementById('input-texto');
    textarea.value = textarea.value.trim().replace(/\s+/g, ' ');
}

// --- 2. LÓGICA DE HERRAMIENTA 2: GENERADOR DE CONTRASEÑAS ---
function generarPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('output-password').innerText = password;
}

function copiarPassword() {
    const pass = document.getElementById('output-password').innerText;
    if (pass !== "Pulsar generar") {
        navigator.clipboard.writeText(pass);
        alert("¡Contraseña copiada al portapapeles!");
    }
}

// --- 3. LÓGICA DE HERRAMIENTA 3: ANALIZADOR Y CONTADOR ---
function analizarTexto() {
    const texto = document.getElementById('input-analizador').value;
    const palabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
    const caracteres = texto.length;
    const tiempoSegundos = Math.round(palabras / 3); // Aprox 180 palabras por minuto

    document.getElementById('stat-palabras').innerText = palabras;
    document.getElementById('stat-caracteres').innerText = caracteres;
    document.getElementById('stat-tiempo').innerText = tiempoSegundos + "s";
}

// --- 4. SISTEMA DE AUTENTICACIÓN LOCAL (LocalStorage Automático) ---
function abrirModalAuth() {
    document.getElementById('auth-modal').classList.remove('hidden');
}

function cerrarModalAuth() {
    document.getElementById('auth-modal').classList.add('hidden');
}

function guardarSesion() {
    const email = document.getElementById('user-email-input').value;
    if (email && email.includes('@')) {
        localStorage.setItem('toolify_user', email);
        cerrarModalAuth();
        verificarSesionActiva();
        alert("¡Sesión iniciada correctamente con " + email + "!");
    } else {
        alert("Por favor, introduce un correo electrónico válido.");
    }
}

function verificarSesionActiva() {
    const usuarioGuardado = localStorage.getItem('toolify_user');
    const container = document.getElementById('auth-container');
    
    if (usuarioGuardado) {
        container.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="text-xs bg-slate-900 border border-slate-800 text-emerald-400 px-3 py-1.5 rounded-xl font-mono">👤 ${usuarioGuardado}</span>
                <button onclick="cerrarSesion()" class="text-xs text-slate-400 hover:text-rose-400 transition">Salir</button>
            </div>
        `;
    }
}

function cerrarSesion() {
    localStorage.removeItem('toolify_user');
    location.reload();
}

// Ejecutar al cargar la página
window.onload = () => {
    verificarSesionActiva();
};
