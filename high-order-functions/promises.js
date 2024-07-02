const generateRandomNumber = () => Math.round(Math.random() * 10)


const resolvedPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber()
    resolve(randomNumber)
  }, 1000)
})

const rejectedPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber()
    reject(new Error(`O número gerado ${randomNumber} não é válido!`))
  }, 1000)
})

const randomPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber()

    if (randomNumber % 2 === 0) {
      resolve(randomNumber)
    }

    reject(new Error(`Erro: O número gerado -> ${randomNumber} é ímpar!`))
  }, 1000)

})

// resolvedPromise().then((response) => console.log(response))
// rejectedPromise().then((response) => console.log('rejected', response)).catch((error) => console.log(error))

randomPromise().then((response) =>console.log(response)).catch((error) => console.log(error.message))