function temaClaro() {
    document.body.classList.remove("escuro");
    localStorage.setItem("tema", "claro");
}

function temaEscuro() {
    document.body.classList.add("escuro");
    localStorage.setItem("tema", "escuro");
}


// Quando a página carregar
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
}