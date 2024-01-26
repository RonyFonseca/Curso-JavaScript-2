//FAÇA UM PROGRAMA QUE COMPARE UM NÚMERO ALEATÓRIO COM 10 E FALE SE É MENOR OU IGUAL A 10 
const num = Math.floor(Math.random()*11)
console.log(num)
if (num == 10 ){
    console.log("É igual a 10")
}else {
    console.log("É menor que 10")
}

//FAÇA UM PROGRAMA QUE VERIFICA SE A PESSOA É BRASILEIRA OU NÃO 
const pessoa = {
    nome: "Rony",
    pais: "brasil"
}

if (pessoa.pais == "Brasil" || pessoa.pais == "brasil"){
    console.log("É brasileiro(A)")
}else {
    console.log("Não é brasileiro(A)")
}


//FAÇA UM PROGRAMA PARA COMPARAR DOIS NÚMERO GERADOS ALEATÓRIAMENTE
const num1 = Math.floor(Math.random()*11)
const num2 = Math.floor(Math.random()*11)

if (num1 == num2){
    console.log("Você ganhou")
}else {
    console.log("Você não ganhou")
}

