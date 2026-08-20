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
                afirmacao: "Você ainda esta começando eu diria, ainda tem muito o que aprender no mundo profissional."
            },
            {
                texto: "Faculdade",
                afirmacao: "Você ja está avanançado mais em sua carreira profissional, e tem muito potencial."
            }
        ]
    },
    {
        enunciado: "Qual seu etinerário desde o novo ensino médio?",
        alternativas: [
            {
                texto: " Exatas",
                afirmacao: "Você tende a ter o pensamento mais logico e gosta de raciocinar mais, principalmente com calculos."
            },
            {
                texto: "Humanas",
                afirmacao: "Você pode ser uma pessoa mais expressiva, se adimira mais por coisas da vida cotidiana e aprecia a arte muitas vezes."
            }
        ]
    },
    {
        enunciado: "Você prefere uma faculdade particular ou pública?",
        alternativas: [
            {
                texto: "Pública",
                afirmacao: "Você se destava entre pessoas e candidatos, normalmente uma pessoa esforçada que sabe o que quer na vida."
            },
            {
                texto: "Particular",
                afirmacao: "Você também é esforçado, mas ou você tem um potencial muito forte para várias conquistas, ou você pode ser uma pessoa que não faz muito caso."
            }
        ]
    },
    {
        enunciado: "Mesmo com faculdade, você ja cogitou em ser ou teve a vontade de ser um empreendedor?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Vocẽ pode ser uma pessoa arrojada, mas que acredita em seu potencial, pois você se arrisca até que bastante por um objetivo que acredita profundamente."
            },
            {
                texto: "Não",
                afirmacao: "Você é uma pessoa calma, que acredita no sistema da meritocracia, e que se você se esforçar e fazer seu trabalho direito, as coisas vão dar certa para você sem nenhuma dúvida."
            }
        ]
    },
    {
        enunciado: "Você pretende já construir uma família antes dos 26?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você é uma pessoa que mesmo não pronto, esta disposto a realizar sacrifícios pelo o que você ama, e esta disposto a crescer de forma madura."
            },
            {
                texto: "Não",
                afirmacao: "Você não tem muita pressa com os objetivos da vida normalmente, no momento você prefere focar em si, pois assim você tem a esṕerança dos seus sonhos se realizarem de fato."
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
    caixaPerguntas.textoContent = perguntaAtual.enunciado
    mostraAlternativas()
}
function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativa){
            const botaoalternativas =
        }
        
    }

mostraPergunta()
