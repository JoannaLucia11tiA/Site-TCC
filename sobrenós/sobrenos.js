
    function abrirMenu() {
        document.getElementById("menuMobile").classList.add("aberto")
    }

    function fecharMenu() {
        document.getElementById("menuMobile").classList.remove("aberto")
    }

function temaClaro() {
    document.body.classList.remove("escuro");

    document.querySelectorAll(".tema").forEach(tema => {
        tema.classList.remove("escuro");
    });
}

function temaEscuro() {
    document.body.classList.add("escuro");

    document.querySelectorAll(".tema").forEach(tema => {
        tema.classList.add("escuro");
    });
}