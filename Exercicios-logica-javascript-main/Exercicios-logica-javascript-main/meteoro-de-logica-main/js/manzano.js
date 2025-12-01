function ex001() {
  let c = parseFloat(prompt("Digite a temperatura em celsius: "))
  let f = (9 * c + 160) / 5
  alert("Celsius em Fahrenheit = " + f);
}
function ex002() {
  let f = parseFloat(prompt("Digite a temperatura em fahrenheit: "))
  let c = (f - 32) * (5 / 9)
  alert("Fahrenheit em Celsius = " + c);
}
function ex003() {
  let raio = parseFloat(prompt("Digite o valor de raio: "))
  let altura = parseFloat(prompt("Digite o valor da altura: "))
  let volume = 3.14 * raio * raio * altura
  alert("Volume = " + volume + "cm");
}
function ex004() {
  let tempoGastoHora = parseFloat(prompt("Digite o tempo gasto (hora): "))
  let velocidade = parseFloat(prompt("Digite a velocidade (km) por hora: "))
  let distancia = tempoGastoHora * velocidade
  let litrosUsados = distancia / 12

  alert("Tempo gasto = " + tempoGastoHora + " horas")
  alert("Velocidade média = " + velocidade + "km/h")
  alert("Distância percorrida = " + distancia + "km")
  alert("Litros usados = " + litrosUsados + "l")
}
function ex005() {
  let valorPagar = parseFloat(prompt("Digite o valor a pagar: "))
  let tempo = parseFloat(prompt("Digite o tempo (meses) excedente ao pagamento: "))
  let taxa = parseFloat(prompt("Digite a taxa percentual sobre o valor excedente: "))

  let prestacao = valorPagar + (valorPagar * taxa / 100) * tempo

  alert("Prestação = " + prestacao)
}
function ex006() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))

  let troca = a

  a = b
  b = troca

  alert("A = " + a)
  alert("B = " + b)
}
function ex007() {
  let n1 = parseFloat(prompt("Digite o 1º valor: "))
  let n2 = parseFloat(prompt("Digite o 2º valor: "))
  let n3 = parseFloat(prompt("Digite o 3º valor: "))
  let n4 = parseFloat(prompt("Digite o 4º valor: "))

  alert(`${n1} + ${n2} = ${n1 + n2}`)
  alert(`${n1} + ${n3} = ${n1 + n3}`)
  alert(`${n1} + ${n4} = ${n1 + n4}`)
  alert(`${n2} + ${n3} = ${n2 + n3}`)
  alert(`${n2} + ${n4} = ${n2 + n4}`)
  alert(`${n3} + ${n4} = ${n3 + n4}`)

  alert(`${n1} * ${n2} = ${n1 * n2}`)
  alert(`${n1} * ${n3} = ${n1 * n3}`)
  alert(`${n1} * ${n4} = ${n1 * n4}`)
  alert(`${n2} * ${n3} = ${n2 * n3}`)
  alert(`${n2} * ${n4} = ${n2 * n4}`)
  alert(`${n3} * ${n4} = ${n3 * n4}`)
}
function ex008() {
  let comprimento = parseFloat(prompt("Digite o valor do comprimento: "))
  let largura = parseFloat(prompt("Digite o valor da largura: "))
  let altura = parseFloat(prompt("Digite o valor da altura: "))

  let volume = comprimento * altura * largura

  alert("Volume = " + volume)
}
function ex009() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))

  if (a > b) {
    diferenca = a - b
  } else {
    diferenca = b - a
  }
  let quadradoDiferenca = diferenca * diferenca

  alert("Quadrado da diferença = " + quadradoDiferenca)
}
function ex010() {

  let valorEmReal = parseFloat(prompt("Digite o valor em real: "))
  let valorEmDolar = valorEmReal * 5.39

  alert(`R$${valorEmReal.toFixed(2)} em dólar = USD ${valorEmDolar.toFixed(2)}`)
}
function ex011() {
  let valorEmDolar = parseFloat(prompt("Digite o valor em dólar: "))
  let valorEmReal = valorEmDolar / 5.39

  alert(`USD ${valorEmDolar.toFixed(2)} em real = R$${valorEmReal.toFixed(2)}`)
}
function ex012() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))
  let c = parseFloat(prompt("Digite o valor C: "))

  let somaQuadrados = (a * a) + (b * b) + (c * c)

  alert("Soma dos quadrados = " + somaQuadrados)
}
function ex013() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))
  let c = parseFloat(prompt("Digite o valor C: "))

  let quadradoSoma = (a + b + c) ** 2

  alert("Quadrado da soma = " + quadradoSoma)
}
function ex014() {
  let n1 = parseFloat(prompt("Digite o 1º valor: "))
  let n2 = parseFloat(prompt("Digite o 2º valor: "))
  let n3 = parseFloat(prompt("Digite o 3º valor: "))
  let n4 = parseFloat(prompt("Digite o 4º valor: "))

  let p = n1 * n3
  let s = n2 + n4

  alert(`${n1} * ${n3} = ${n1 * n3}`)
  alert(`${n2} + ${n4} = ${n2 + n4}`)
}
function ex015() {
  let sm = parseFloat(prompt("Digite o salário mensal: "))
  let pr = parseFloat(prompt("Digite o percentual de reajuste: "))
  let ns = sm + (sm * pr / 100)

  alert("Novo salário = " + ns)
}
function ex016() {
  let votosNulosA = parseFloat(prompt("Digite a quantidade de votos nulos (Candidato A): "))
  let votosBrancosA = parseFloat(prompt("Digite a quantidade de votos brancos (Candidato A): "))
  let votosValidosA = parseFloat(prompt("Digite a quantidade de votos válidos (Candidato A): "))

  let votosNulosB = parseFloat(prompt("Digite a quantidade de votos nulos (Candidato B): "))
  let votosBrancosB = parseFloat(prompt("Digite a quantidade de votos brancos (Candidato B): "))
  let votosValidosB = parseFloat(prompt("Digite a quantidade de votos válidos (Candidato B): "))

  let votosNulosC = parseFloat(prompt("Digite a quantidade de votos nulos (Candidato C): "))
  let votosBrancosC = parseFloat(prompt("Digite a quantidade de votos brancos (Candidato C): "))
  let votosValidosC = parseFloat(prompt("Digite a quantidade de votos válidos (Candidato C): "))

  let votosBrancos = votosBrancosA + votosBrancosB + votosBrancosC
  let votosNulos = votosNulosA + votosNulosB + votosNulosC
  let votosValidos = votosValidosA + votosValidosB + votosValidosC


  let totalEleitores = votosBrancos + votosNulos + votosValidos

  let percentualValidos = (votosValidos / totalEleitores) * 100
  let percentualValidosA = (votosValidosA / totalEleitores) * 100
  let percentualValidosB = (votosValidosB / totalEleitores) * 100
  let percentualValidosC = (votosValidosC / totalEleitores) * 100
  let percentualNulos = (votosNulos / totalEleitores) * 100
  let percentualBrancos = (votosBrancos / totalEleitores) * 100

  alert("Total eleitores = " + totalEleitores)
  alert("Total votos válidos = " + votosValidos)
  alert("Percentual votos válidos = " + percentualValidos.toFixed(2) + "%")
  alert("Percentual votos válidos (candidato A) = " + percentualValidosA.toFixed(2) + "%")
  alert("Percentual votos válidos (candidato B) = " + percentualValidosB.toFixed(2) + "%")
  alert("Percentual votos válidos (candidato C) = " + percentualValidosC.toFixed(2) + "%")
  alert("Percentual votos nulos = " + percentualNulos.toFixed(2) + "%")
  alert("Percentual votos brancos = " + percentualBrancos.toFixed(2) + "%")
}
function ex017() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))
  let diferenca = 0

  if (a > b) {
    diferenca = a - b
  } else {
    diferenca = b - a
  }
  alert("Diferença = " + diferenca)
}
function ex018() {
  let a = parseFloat(prompt("Digite um valor: "))
  if (a < 0) {
    a = a * -1
  }
  alert(a)
}
function ex019() {
  let n1 = parseFloat(prompt("Digite a 1º nota:"))
  let n2 = parseFloat(prompt("Digite a 2º nota:"))
  let n3 = parseFloat(prompt("Digite a 3º nota:"))
  let n4 = parseFloat(prompt("Digite a 4º nota:"))

  let media = (n1 + n2 + n3 + n4) / 4

  if (media > 5) {
    alert("Aprovado")
  } else {
    alert("Reprovado")
  }

  alert("Média = " + media)
}
function ex020() {
  let n1 = parseFloat(prompt("Digite a 1º nota:"))
  let n2 = parseFloat(prompt("Digite a 2º nota:"))
  let n3 = parseFloat(prompt("Digite a 3º nota:"))
  let n4 = parseFloat(prompt("Digite a 4º nota:"))

  let media = (n1 + n2 + n3 + n4) / 4

  if (media >= 7) {
    alert("Aprovado")
    alert("Média = " + media)
  } else {
    let exame = parseFloat(prompt("Digite a nota do exame:"))
    let novaMedia = media + exame

    if (novaMedia >= 5) {
      alert("Aprovado")
      alert("Média = " + novaMedia)
    } else {
      alert("Reprovado")
    }
  }
}
function ex021() {
  let a = parseFloat(prompt("Digite o valor A: "))
  let b = parseFloat(prompt("Digite o valor B: "))
  let c = parseFloat(prompt("Digite o valor C: "))

  let delta = b ** 2 - 4 * a * c

  let x1 = (-b + Math.sqrt(delta)) / (2 * a)
  let x2 = (-b - Math.sqrt(delta)) / (2 * a)

  alert("Delta = " + delta)
  alert("X1 = " + x1)
  alert("X2 = " + x2)
}
function ex022() {
  let n1 = parseFloat(prompt("Digite a 1º nota:"))
  let n2 = parseFloat(prompt("Digite a 2º nota:"))
  let n3 = parseFloat(prompt("Digite a 3º nota:"))

  if (n1 > n2 && n1 > n3) {
    maior = n1
    if (n2 > n3) {
      meio = n2
      menor = n3
    } else {
      meio = n3
      menor = n2
    }
  } else if (n2 > n3) {
    maior = n2
    if (n1 > n3) {
      meio = n1
      menor = n3
    } else {
      meio = n3
      menor = n1
    }
  } else {
    maior = n3
    if (n1 > n2) {
      meio = n1
      menor = n2
    } else {
      meio = n2
      menor = n1
    }
  }

  alert(menor)
  alert(meio)
  alert(maior)
}
function ex023() {
  let n1 = parseFloat(prompt("Digite o 1º valor:"))
  let n2 = parseFloat(prompt("Digite o 2º valor:"))
  let n3 = parseFloat(prompt("Digite o 3º valor:"))
  let n4 = parseFloat(prompt("Digite o 4º valor:"))
  listaN = [n1, n2, n3, n4]

  listaN.forEach(valor => {
    if (valor % 2 == 0 && valor % 3 == 0) {
      alert(`${valor} é divisível por 2 e 3`)
    }
  });
}
function ex024() {
  let n1 = parseFloat(prompt("Digite o 1º valor:"))
  let n2 = parseFloat(prompt("Digite o 2º valor:"))
  let n3 = parseFloat(prompt("Digite o 3º valor:"))
  let n4 = parseFloat(prompt("Digite o 4º valor:"))
  let n5 = parseFloat(prompt("Digite o 5º valor:"))
  listaN = [n1, n2, n3, n4, n5]

  let maior = Math.max(...listaN)
  let menor = Math.min(...listaN)


  alert("Maior = " + maior)
  alert("Menor = " + menor)
}
function ex025() {
  let n = parseFloat(prompt("Digite o um valor:"))

  if (n % 2 == 0) {
    alert(n + " é par")
  } else {
    alert(n + " é impar")
  }
}
function ex026() {
  let n = parseFloat(prompt("Digite o um valor entre 1 e 9:"))

  if (n < 10 && n > 0) {
    alert("Está na faixa")
  } else {
    alert("Não está na faixa")
  }
}
function ex027() {
  let n = parseFloat(prompt("Digite um valor menor que 3:"))

  if (!(n > 3)) {
    alert(n)
  }
}
function ex028() {
  let nome = prompt("Digite o nome:")
  let sexo = prompt("Digite o sexo (F ou M):")
  sexo.toUpperCase

  if (sexo == "F") {
    alert("Boas vindas Ilma sra" + " " + nome)
  } else {
    alert("Boas vindas Ilmo sr" + " " + nome)
  }
}
function ex029() {
  let n = parseFloat(prompt("Digite o um valor:"))

  for (let i = 1; i < 11; i++) {
    alert(`${n} x ${i} = ${i * n}`)
  }
}
function ex030() {
  let somatorio = 0

  for (let i = 1; i < 101; i++) {
    somatorio = somatorio + i
    alert(`${somatorio - i} + ${i} = ${somatorio}`)
  }
}
function ex031() {
  let somatorio = 0;

  for (let i = 1; i < 501; i++) {
    if (i % 2 == 0) {
      somatorio = somatorio + i
    }
  }

  alert("Somatório = " + somatorio)

}
function ex032() {
  for (let i = 1; i < 21; i++) {
    if (i % 2 != 0) {
      alert(i)
    }
  }
}
function ex033() {
  let base = 3
  let resultado = base
  let expoente = 0

  while (expoente <= 15) {
    if (expoente == 0) {
      resultado = 1
    } else if (expoente == 1) {
      resultado = base
    } else {
      resultado = resultado * base
    }
    alert(`${base} elevado a ${expoente} = ${resultado}`)
    expoente++
  }
}
function ex034() {
  let base = parseFloat(prompt("Digite o valor da base:"))
  let contador = parseFloat(prompt("Digite o valor do expoente:"))

  let expoente = 0

  let resultado = base;


  while (expoente <= contador) {
    if (expoente == 0) {
      resultado = 1
    } else if (expoente == 1) {
      resultado = base
    } else {
      resultado = resultado * base
    }
    alert(`${base} elevado a ${expoente} = ${resultado}`)
    expoente++
  }
}
function ex035() {
  let primeiroTermo = 1
  let segundoTermo = 1
  let proximoTermo = 1
  let contador = 1

  alert(primeiroTermo)

  while (contador < 16) {
    alert(proximoTermo)
    proximoTermo = primeiroTermo + segundoTermo
    segundoTermo = primeiroTermo
    primeiroTermo = proximoTermo
    contador++
  }
}
function ex036() {
  let grausCelsius = 10
  let conversaoFahrenheit = 0

  while (grausCelsius < 101) {
    conversaoFahrenheit = (9 * grausCelsius + 160) / 5
    alert(`${grausCelsius.toFixed(2)} celsius = ${conversaoFahrenheit.toFixed(2)} fahrenheit`)
    grausCelsius = grausCelsius + 10
  }
}
function ex037() {
  let somatorio = 0
  let n = 0

  for (let i = 1; i < 11; i++) {
    n = parseFloat(prompt("Digite o " + i + "º valor:"))
    somatorio = somatorio + n
  }

  let media = somatorio / 10

  alert("Somatório = " + somatorio)
  alert("Média = " + media)

}
function ex038() {
  let somatorio = 0
  let par = 0

  for (let i = 50; i < 71; i++) {
    if (i % 2 == 0) {
      somatorio = somatorio + i
      par = par + 1
    }
  }

  let media = somatorio / par

  alert("Somatório = " + somatorio)
  alert("Média = " + media)
}
function ex039() {
  let somatorio = 0
  let resposta = 1

  while (resposta != 0) {
    let comodo = prompt("Digite o nome do cômodo:")
    let largura = parseFloat(prompt("Digite a largura do cômodo:"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))

    let area = largura * comprimento
    somatorio = somatorio + area

    alert("Área do cômodo " + comodo + " = " + area)

    resposta = parseInt(prompt("Quer continuar adicionando mais cômodos? Se não, digite '0':"))
  }

  alert("Somatório de área = " + somatorio)
}
function ex040() {
  let n = parseFloat(prompt("Digite o um valor:"))
  let resposta = 1
  maior = n
  menor = n

  if (n > 0) {
    while (resposta > 0) {
      n = parseFloat(prompt("Digite outro valor:"))
      if (n > maior) {
        maior = n
      }
      if (n < menor) {
        menor = n
      }
      resposta = parseFloat(prompt("Número negativo para sair ou positivo para continuar"))
    }
  }

  alert("Maior = " + maior)
  alert("Menor = " + menor)
}

