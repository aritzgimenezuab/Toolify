// --- 1. GENERADOR DE PROMPTS MAESTROS ---
function generarPromptMaestro() {
    const idea = document.getElementById('input-idea-prompt').value.trim();
    if (!idea) {
        alert("Por favor, escribe una idea básica primero.");
        return;
    }
    const promptFinal = `Actúa como un experto senior en la materia. Analiza detalladamente la siguiente solicitud: "${idea}". Proporciona una estructura clara, ejemplos prácticos, evita explicaciones innecesarias y entrega un resultado de máxima calidad profesional.`;
    document.getElementById('output-prompt').innerText = promptFinal;
}

// --- 2. GENERADOR DE HOOKS VIRALES ---
function generarHookViral() {
    const nicho = document.getElementById('input-nicho-video').value.trim();
    if (!nicho) {
        alert("Introduce un nicho o temática.");
        return;
    }
    const ganchos = [
        `"Nadie te está contando esto sobre ${nicho}, y te está costando dinero..."`,
        `"El mayor secreto de ${nicho} que los expertos no quieren que se publicite."`,
        `"Si te interesa ${nicho}, guarda este video antes de que lo borren."`,
        `"Cometí este error en ${nicho} durante años hasta que aprendí esto..."`
    ];
    const aleatorio = ganchos[Math.floor(Math.random() * ganchos.length)];
    document.getElementById('output-hook').innerText = aleatorio;
}

// --- 3. HUMANIZADOR DE TEXTO IA ---
function humanizarTexto() {
    let texto = document.getElementById('input-texto-ia').value;
    if (!texto) {
        alert("Pega algún texto primero.");
        return;
    }
    // Sustituciones típicas de IA para hacer el texto fluido y humano
    texto = texto.replace(/En conclusión,/gi, "Al final del día,")
                 .replace(/En el vasto mundo de/gi, "Dentro de")
                 .replace(/Es importante destacar que/gi, "Cabe decir que")
                 .replace(/Por lo tanto,/gi, "Así que");
    
    document.getElementById('input-texto-ia').value = texto + "\n\n(✨ Optimizado y humanizado con éxito)";
}

// --- 4. GENERADOR DE IDEAS DE NEGOCIO IA ---
function generarIdeaNegocio() {
    const ideas = [
        "Agencia de automatización de atención al cliente mediante chatbots con IA para restaurantes locales.",
        "Plataforma de creación de avatares corporativos y videos UGC automatizados para marcas de e-commerce.",
        "Consultoría exprés de optimización de procesos internos utilizando prompts avanzados de ChatGPT.",
        "Creador de boletines informativos (newsletters) hiper-segmentados sobre tendencias de inteligencia artificial."
    ];
    const ideaElegida = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById('output-negocio').innerText = ideaElegida;
}

// --- SISTEMA DE SESIÓN LOCAL ---
function abrirModalAuth() {
    document.getElementById('auth-modal').classList.remove('hidden');
}

function cerrarModalAuth() {
    document.getElementById('auth-modal').classList.add('hidden');
}

function guardarSesion() {
    const email = document.getElementById('user-email-input').value;
    if (email && email.includes('@')) {
        localStorage.setItem('toolify_ai_user', email);
        cerrarModalAuth();
        verificarSesionActiva();
        alert("¡Bienvenido, " + email + "!");
    } else {
        alert("Introduce un correo electrónico válido.");
    }
}

function verificarSesionActiva() {
    const usuarioGuardado = localStorage.getItem('toolify_ai_user');
    const container = document.getElementById('auth-container');
    
    if (usuarioGuardado) {
        container.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="text-xs bg-slate-900 border border-slate-800 text-purple-400 px-3 py-1.5 rounded-xl font-mono">👤 ${usuarioGuardado}</span>
                <button onclick="cerrarSesion()" class="text-xs text-slate-400 hover:text-rose-400 transition">Salir</button>
            </div>
        `;
    }
}

function cerrarSesion() {
    localStorage.removeItem('toolify_ai_user');
    location.reload();
}

window.onload = () => {
    verificarSesionActiva();
};
