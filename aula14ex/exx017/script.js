function tabuada(){
    var n = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(n.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        var num = Number(n.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}