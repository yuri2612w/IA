import {aleatorio} from "./aleatorio.js"
import {perguntas} from "./pergunta.js"
const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const botaoIniciar = document.querySelector(".iniciar-btn") 
const telaInicial = document.querySelector(".tela-inicial")

let atual = 0;
let perguntaAtual;
let historiaFinal = ""


botaoInciar.addEventListener("click", iniciaJogo)

function iniciaJogo(){
    atual = 0;
    historiaFinal = ""
    telaInicial.style.display = "none"
    caixaPerguntas.classList.remove("mostrar")
    caixaAlternativas.classList.remove("mostrar")
    caixaResultado.classList.remove("mostrar")
}



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
    const afirmacaes = aleatorio(opcaoSelecionada.afirmacao)
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
