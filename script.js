fetch("/Componentes/header.html")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro ao carregar header: " + resposta.status);
        }

        return resposta.text();
    })
    .then(dados => {
    const header = document.getElementById("header");

    if (!header) {
        console.error("Não encontrei o elemento #header");
        return;
    }

    header.innerHTML = dados;

    atualizarIconesTema(
    localStorage.getItem("tema") === "escuro"
    );

    console.log("HTML do cabeçalho:", header.innerHTML);
})
.catch(erro => console.error("Erro ao carregar o cabeçalho:", erro));

function abrirMenu() {
    document.getElementById("menuMobile")?.classList.add("aberto");
}

function fecharMenu() {
    document.getElementById("menuMobile")?.classList.remove("aberto");
}

const videoHome = document.querySelector(".videoHome");

if (videoHome) {
    videoHome.addEventListener("timeupdate", () => {
        const tempoRestante = videoHome.duration - videoHome.currentTime;

        if (tempoRestante <= 0.4 && !videoHome.classList.contains("esmaecendo")) {
            videoHome.classList.add("esmaecendo");
        }
    });

    videoHome.addEventListener("seeked", () => {
        if (videoHome.currentTime < 0.5) {
            videoHome.classList.remove("esmaecendo");
        }
    });

    videoHome.addEventListener("ended", () => {
        videoHome.classList.remove("esmaecendo");
    });
}



function aplicarTema(escuro) {
    document.body.classList.toggle("escuro", escuro);

    // Salva a preferência no navegador
    localStorage.setItem("tema", escuro ? "escuro" : "claro");
}

function trocarTema() {
    const estaEscuro = document.body.classList.contains("escuro");
    aplicarTema(!estaEscuro);
}


function atualizarIconesTema(escuro) {
    document.querySelectorAll(".tema img").forEach((img) => {
        img.src = escuro
            ? "../images/Lua.png"
            : "../images/Sol.png";

        img.alt = escuro ? "Tema escuro" : "Tema claro";
    });
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
aplicarTema(localStorage.getItem("tema") === "escuro");

// Atualiza os ícones depois que o cabeçalho for carregado
document.addEventListener("DOMContentLoaded", () => {
    atualizarIconesTema(
        localStorage.getItem("tema") === "escuro"
    );
});
