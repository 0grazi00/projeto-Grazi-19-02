const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já foi seduzido pelo projeto verão? Pela ideia do corpo perfeito, com uma rotina de alimentação e exercícios físicos super bem planejada? ",
        alternativas: [
            {
                texto: "Sim, a ideia é tentadora!",
                afirmacao: "afirmacao"
            },
            {
                texto:"Não, já sou feliz com meu corpo!",
                afirmacao: "afirmacao"
            }
          
        ]
    },
    {
        enunciado: "Nem sempre é fácil mudar nossos hábitos, não é? Mas os cálculos nos permitem e facilitam esse processo! O que você pensa sobre isso? ",
        alternativas: [
            {
                texto: "Os cálculos realmente ajudam!", 
                afirmacao: "afirmacao"
            },
            {
                texto:"Os cálculos só dificultam o processo!",
                afirmacao: "afirmacao"
            }
           
        ]
    },
    {
        enunciado: "Você sabe como os nutricionistas elaboram as dietas, fichas técnicas ou os cálculos utilizados para fazerem seu planejamento?",
        alternativas: [
            {
                texto: "Sim, já tenho conhecimento!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, quero saber mais!",
                afirmacao: "afirmacao"
            }
            
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas ();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(Alternativa)){
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();