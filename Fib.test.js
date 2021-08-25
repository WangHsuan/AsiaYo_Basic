const Fib = require('./Fib');

const {FibRecursion,FibIterative,FibDynamic} = Fib;

test('test FibRecursion',()=>{
    expect(FibRecursion(0)).toBe(0)
})

test('test FibIterative',()=>{
    expect(FibIterative(3)).toBe(2)
})

test('test FibDynamic',()=>{
    expect(FibDynamic(4)).toBe(3)
})