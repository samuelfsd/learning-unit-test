const book = {
  autor: 'David Flanagan',
  theme: 'Javascript',
  year: '2012',
  publisher: 'Bookman'
}

const {autor, theme, year, publisher } = book

console.log(`O livro de ${theme} da ${publisher}, foi escrito por ${autor} e o primeiro lançamento aconteceu em ${year}`)


const book2 = {
  autor: {
    name: 'David Flanagan',
    age: 50,
    bachelor: 'Computer Science'
  },
  theme: 'Javascript',
  year: '2012',
  publisher: 'Bookman'
}

const { autor: { age }  } = book2
console.log(age)