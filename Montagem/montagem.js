function aplicarTema(escuro) {
    document.body.classList.toggle("escuro", escuro);

    // Salva a preferência no navegador
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
}

function trocarTema() {
    const estaEscuro = document.body.classList.contains("escuro");
    aplicarTema(!estaEscuro);
}

// Recupera o tema salvo ao abrir ou recarregar a página
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    aplicarTema(temaSalvo === "escuro");
});