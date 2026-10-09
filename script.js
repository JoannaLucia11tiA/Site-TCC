fetch("../componentes/header.html")
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro ao carregar header: " + resposta.status);
        }

        return resposta.text();
    })
    .then(dados => {
        const header = document.getElementById("header");
        if (!header) return;

        header.innerHTML = dados;

        const paginaAtual = window.location.pathname
            .replace(/\/+$/, "")
            .toLowerCase();

        header.querySelectorAll(".linkPagina").forEach(link => {
            const destino = new URL(link.href).pathname
                .replace(/\/+$/, "")
                .toLowerCase();

            if (destino === paginaAtual) {
                link.classList.add("paginaAtual");
            }
        });
    })
    .catch(erro => console.error(erro));

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

// Recupera o tema salvo ao abrir ou recarregar a página
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    aplicarTema(temaSalvo === "escuro");
});