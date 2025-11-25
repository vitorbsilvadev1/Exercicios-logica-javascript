/* Pergunte ao usuário quatro valores. Exiba a média simples deles */

let primeiroNumero = parseInt(prompt("Digite o 1° número: "))
let segundoNumero = parseInt(prompt("Digite o 2° número: "))
let terceiroNumero = parseInt(prompt("Digite o 3° número: "))
let quartoNumero = parseInt(prompt("Digite o 4° número: "))

let media = (primeiroNumero + segundoNumero + terceiroNumero + quartoNumero) / 4

alert(`Media = ${media}`)