function ex041() {
  let quadrado = 0
  for (let i = 15; i < 201; i++) {
    quadrado = i ** 2
    alert(i + " ^2 = " + quadrado)
  }
}
function ex042() {
  let somatorio = 0
  for (let i = 1; i < 500; i++) {
    if (i % 2 == 0) {
      somatorio = somatorio + i
    }
  }
  alert("Somatório = " + somatorio)
}
function ex043() {
  for (let i = 1; i < 200; i++) {
    if (i % 4 == 0) {
      alert(`${i} é divisível por 4`)
    }
  }
}
function ex044() {
  let somatorio = 0
  let proximoQuadro = 1
  let primeiroQuadro = 1
  let segundoQuadro = 1

  let contador = 1

  do {
    alert(`Quadrante ${contador} = ${proximoQuadro}`)
    segundoQuadro = primeiroQuadro * 2
    proximoQuadro = proximoQuadro + segundoQuadro
    primeiroQuadro = segundoQuadro
    somatorio = somatorio + proximoQuadro
    contador++
  } while (contador < 65)
}
function ex045() {
  let somatorio = 0
  let fatorial = 0
  let contador = 0;
  let numero = 0
  for (let i = 1; i < 16; i++) {
    numero = parseInt(prompt("Digite um número: "))
    contador = numero - 1
    fatorial = numero
    while (contador > 0) {
      fatorial = fatorial * contador
      contador = contador - 1
    }
    alert("Fatorial = " + fatorial)
    somatorio = somatorio + fatorial
  }

  alert("Somatório fatorial = " + somatorio)
}
function ex046() {
  let somatorio = 0
  let contador = 0
  let numero = 0

  while (numero > -1) {
    numero = parseFloat(prompt("Digite um número (negativo para sair): "))
    if (numero < 0) {
      break
    }
    somatorio = somatorio + numero
    contador++
  }

  let media = somatorio / contador

  alert("Média = " + media)
  alert("Somátorio = " + somatorio)

}
function ex047() {
  let contador = 1
  let i = 1


  while (contador < 11) {
    if (contador % 2 != 0) {
      i = contador - 1
      fatorial = contador
      while (i > 0) {
        fatorial = fatorial * i
        i--
      }
      alert(contador + "! = " + fatorial)
    }
    contador++
  }
}

