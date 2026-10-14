
function atualizarIconesTema(escuro) {
    // Ícones que alternam entre sol e lua
    document.querySelectorAll(".tema img").forEach((img) => {
        img.src = escuro
            ? "/images/Lua.png"
            : "/images/Sol.png";

        img.alt = escuro ? "Tema escuro" : "Tema claro";
    });

    // Ícone do link de login
    const iconeLogin = document.getElementById("iconeLogin");

    if (iconeLogin) {
        iconeLogin.src = escuro
            ? "/images/Loginbranco.png"
            : "/images/Loginpreto.png";
    }
}

function aplicarTema(escuro) {
    document.body.classList.toggle("escuro", escuro);

    localStorage.setItem("tema", escuro ? "escuro" : "claro");

    atualizarIconesTema(escuro);
}

function trocarTema() {
    const escuro = !document.body.classList.contains("escuro");
    aplicarTema(escuro);
}

// Recupera o tema salvo ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
    aplicarTema(localStorage.getItem("tema") === "escuro");
});
