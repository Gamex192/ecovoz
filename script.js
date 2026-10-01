/* =====================================
   BANCO DE DADOS DOS RESÍDUOS
===================================== */

const residuos = {

    papel: {

        nome: "Papel",

        lixeira: "Lixeira Azul",

        cor: "#1976d2",

        icone: "📄",

        simbolo: "♻",

        descricao:
            "Papéis, jornais, revistas, folhas, caixas de papelão e embalagens de papel devem ser destinados à reciclagem de papel.",

        dica:
            "Evite colocar papel sujo de alimentos ou molhado junto com os papéis recicláveis."
    },


    plastico: {

        nome: "Plástico",

        lixeira: "Lixeira Vermelha",

        cor: "#e53935",

        icone: "🥤",

        simbolo: "♻",

        descricao:
            "Garrafas PET, embalagens plásticas, potes e outros materiais plásticos podem ser encaminhados para a reciclagem.",

        dica:
            "Sempre que possível, esvazie as embalagens antes de descartá-las."
    },


    vidro: {

        nome: "Vidro",

        lixeira: "Lixeira Verde",

        cor: "#2e8b57",

        icone: "🍾",

        simbolo: "♻",

        descricao:
            "Garrafas, potes e recipientes de vidro devem ser destinados à coleta de vidro.",

        dica:
            "Tenha cuidado com vidros quebrados. Embale-os de forma segura para evitar acidentes."
    },


    metal: {

        nome: "Metal",

        lixeira: "Lixeira Amarela",

        cor: "#f4c20d",

        icone: "🥫",

        simbolo: "♻",

        descricao:
            "Latas de alumínio, latas de aço e outros objetos metálicos podem ser encaminhados para reciclagem.",

        dica:
            "Latas vazias e limpas facilitam o processo de reciclagem."
    },


    organico: {

        nome: "Resíduo Orgânico",

        lixeira: "Lixeira Marrom",

        cor: "#795548",

        icone: "🍎",

        simbolo: "♻",

        descricao:
            "Restos de frutas, verduras, alimentos e outros resíduos biodegradáveis são exemplos de resíduos orgânicos.",

        dica:
            "Resíduos orgânicos podem ser utilizados em processos de compostagem."
    },


    eletronico: {

        nome: "Lixo Eletrônico",

        lixeira: "Ponto de Coleta de Eletrônicos",

        cor: "#607d8b",

        icone: "📱",

        simbolo: "⚡",

        descricao:
            "Celulares, computadores, cabos, carregadores e outros equipamentos eletrônicos precisam de pontos específicos de coleta.",

        dica:
            "Não coloque eletrônicos diretamente nas lixeiras comuns. Procure um ponto de coleta adequado."
    },


    perigoso: {

        nome: "Resíduo Perigoso",

        lixeira: "Ponto de Coleta Especial",

        cor: "#ff9800",

        icone: "⚠️",

        simbolo: "⚠",

        descricao:
            "Pilhas, baterias e determinados produtos químicos precisam de locais específicos para descarte.",

        dica:
            "Nunca misture pilhas, baterias ou produtos químicos com o lixo comum."
    },


    outros: {

        nome: "Não Reciclável",

        lixeira: "Lixeira Cinza",

        cor: "#616161",

        icone: "🗑️",

        simbolo: "—",

        descricao:
            "Materiais que não podem ser encaminhados à reciclagem devem ser destinados à coleta de resíduos não recicláveis.",

        dica:
            "Antes de descartar, verifique se o material pode ser reutilizado, reciclado ou encaminhado para um ponto de coleta específico."
    }

};


/* =====================================
   TROCAR DE TELA
===================================== */

function mostrarTela(idTela) {

    const telas =
        document.querySelectorAll(".screen");

    telas.forEach(function(tela) {

        tela.classList.remove("active");

    });


    const telaSelecionada =
        document.getElementById(idTela);


    if (telaSelecionada) {

        telaSelecionada.classList.add("active");

    }

}


/* =====================================
   MOSTRAR RESULTADO
===================================== */

function mostrarResultado(tipo) {

    const residuo =
        residuos[tipo];


    if (!residuo) {

        console.error(
            "Resíduo não encontrado:",
            tipo
        );

        return;

    }


    /* Ícone */

    document.getElementById(
        "resultadoIcon"
    ).textContent = residuo.icone;


    /* Nome da lixeira */

    document.getElementById(
        "resultadoLixeira"
    ).textContent = residuo.lixeira;


    /* Nome do resíduo */

    document.getElementById(
        "resultadoNome"
    ).textContent = residuo.nome;


    /* Descrição */

    document.getElementById(
        "resultadoDescricao"
    ).textContent = residuo.descricao;


    /* Dica */

    document.getElementById(
        "resultadoDica"
    ).textContent = residuo.dica;


    /* Símbolo */

    document.getElementById(
        "lixeiraSimbolo"
    ).textContent = residuo.simbolo;


    /* Cor da lixeira */

    const lixeiraCorpo =
        document.querySelector(
            ".lixeira-corpo"
        );

    const lixeiraTampa =
        document.querySelector(
            ".lixeira-tampa"
        );


    lixeiraCorpo.style.background =
        residuo.cor;

    lixeiraTampa.style.background =
        residuo.cor;


    /* Cor do título */

    document.getElementById(
        "resultadoLixeira"
    ).style.color = residuo.cor;


    /* Vai para a tela de resultado */

    mostrarTela("resultado");

}


/* =====================================
   INÍCIO DO SISTEMA
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarTela("residuos");

    }
);
