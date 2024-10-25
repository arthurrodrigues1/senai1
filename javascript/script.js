let a = 5

let b = 8

let c = 10

let d = 2

let k = ( b < a * 2) && ( d < c - b)
    k = (8 < 5 * 2) && (2 < 10 - 8)
    k = (8 < 10) && ( 2 < 2)
    k = true && false
    k = false

let x = (a > b) || ! (c % 2 == 0)

let y = x || ! ( c > a + b / d)

let z = ! x && false || (d + a <= b + d)

console.log(k,x,y,z)