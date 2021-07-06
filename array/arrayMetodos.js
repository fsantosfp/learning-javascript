const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo item do aray
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento na ultima posição do array
console.log(pilotos) 

pilotos.shift() // Remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um item na primeira posição do array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// Pegar parte do Array

// Gerar um novo array
const algunsPilotos = pilotos.slice(2) // Gerou um novo array apartir do indice 2 de um array existente
console.log(algunsPilotos)

// Gera um novo array com nos dados da posição 1 até a posição 4 de um arrya, porem, a posição 4 nao entra no novo array.
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)