const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
 



const perguntas = [
    {
        enunciado: "Você estuda em uma escola ou faculdade?",
        alternativas: [
            {
                texto: "Escola",
                afirmacao: [
                    "Você ainda esta começando eu diria, ainda tem muito o que aprender no mundo profissional."
                    "Você possui potencial, mesmo no lugar que está, so precisa enxergar isso."
                ]
            },
            {
                texto: "Faculdade",
                afirmacao: [
                    "Você ja está avanançado mais em sua carreira profissional, e tem muito potencial.",
                    "Vocẽ ja passou de uma etapa longa e tanto, mas ainda tem muito trabalho pela frente."
                ]
            }
        ]
    },
    {
        enunciado: "Qual seu etinerário desde o novo ensino médio?",
        alternativas: [
            {
                texto: " Exatas",
                afirmacao: [
                    "Você tende a ter o pensamento mais logico e gosta de raciocinar mais, principalmente com calculos.",
                    "Vocẽ gosta de calculos principalemnte, gosta da sensação do calculo dar a resposta exata."
                ]
            },
            {
                texto: "Humanas",
                afirmacao: [
                    "Você pode ser uma pessoa mais expressiva, se adimira mais por coisas da vida cotidiana e aprecia a arte muitas vezes.",
                    "Vocẽ pode gostar mais de linguagem formal do que a técnica, aprende mais facil guardando informações."
                ]
            }
        ]
    },
    {
        enunciado: "Você prefere uma faculdade particular ou pública?",
        alternativas: [
            {
                texto: "Pública",
                afirmacao: [
                    "Você se destaca entre pessoas e candidatos, normalmente uma pessoa esforçada que sabe o que quer na vida.",
                    "Voce tenta ao máximo alcançar seus objetivos pessoais e profissionais.",
                ]
            },
            {
                texto: "Particular",
                afirmacao: [
                    "Você também é esforçado, mas ou você tem um potencial muito forte para várias conquistas, ou você pode ser uma pessoa que não faz muito caso.",
                    "Você pode reconhcer que não tem muito potencial, mas com um esforço a mais ja pode fazer a diferença."
                ]
            }
        ]
    },
    {
        enunciado: "Mesmo com faculdade, você ja cogitou em ser ou teve a vontade de ser um empreendedor?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "Vocẽ pode ser uma pessoa arrojada, mas que acredita em seu potencial, pois você se arrisca até que bastante por um objetivo que acredita profundamente.",
                    "Você acredita em seu potencial, mesmo sabendo que terá muito dificuldade."
                ]
            },
            {
                texto: "Não",
                afirmacao: [
                    "Você é uma pessoa calma, que acredita no sistema da meritocracia, e que se você se esforçar e fazer seu trabalho direito, as coisas vão dar certa para você sem nenhuma dúvida.",
                    "Você talvez ache que a opção mais simples é trabalhar por cargo, as vezes até tenta subir de cargo."
                ]
            }
        ]
    },
    {
        enunciado: "Você pretende já construir uma família antes dos 26?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "Você é uma pessoa que mesmo não pronto, esta disposto a realizar sacrifícios pelo o que você ama, e esta disposto a crescer de forma madura.",
                    "você é uma pessoa ousada, mas que ja esta disposto pra fazer o possível para ter uma vida emocional melhor."
                ]
            },
            {
                texto: "Não",
                afirmacao: [
                    "Você não tem muita pressa com os objetivos da vida normalmente, no momento você prefere focar em si, pois assim você tem a esṕerança dos seus sonhos se realizarem de fato."<
                    "Você na verdade só pode não estar afim de construir uma família agora ou nunca."
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""

function mostraPergunta(){
    if(atual >= perguntas.length) {
        mostraResultado()
        return    
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = "";
    mostraAlternativa()

    
}
function mostraAlternativa(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoalternativas = document.createElement("button")
            botaoalternativas.textContent = alternativa.texto
            botaoalternativas.addEventListener("click", ()=> respostaSelecionada(alternativa))
            caixaAlternativas.appendChild(botaoalternativas)
        }
    }
function respostaSelecionada(opcaoSelecionada){
    const afirmacaes = opcaoSelecionada.afirmacao
    historiaFinal += afirmacaes + " "
    atual++
    mostraPergunta()
}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 ..."
    textoResultado.textContent = historiaFinal
    caixaAlternativas.textContent = "";
}
mostraPergunta()
