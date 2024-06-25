// aplicar ordenação em um array de objetos

const gamers = [
  {
    name: 'José',
    points: [20,22,100,10,0]
  },
  {
    name: 'Carlos',
    points: [0,21,10,100,0]
  },
  {
    name: 'Bob',
    points: [100,0,20,10,10]
  },
  {
    name: 'Maria',
    points: [20,20,0,0,100]
  },
  {
    name: 'Juliana',
    points: [90,90,100,90,0]
  },
]


gamers.sort((a,b) => {
  let pointsA = 0
  let pointsB = 0

  a.points.forEach(point => pointsA += point)
  b.points.forEach(point => pointsB += point)

  return pointsA-pointsB  
})


console.log(gamers)