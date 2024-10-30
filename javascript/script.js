let a = 5

let b = 8

let c = 10

let d = 2

let k = (8 < 5 * 2) && (2 < 10 - 8)
    k = (8 < 10) && ( 2 < 2)
    k = true && false
    k = false

let x = (a > b) || ! (c % 2 == 0)
    x = (5 > 8) || ! (10 % 2 == 0)
    x = false or not true
    x = false

let y = x || ! ( c < a + b / d)
    y = false or not (10 < 9)
    y = false or not false
    y = true

let z = ! x && false || (d + a <= b + d)
    z = not false and false or (2 + 5 <= 8 + 2)
    z = not false and false ou true
    z = true and true 
    z = true

console.log(k,x,y,z)