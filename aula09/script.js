const objs1 = document.getElementsByTagName('div')
console.log(objs1)

const objs2 = [...document.getElementsByTagName('div')]
console.log(objs2)


somar = () => {
    let valor = document.getElementById('valor').value 
    valor = parseFloat(valor)
    for(i=0; i<=10; i++){
        var valor2 = valor + i
        console.log(`O seu valor `+valor+` + `+i+` = `+valor2)
    }
}


var ar1 = [1,2,3]
var ar2 = [4,5,6]

var newAr = [...ar1,"%",...ar2]

console.log(newAr)