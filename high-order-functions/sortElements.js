// -> arrays
const numbers = [9, 10, 5, 3, 5, 4, 1, 8]
const names = ['José', 'Ana', 'Bob', 'Carlos', 'Maria', 'Alice']


// o sort() MODIFICA o array original - importante lembrar
// sem passar parâmetros o js subentende que a ordenação será feita por strings
// convertendo número para texto e assim ordenando

const sortNumbers = numbers.sort((a, b) => a - b)
console.log(sortNumbers)

// console.log(names.sort())


