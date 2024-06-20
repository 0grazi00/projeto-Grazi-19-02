const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "minha primeira pergunta(digitar aqui)",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Segunda pergunta(digitar aqui)",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    {
        enunciado: "Terceira pergunta(digitar aqui)",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();