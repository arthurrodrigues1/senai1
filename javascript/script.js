let valor = parseInt(prompt("digite um valor em metros"))

let mm = valor * 1000
let cm = valor * 100
let dm = valor * 10
let dam = valor / 10
let hm = valor / 100
let km = valor / 1000

let unidade = prompt("digite qual unidade voce quer mm,cm,dm,dam,hm,km")

switch (unidade) {
    case "mm":
    console.log(mm)
    break
    case "cm":
    console.log(cm)
    break
    case "dm":
    console.log(dm)
    break
    case "dam":
    console.log(dam)
    break
    case "hm":
    console.log(hm)
    break
    case "km":
    console.log(km)
    break
    default:
    console.log("valor invalido")
}