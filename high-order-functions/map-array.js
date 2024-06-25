const people = ['José', 'Aline', 'Márcio', 'João', 'Maria'];

const newPeople = people.map(people => {
  const registry = {};
  registry.name = people
  registry.company = 'Knex Consultoria'

  return registry
})
console.log(newPeople)