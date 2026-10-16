const produtosColeira = [
    {
        nome: "ESP32 com LoRa",
        preco: "R$ 188,89",
        imagem: "./Imgs/ESP32.jpg",
        link: "https://www.dreletronico.com.br/produto/esp32-lora-868-915-mhz-v2",
        descricao: "Microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas."
    },
    {
        nome: "Placa solar com bateria",
        preco: "R$ 24,90",
        imagem: "./Imgs/Placa solar.png",
        link: "https://www.mercadolivre.com.br/mini-placa-painel-solar-5v-1w-200ma-celula-fotovoltaica/up/MLBU1983095144?pdp_filters=item_id:MLB3761009119&sid=purchases",
        descricao: "Capta energia do sol e a armazena, garantindo alimentação elétrica mesmo em locais sem rede."
    },
    {
        nome: "Protoboard",
        preco: "R$ 13,99",
        imagem: "./Imgs/Protoboard.png",
        link: "https://www.mercadolivre.com.br/protoboard-breadboard-400-pontos-furos-pinos-arduino-pic-arm/p/MLB36151188?pdp_filters=item_id%3AMLB4974315552&from=gshop&matt_tool=38545640&matt_word=&matt_source=google&matt_campaign_id=22090354508&matt_ad_group_id=194474657034&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419935&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB36151188-product&matt_product_partition_id=2499513569492&matt_target_id=pla-2499513569492&cq_src=google_ads&cq_cmp=22090354508&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354508&gbraid=0AAAAAD93qcCKkW5qMqrs4BAb8iq9fWyq1&gclid=CjwKCAjw88HWBhA3EiwAo2Zd6CyPHC3RdbjlpTYI132PDkpcgYK_fX6A_npeFHIG0lUl7f5shtueUBoC9_kQAvD_BwE",
        descricao: "Placa de prototipagem utilizada para montar e testar circuitos eletrônicos sem solda, permitindo conectar e reorganizar componentes de forma prática."
    },
    {
        nome: "Carregador de bateria - Micro USB-C",
        preco: "R$ 6,00",
        imagem: "./Imgs/carregador.png",
        link: "https://www.amazon.com.br/dp/B0CDJPJL3N?ref=cm_sw_r_cso_wa_apan_dp_GXZR60M6DFCR1FQEZ6QZ&ref_=cm_sw_r_cso_wa_apan_dp_GXZR60M6DFCR1FQEZ6QZ&social_share=cm_sw_r_cso_wa_apan_dp_GXZR60M6DFCR1FQEZ6QZ",
        descricao: "Repõe a carga de baterias recarregáveis, controlando tensão e corrente para manter segurança e durabilidade."
    },
    {
        nome: "Jumper rígido",
        preco: "R$ 21,00",
        imagem: "./Imgs/jumper.png",
        link: "https://shopee.com.br/140-Jumpers-R%C3%ADgidos-Coloridos-Protoboard-Caixa-Organizadora-C%C3%B3digo-524--i.362820645.18337794319",
        descricao: "Fio metálico usado para interligar pontos em protoboards ou PCBs, mantendo conexões firmes e organizadas."
    },
    {
        nome: "Bateria de lítio 18650 12V 2200mAh",
        preco: "R$ 31,71",
        imagem: "./Imgs/BateriaLitio.png",
        link: "https://produto.mercadolivre.com.br/MLB-4081332805-bateria-litio-18650-12v-2200mah-fio-e-termo-_JM?sid=purchases",
        descricao: "Armazena energia para alimentar os componentes eletrônicos do sistema."
    },
    {
        nome: "Placa reguladora de tensão Step Down LM2596",
        preco: "R$ 20,89",
        imagem: "./Imgs/ReguladorTensao.png",
        link: "https://shopee.com.br/Placa-Reguladora-De-Tens%C3%A3o-Step-Down-Ajust%C3%A1vel-Lm2596-Dcdc-Com-Display-i.730021288.23394203389?extraParams=%7B%22display_model_id%22%3A199176800646%2C%22model_selection_logic%22%3A3%7D",
        descricao: "Regula a tensão elétrica para fornecer uma alimentação adequada aos componentes do projeto."
    },
    {
        nome: "Módulo GPS u-blox NEO-6M",
        preco: "R$ 37,10",
        imagem: "./Imgs/Gps.png",
        link: "https://shopee.com.br/M%C3%B3dulo-Gps-Ublox-Gy-gps6mv2-Gy-neo6mv2-Arduino-Drone-Esp8266-i.356249600.6569073957",
        descricao: "Recebe sinais de satélites para determinar a localização do equipamento."
    },
    {
        nome: "Coleira de Vaca Ajustável",
        preco: "R$ 120,00",
        imagem: "./Imgs/Coleirafoto.png",
        link: "https://www.amazon.com.br/Phefop-Coleira-Ajust%C3%A1vel-Agr%C3%ADcola-Cuidados/dp/B0GR7F3VPZ?th=1",
        descricao: "Coleira de lona de quatro camadas com fivela de metal, utilizada para prender a coleira inteligente ao pescoço do animal."
    },
    {
        nome: "Caixa de Proteção Impressa em 3D",
        preco: "R$ 30,00",
        imagem: "./Imgs/Caixa3d.png",
        link: "",
        descricao: "Estrutura personalizada, desenvolvida a partir das medidas do projeto e fabricada por impressão 3D para acomodar e proteger os componentes eletrônicos da coleira inteligente.",
        sobMedida: true
    }
];

