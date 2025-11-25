/* Pergunte ao usuário o valor de um salário e o valor de um bônus. Exiba o
valor total com o bônus incluído. */

let salario = parseInt(prompt("Digite o valor do salário: "))
let bonus = parseInt(prompt("Digite o valor do bonus: "))

let valorTotal = salario + bonus.toLocaleString(pt-)

alert("Salário = " + salario)
alert("Bônus = " + bonus)
alert("Valor total = " + valorTotal)