const {sum, sub, mul, div} = require('./calculator');

describe('The sum function', () => {
  it('return 3 when sum (1,2)', () => {
    expect(sum(1,2)).toBe(3)
  })

  it('return 1 when sub (2,1)', () => {
    expect(sub(2,1)).toBe(1)
  })

  it('return 10 when mul(2,5) ', () => {
    expect(mul(2,5)).toBe(10)
  })

  it('return 4 when div (100,25)', () => {
    expect(div(100,25)).toBe(4)
  })
  
  it('throws an error when tries to divide by zero', () => {
    expect(() => div(1,0)).toThrow(Error)
  })
})

// vídeo #f068