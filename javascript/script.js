while (true) {
    let op = parseInt(prompt("Digite 0 para encerrar o programa ou 1 para soma, 2 para subtracao, 3 para multiplicacao, 4 para divisao"))
    if (op === 0) {
        alert("Você decidiu encerrar o programa!")
        break
    } else if (op === 1) {
        let num1 = parseInt (prompt("primeiro numero"))
        let num2 = parseInt (prompt("segundo numero"))   
        alert(soma(num1,num2))
    } else if (op === 2) {
        let num1 = parseInt (prompt("primeiro numero"))
        let num2 = parseInt (prompt("segundo numero"))   
        alert(subtracao(num1,num2))
    } else if (op === 3) {
        let num1 = parseInt (prompt("primeiro numero"))
        let num2 = parseInt (prompt("segundo numero"))   
        alert(multiplicacao(num1,num2))
    } else if (op === 4) {
        let num1 = parseInt (prompt("primeiro numero"))
        let num2 = parseInt (prompt("segundo numero"))   
        alert(divisao(num1,num2))
    } else {
       alert("Digite um valor válido 0 ou 1!")
    }
}
function soma(n1,n2){
    return n1+n2
}
function subtracao(n1,n2){
    return n1-n2
}
function multiplicacao(n1,n2){
    return n1*n2
}
function divisao(n1,n2){
    return n1/n2
}