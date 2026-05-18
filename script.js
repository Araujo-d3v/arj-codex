// Voltar ao topo

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// scroll suave para seções

const elementos = document.querySelectorAll('.animar');

function animarScroll() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < alturaTela - 100) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);

// executa ao carregar também
animarScroll();

// menu mobile

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("ativo");
}

// ===== PORTFÓLIO / DETALHES COM FOTOS =====

let projetoAtual = 0;
let fotoAtual = 0;

const projetos = [
    {
        titulo: "Vitrine Automotiva",
        descricao: "Catálogo de veículos com painel administrativo, cadastro de carros, vendedores, edição de informações e gerenciamento de fotos.",
        fotos: [
            "img/vitrine-1.png",
            "img/vitrine-2.png",
            "img/vitrine-3.png",
            "img/vitrine-4.png",
            "img/vitrine-5.png",
            "img/vitrine-6.png",
            "img/vitrine-7.png",
            "img/vitrine-8.png"
        ]
    },
    {
        titulo: "Sistema Administrativo",
        descricao: "Sistema com login, painel administrativo, controle de usuários, permissões, relatórios e organização de dados.",
        fotos: [
            "img/sistema-1.png",
            "img/sistema-2.png",
            "img/sistema-3.png"
        ]
    },
    {
        titulo: "Landing Page",
        descricao: "Página moderna e responsiva para apresentação de serviços, produtos ou campanhas com foco em conversão.",
        fotos: [
            "img/landing-1.png",
            "img/landing-2.png",
            "img/landing-3.png"
        ]
    }
];

function abrirProjeto(index) {
    projetoAtual = index;
    fotoAtual = 0;

    const detalhe = document.getElementById("detalheProjeto");

    if (detalhe) {
        detalhe.classList.add("ativo");

        document.getElementById("tituloProjeto").innerText = projetos[projetoAtual].titulo;
        document.getElementById("descricaoProjeto").innerText = projetos[projetoAtual].descricao;

        carregarFotos();
        detalhe.scrollIntoView({ behavior: "smooth" });
    }
}

function fecharProjeto() {
    const detalhe = document.getElementById("detalheProjeto");

    if (detalhe) {
        detalhe.classList.remove("ativo");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function carregarFotos() {
    const carousel = document.getElementById("carouselFotos");
    carousel.innerHTML = "";

    projetos[projetoAtual].fotos.forEach((foto, index) => {
        const card = document.createElement("div");
        card.classList.add("carousel-card");

        card.innerHTML = `
            <img src="${foto}" alt="${projetos[projetoAtual].titulo}">
        `;

        carousel.appendChild(card);
    });

    atualizarFotos();
}

function mudarFoto(direcao) {
    const fotos = projetos[projetoAtual].fotos;

    fotoAtual += direcao;

    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    atualizarFotos();
}

function atualizarFotos() {
    const cards = document.querySelectorAll("#carouselFotos .carousel-card");

    cards.forEach((card, index) => {
        card.classList.remove("ativo", "esquerda", "direita");

        if (index === fotoAtual) {
            card.classList.add("ativo");
        } else if (index === fotoAtual - 1 || (fotoAtual === 0 && index === cards.length - 1)) {
            card.classList.add("esquerda");
        } else if (index === fotoAtual + 1 || (fotoAtual === cards.length - 1 && index === 0)) {
            card.classList.add("direita");
        }
    });
}