let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Cadastre valores antes de finalizar.')
    }else{
        let tot = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            if(valores[pos] > maior){
                maior = valores[pos]
            }
        }
        let media = soma/tot
        res.innerHTML += `<p>O total de números cadastrados é ${tot}.</p>`
        res.innerHTML += `<p>O maior número cadastrado é ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores da lista é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores da lista é ${media}.</p>`
    }
}