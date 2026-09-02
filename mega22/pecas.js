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


const products = {

  coleira: [

    {
      name: "ESP32 com LoRa",
      price: "R$188,89",
      image: "ESP32.jpg",
      description:
        "O ESP32 com LoRa é um microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas."
    },

    {
      name: "Placa solar com bateria",
      price: "R$19,90",
      image: "Placa solar.png",
      description:
        "A placa solar com bateria capta energia do sol e a armazena, garantindo alimentação elétrica mesmo em locais sem rede."
    },

    {
      name: "Pcb Perfurada",
      price: "R$3,90",
      image: "Peb.png",
      description:
        "A PCB perfurada é uma placa universal usada para montar protótipos eletrônicos de forma prática, conectando componentes com fios."
    },

    {
      name: "Carregador de Bateria - MICRO USBC",
      price: "R$6,00",
      image: "carregador.png",
      description:
        "O carregador de bateria repõe a carga de baterias recarregáveis, controlando tensão e corrente para manter segurança e durabilidade."
    },

    {
      name: "Jumper rígido",
      price: "R$25,99",
      image: "jumper.png",
      description:
        "O jumper rígido é um fio metálico usado para interligar pontos em protoboards ou PCBs, mantendo conexões firmes e organizadas."
    }

  ],


  porteira: [

    {
      name: "ESP32 com LoRa",
      price: "R$188,89",
      image: "ESP32.jpg",
      description:
        "O ESP32 com LoRa é um microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas."
    },

    {
      name: "Câmera de Segurança WiFi",
      price: "R$59,90",
      image: "Camera.png",
      description:
        "A câmera de segurança WiFi transmite imagens pela rede sem fio, permitindo monitoramento remoto em tempo real."
    },

    {
      name: "Pcb Perfurada",
      price: "R$3,90",
      image: "Peb.png",
      description:
        "A PCB perfurada é uma placa universal usada para montar protótipos eletrônicos de forma prática, conectando componentes com fios."
    },

    {
      name: "Jumper rígido",
      price: "R$25,99",
      image: "jumper.png",
      description:
        "O jumper rígido é um fio metálico usado para interligar pontos em protoboards ou PCBs, mantendo conexões firmes e organizadas."
    }

  ]

};


const productsList =
  document.getElementById("productsList");

const categoryButtons =
  document.querySelectorAll(".category-button");

const root =
  document.documentElement;

const hero =
  document.querySelector(".hero");

const categoryButtonsWrap =
  document.querySelector(".category-buttons");

function applyThemeState() {

  const isDark = root.dataset.theme === "dark";
  document.body.classList.toggle("escuro", isDark);

  if (categoryButtonsWrap) {
    categoryButtonsWrap.style.background = isDark ? "#000000" : "";
    categoryButtonsWrap.style.borderRadius = isDark ? "26px" : "";
    categoryButtonsWrap.style.padding = isDark ? "14px 18px" : "";
  }

  if (hero) {
    hero.style.backgroundImage = isDark
      ? 'url("hero-border-dark.png")'
      : 'url("hero-border-light.png")';
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundPosition = "center center";
    hero.style.backgroundSize = "cover";
  }

}


function renderProducts(category) {

  productsList.innerHTML = products[category]
    .map(product => `

      <article class="product-card">

        <h2 class="product-title">
          ${product.name}-${product.price}
        </h2>

        <div class="product-content">

          <div class="product-image-area">

            <img
              src="${product.image}"
              alt="${product.name}"
              class="product-image"
            >

          </div>

          <div class="product-info">

            <p class="product-description">
              ${product.description}
            </p>

            <button
              class="buy-button"
              type="button"
            >
              Comprar
            </button>

          </div>

        </div>

      </article>

    `)
    .join("");

}


categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProducts(
      button.dataset.category
    );

  });

});


const savedTheme =
  localStorage.getItem("anitrace-theme");


if (
  savedTheme === "light" ||
  savedTheme === "dark"
) {

  root.dataset.theme =
    savedTheme;

}

applyThemeState();



productsList.addEventListener("click", event => {

  if (
    event.target.classList.contains("buy-button")
  ) {

    alert(
      "Ação de compra será integrada posteriormente."
    );

  }

});


renderProducts("coleira");