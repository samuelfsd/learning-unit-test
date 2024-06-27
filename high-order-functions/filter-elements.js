const names = ['Ana', 'Pedro', 'Giovana'];

const filteredNames = names.filter((name) => name.length <= 3)

// console.log(filteredNames)

const students = [
  {
    name: 'Ana',
    score: 10
  },
  {
    name: 'Josefina',
    score: 8.8
  },
  {
    name: 'Carlos',
    score: 9
  },
  {
    name: 'Rafael',
    score: 7
  },
  {
    name: 'Miguel',
    score: 4
  },
]

const filteredStudents = students.filter(student => student.score >= 7)

const studentsReproved = students.filter((student) => !(student.score >= 7))

// console.log(filteredStudents)

console.log(studentsReproved)