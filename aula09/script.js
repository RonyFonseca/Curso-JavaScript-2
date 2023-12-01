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