function ex048() {
  let somatorio = 0
  let resposta = 1

  while (resposta != 0) {
    let comodo = prompt("Digite o nome do cômodo:")
    let largura = parseFloat(prompt("Digite a largura do cômodo:"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))

    let area = largura * comprimento
    somatorio = somatorio + area

    alert("Área do cômodo " + comodo + " = " + area)

    resposta = parseInt(prompt("Quer continuar adicionando mais cômodos? Se não, digite '0':"))
  }

  alert("Somatório de área = " + somatorio)
}
function ex049() {
  let numero = 1
  let maior = numero
  let menor = numero

  if (numero > 0) {
    do {
      numero = parseFloat(prompt("Digite um número (negativo para sair)"))
      if (numero < 0) {
        break
      }
      if (numero > maior) {
        maior = numero
      }
      if (numero < menor) {
        menor = numero
      }
    } while (numero > 0)
  }

  alert("Maior = " + maior)
  alert("Menor = " + menor)
}
function ex050() {
  let dividendo = parseFloat(prompt("Digite o dividendo:"))
  let divisor = parseFloat(prompt("Digite o divisor:"))
  let contador = 1

  while (dividendo > 0) {
    alert(contador)
    dividendo = dividendo - divisor
    contador++
  }

}
function ex051() {
  let quadrado = 0
  let contador = 15
  do {
    quadrado = contador ** 2
    console.log(contador + "² = " + quadrado)
    contador++
  } while (contador < 201)
}
function ex052() {
  let numero = parseInt(prompt("Digite um número:"))
  let contador = 1
  do {
    console.log(`${numero} x ${contador} = ${numero * contador}`)
    contador++
  } while (contador < 11)
}
function ex053() {
  let contador = 1
  let somatorio = 0

  do {
    somatorio = somatorio + contador
    contador++
  } while (contador < 101)

  console.log(somatorio)

}
function ex054() {
  let contador = 1
  let somatorio = 0

  do {
    if (contador % 2 == 0) {
      somatorio = somatorio + contador
    }
    contador++
  } while (contador < 500)

  console.log(somatorio)
}
function ex055() {
  let contador = 1
  do {
    if (contador % 2 != 0) {
      console.log(contador)
    }
    contador++
  } while (contador < 20)
}
function ex056() {
  let contador = 1
  do {
    if (contador % 4 != 0) {
      console.log(contador)
    }
    contador++
  } while (contador < 200)
}
function ex057() {
  let potencia = 3
  let expoente = 0
  let resultado = 0

  do {
    if (expoente == 0) {
      resultado = 1
    } else if (expoente == 1) {
      resultado = potencia
    } else {
      resultado = potencia ** expoente
    }
    console.log(`${potencia} elevado a ${expoente} = ${resultado}`)
    expoente++
  } while (expoente < 16)
}
function ex058() {

  let potencia = parseInt(prompt("Digite a potencia: "))
  let numeroLimite = parseInt(prompt("Digite o expoente: "))
  let expoente = 0
  let resultado = 0

  do {
    if (expoente == 0) {
      resultado = 1
    } else if (expoente == 1) {
      resultado = potencia
    } else {
      resultado = potencia ** expoente
    }
    console.log(`${potencia} elevado a ${expoente} = ${resultado}`)
    expoente++
  } while (expoente < numeroLimite + 1)

}
function ex059() {
  let primeiroTermo = 1
  let segundoTermo = 0
  let proximoTermo = 0
  let contador = 0

  console.log(primeiroTermo)

  do {
    segundoTermo = primeiroTermo
    primeiroTermo = proximoTermo
    proximoTermo = segundoTermo + proximoTermo
    contador++
    console.log(proximoTermo)
  } while (contador < 16)
}
function ex060() {
  let celsius = 10
  let celsiusEmFahrenheit = 0
  let contador = 1
  do {
    celsiusEmFahrenheit = (celsius * 9 / 5) + 32
    console.log(`${celsius} em Fahrenheit = ${celsiusEmFahrenheit}`)
    celsius = celsius + 10
    contador++
  } while (contador < 11)
}
function ex061() {
  let fatorial = 1
  let contador = 1
  let i = 1

  do {
    i = contador
    fatorial = contador
    if (contador % 2 != 0) {
      if (contador == 1) {
        fatorial = fatorial * i
      }
      else {
        i = contador - 1
        do {
          fatorial = fatorial * i
          i--
        } while (i > 0)
      }
      console.log(`${contador}! = ${fatorial}`)
    }
    contador++
  } while (contador < 11)
}

const btns = document.querySelectorAll(".exercise");

btns.forEach((btn) => {
  const num = btn.querySelector(".letter").textContent.padStart(3, "0");
  btn.addEventListener("click", () => {
    const funcName = `ex${num}`;
    if (typeof window[funcName] === "function") {
      window[funcName]();
    } else {
      console.error(`Função ${funcName} não existe!`);
    }
  });
});
