const aproveEmailsCandidates = [
  'ana.love@example.com',
  'maria@example.com',
  'joana@example.com',
  'jose@example.com',
  'vitu@example.com',
]



const handleSubmitEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`)
}


// primeiro parâmetro callback com o item que você quer iterar
// é possível passar outros parâmetros também
// como index ou o possível array
aproveEmailsCandidates.forEach((email, index, array) => {
  handleSubmitEmail(email)
  console.log(`A sua posição é de: ${++index}.`)
  console.log(`A quantidade de pessoas que estão no processo seletivo: ${array.length}`)

})