const produtosPorteira = [
    {
        nome: "ESP32 com LoRa",
        preco: "R$ 188,89",
        imagem: "./Imgs/ESP32.jpg",
        link: "https://www.dreletronico.com.br/produto/esp32-lora-868-915-mhz-v2",
        descricao: "Microcontrolador que permite comunicação de longo alcance com baixo consumo de energia, ideal para projetos de Internet das Coisas."
    },
    {
        nome: "Câmera de Segurança WiFi",
        preco: "R$ 65,99",
        imagem: "./Imgs/Camera.png",
        link: "https://shopee.com.br/product/391739739/7083239242",
        descricao: "Câmera de segurança com conexão WiFi para auxiliar no monitoramento da porteira e na contagem do rebanho."
    }
];

const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos(categoria) {
    const produtos = categoria === "coleira"
        ? produtosColeira
        : produtosPorteira;

    const titulo = categoria === "coleira"
        ? "Peças da coleira inteligente"
        : "Peças da porteira inteligente";

    listaProdutos.innerHTML = `
        <div class="produtosCabecalho">
            <span>COMPONENTES DO PROJETO</span>
            <h2>${titulo}</h2>
            <p>Conheça os componentes utilizados no monitoramento do rebanho.</p>
        </div>

        <div class="produtosGrid">
            ${produtos.map((produto) => `
                <article class="produtoCard">
                    <div class="produtoImagem">
                        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
                    </div>

                    <div class="produtoDetalhes">
                        <h3>${produto.nome}</h3>
                        <p class="produtoPreco">${produto.preco}</p>
                        <p class="produtoDescricao">${produto.descricao}</p>

                        ${produto.sobMedida
                            ? `<span class="comprarBotao botaoInformativo">Peça sob medida</span>`
                            : `<a class="comprarBotao"
                                href="${produto.link}"
                                target="_blank"
                                rel="noopener noreferrer">
                                Comprar <span aria-hidden="true">→</span>
                              </a>`
                        }
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

document.querySelectorAll(".categoriaBotao").forEach((botao) => {
    botao.addEventListener("click", () => {
        document.querySelectorAll(".categoriaBotao").forEach((item) => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");
        mostrarProdutos(botao.dataset.categoria);

        if (botao.dataset.categoria === "coleira") {
            listaProdutos.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

