  const elementoResposta = document.querySelector("#resposta")
  const inputPergunta = document.querySelector("#inputPergunta")
  // variaveis?
  // dados de entrada?
  // dados de saída?
  const respostas =  [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {

if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar número aléatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

// sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
}, 3000)

}







  
  
  
  
  
  // 1. Variáveis
  //let estaChovendo = true
  //const meuNome = "Ita"

  // 2. Tipos de Dados
  // String
  // ""
  // ''

  // Number
  // 12 - Inteiros(+ -)
  // 3.2 -(Flutuantes) Float (+ -)

  // Boolean
  // true or false
  // Const maiorDeDezoito = false

  // Undefined - Indefinido

  // 3. Operadores
  // Atribuição (ex: =)
  // Atribuir valor
  // let n1 = 12
  // let n2 = 3

  // console.log(n1 + n2)

  // Aritméticos (ex: */ + -)
  // Calculos matemáticos simples

  // Concatenação de String (+)

  // Comparação (ex: > < ==)
  // Transforma a expressão em true or false
  // Const maiorQue = 1 > 2 // false
  // Const igualA = 1 == 1 // true

  // 4. Condicional (if/else)
    //const idade = 18
    //const maiorDeDezoito = idade >= 18

    //if(maiorDeDezoito){
    //alert("Pode tirar carteira de motorista")
    //} else {
    //alert("Não pode tirar")
    //}

    // 5. Estrutura de dados
    // Array - Vetor - Lista
    // Array indices ------   0    1   2 3
    //const temperaturas = [23.3,32.2,1,5]
    //console.log(temperaturas[0])

    // Object
     //const pessoa = {
     //  nome: "Ita",
     //  idade: 31,
     //  filhos: ["K","E","J","L","G"]
    //}
    //console.log(pessoa.filhos[3])

    // 6. Function
    // 1. Criação
     //function nomeDaFuncao() {
//console.log('código da função')
    //}

    // 2. Execução
     //nomeDaFuncao()

    // Parâmetros
     //function soma(a, b) {
      //console.log(a + b)
    //}

    //soma(34,45)
    //soma(98,54)

    // Retorno
     //function soma(a,b) {
      //return a + b
    //}
//const multiplica = soma(2 ,2) * 4

//console.log(multiplica)
    //console.log(soma(2,2))

    // 7. Extensões da linguagem (ex: Match, Date....)

    // Match.random() número randomico
    // Match.floor(1.2) aredonda para baixo (floor=piso)
    // Match.ceil(1.2) aredonda para cima (ceil=teto)
    // Match.PI número PI

    // 8. DOM - Document Object Model

    // window
    //window.alert("alerta")
    // document
    // document.white("texto")
    // manipular elementos
    // document.documentElement.style.background = "black"