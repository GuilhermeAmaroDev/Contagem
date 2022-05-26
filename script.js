
function contar () {
var inicio = document.getElementById('txt1')//queryselector('input#txt1').value
var fim = document.getElementById ('txt2')//queryselector('input#txt2').value
var passo = document.getElementById('txt3') // queryselector('input#txt3').value
var res = document.getElementById ('res') //queryselector('div#res')
if (inicio.value == 0 || fim.value == 0 || passo.value == 0)
{
    res.innerHTML = 'Coloque outro valor que seja diferente de zero'
} else {
    res.innerHTML= 'Contando:'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (i <f ) { // contagem crescente
    for (var c = i ; c <=f ; c += p){
        res.innerHTML += ` ${c} \u{1F601} ` // U+1F601 era código original, alterar u+ por \u{} 
    }
        
} else { //contagem regressiva
    for (var c = i ; c >=f ; c-=p) {
        res.innerHTML += ` ${c} \u{1F60E} `
    } res.innerHTML += `\u{2705}` //para acrescentar um emoji tem que sempre colocar entre ``}
}
  
// += serve para acrescentar uma informação sem perder a original
    }
}