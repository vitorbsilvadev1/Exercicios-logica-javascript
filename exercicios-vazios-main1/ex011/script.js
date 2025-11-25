/* Pergunte ao usuário um valor em dólares. Exiba o valor convertido em
reais (utilize uma taxa de câmbio fixa, por exemplo, 5.30). */

let valorDolar = parseInt(prompt("Digite um valor em dólares: "))
let valorReal = valorDolar * 5.36

alert(`$${valorDolar.toFixed(2)} em reais = R$${valorReal.toFixed(2)}`)