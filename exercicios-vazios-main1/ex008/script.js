/* Pergunte ao usuário dois valores e mostre a diferença entre o primeiro e o
segundo. */

let primeiroNumero = parseInt(prompt("Digite o 1° número: "))
let segundoNumero = parseInt(prompt("Digite o 2° número: "))
let diferença = primeiroNumero > segundoNumero ? primeiroNumero - segundoNumero : segundoNumero - primeiroNumero


alert(`A diferemça entre ${primeiroNumero} e ${segundoNumero} é = ${diferença}`)
