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

const produtos = {

    coleira: [
        { nome: "ESP32 com LoRa", preco: "R$188,89", imagem: "ESP32.jpg", descricao: "Microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas." },
        { nome: "Placa solar com bateria", preco: "R$19,90", imagem: "Placa solar.png", descricao: "Capta energia do sol e a armazena, garantindo alimentação elétrica mesmo em locais sem rede." },
        { nome: "Pcb perfurada", preco: "R$3,90", imagem: "Peb.png", descricao: "Placa universal usada para montar protótipos eletrônicos de forma prática, conectando componentes com fios." },
        { nome: "Carregador de bateria - Micro USBC", preco: "R$6,00", imagem: "carregador.png", descricao: "Repõe a carga de baterias recarregáveis, controlando tensão e corrente para manter segurança e durabilidade." },
        { nome: "Jumper rígido", preco: "R$25,99", imagem: "jumper.png", descricao: "Fio metálico usado para interligar pontos em protoboards ou PCBs, mantendo conexões firmes e organizadas." }
    ],

    porteira: [
        { nome: "ESP32 com LoRa", preco: "R$188,89", imagem: "ESP32.jpg", descricao: "Microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas." },
        { nome: "Câmera de segurança WiFi", preco: "R$59,90", imagem: "Camera.png", descricao: "Transmite imagens pela rede sem fio, permitindo monitoramento remoto em tempo real." },
        { nome: "Pcb perfurada", preco: "R$3,90", imagem: "Peb.png", descricao: "Placa universal usada para montar protótipos eletrônicos de forma prática, conectando componentes com fios." },
        { nome: "Jumper rígido", preco: "R$25,99", imagem: "jumper.png", descricao: "Fio metálico usado para interligar pontos em protoboards ou PCBs, mantendo conexões firmes e organizadas." }
    ]

};

const listaProdutos = document.getElementById("listaProdutos");
const botoesCategoria = document.querySelectorAll(".categoriaBotao");

function renderizarProdutos(categoria) {

    listaProdutos.innerHTML = produtos[categoria].map(produto => `
        <div class="produtoCard">
            <h2>${produto.nome} - ${produto.preco}</h2>
            <div class="produtoConteudo">
                <img src="./Imgs/${produto.imagem}" alt="${produto.nome}">
                <div class="produtoInfo">
                    <p>${produto.descricao}</p>
                    <button class="comprarBotao">Comprar</button>
                </div>
            </div>
        </div>
    `).join("");

}

botoesCategoria.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesCategoria.forEach(item => item.classList.remove("ativo"));
        botao.classList.add("ativo");
        renderizarProdutos(botao.dataset.categoria);
    });
});

listaProdutos.addEventListener("click", evento => {
    if (evento.target.classList.contains("comprarBotao")) {
        alert("Ação de compra será integrada posteriormente.");
    }
});

renderizarProdutos("coleira");
