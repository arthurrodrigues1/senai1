while (true) {
    let op = parseInt(prompt("Digite 0 para sair do estoque ou 1 para listar os itens do estoque, 2 para adicionar, 3 para remover"))
    let estoque = ["sla","sla","sla"]
    if (op === 0) {
        alert("Você decidiu encerrar o programa!")
        break
    } else if (op === 1) {
        alert(estoque)
    } else if (op === 2) {
        let local = prompt ("onde voce deseja adicionar? (começo,final ou posicao?)")
        let item = prompt("o que voce deseja adicionar?")
        if (local === "comeco"){
            estoque.unshift(`${item}`)
        } else if (local === "final"){
            estoque.push(`${item}`)
            alert(estoque)
        } else if (local === "posicao","posiçao","posição"){
            alert("posicao substitui o item se ja estiver ocupado o local")
            posicao = perseint(prompt("qual posicao voce quer?"))
            estoque[posicao] = item
        }
    } else if (op === 3) {
        let local = prompt ("onde voce deseja adicionar? (começo,final ou posicao?)")
        let item = prompt("o que voce deseja adicionar?")
    } else {
       alert("digite um valor valido")
    }
}
