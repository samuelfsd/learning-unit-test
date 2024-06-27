const cars = ["Gol", "HB20", "Focus"]

const motorcycle = ["XRE", "BIZ"]

const vehicles = [...cars, ...motorcycle]

// console.log(vehicles)


const people = {
  name: "Nádia",
  age: 28,
  city: "BH"
}

const knowEdge = {
  softSkills: true,
  hardSkills: true,
  work: true
}

const peopleReformed = {
  ...people,
  ...knowEdge,
  sport: 'Corrida'
}

console.log(peopleReformed)