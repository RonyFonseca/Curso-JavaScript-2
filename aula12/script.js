/*var happy1 = 0
var happy2
var trabalho = true
var dinheiro = 1000
var noiva = true

function happy(){
    if (trabalho == true){
        happy1+= 1
    } 
    if (dinheiro >= 2000){
        happy1+= 1
    }
    if (noiva == true){
        happy1+=1
    }

    if (happy1 == 3){
        happy2= "100%"
    } else if (happy1 == 2){
        happy2= "50%"

    } else if (happy1 == 1) {
        happy2= "25%"
    } else {
        happy2= "0%"
    }
    return happy2
}

console.log("Minha felicidade hoje está de "+happy())*/

/*function soma(n1, n2){
    let s = 0
    s = n1 + n2
    outra(s)
}

soma(10,5)

function outra(s){
    console.log(s)
}*/

function number(){
    let n1 = document.getElementById("num1").value 
    let n2 = document.getElementById("num2").value
    console.log(typeof(n1))
    n1 = Number(n1)
    console.log(typeof(n1))
    n2 = Number(n2)
    let soma = n1 + n2
    console.log(soma)
}



