/* Pergunte ao usuário um valor em reais. Exiba o valor convertido em
dólares (utilize uma taxa de câmbio fixa, por exemplo, 5.30) */

let valorReal = parseInt(prompt("Digite um valor em reais: "))
let valorDolar = valorReal / 5.36

alert(`R$${valorReal.toFixed(2)} em Dólar = R$${valorDolar.toFixed(2)}`)