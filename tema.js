function trocarTema() {
    const body = document.body;

    body.classList.toggle("escuro");

    const iconeDesktop = document.getElementById("iconeTemaDesktop");
    const iconeMobile = document.getElementById("iconeTemaMobile");

    if (body.classList.contains("escuro")) {

        if (iconeDesktop) {
            iconeDesktop.src = "../images/Lua.png";
            iconeDesktop.alt = "Tema escuro";
        }

        if (iconeMobile) {
            iconeMobile.src = "../images/Lua.png";
            iconeMobile.alt = "Tema escuro";
        }

    } else {

        if (iconeDesktop) {
            iconeDesktop.src = "../images/Sol.png";
            iconeDesktop.alt = "Tema claro";
        }

        if (iconeMobile) {
            iconeMobile.src = "../images/Sol.png";
            iconeMobile.alt = "Tema claro";
        }
    }
}