/* Pergunte ao usuário um número e exiba a tabuada desse número de 1 a 10 */

let numero = parseInt(prompt("Digite um número: "))
let contador = 1
let produto = 0;

while(contador <= 10){
    produto = numero * contador
    alert(`${numero} * ${contador} = ${produto}`)
    contador++                   
}