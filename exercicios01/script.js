//FAÇA UM PROGRAMA QUE SOME DOIS NÚMEROS 
const somar = (x, y) => x + y

console.log(somar(10,20)) 




//FAÇA UM PROGRAMA QUE MULTIPLIQUE DOIS NÚMEROS, VAI PEGAR O RESULTADO E SOMAR 10
const multi = (x, y) => x * y + 10

console.log(multi(10,10))


//FAÇA UM PROGRAMA QUE ENCONTRE A RAIZ QUADRADA DE UM NÚMERO, MULTIPLIQUE O RESULTA POR 10 E DIVIDA POR 33
const raiz = (x) => (Math.sqrt(x)) * 10 / 33
console.log(raiz(100))

//FAÇA UM PROGRAMA QUE INICIEI COM DOIS NOMES, E O PROGRAMA IMPRIMA NA TELA O SEGUINTE DADO: OLÁ, MEU NOME É [NOME DA PESSOA] E MEU NICK NO CODE CLUB É [OUTRO NOME]
const nome1 = "Rony"
const nick = "Digeras"

console.log("Meu nome é "+nome1,nick)


//FAZER UM PROGRAMA PARA VER SE OS NOMES SÃO IGUAIS 
const nome2 = "Rony"
const nome3 = "Bruno"
const nome4 = "Rauan"

if(nome2 == nome3){
    console.log("True")
}else {
    console.log("False")
}

//AGORA FAÇA AO CONTRARIO
if(nome2 == nome4){
    console.log("False")
}else {
    console.log("True")
}

//FAÇA  2 OBJETOS, NELES DEVEM CONTER OS DADOS DE 2 PESSOAS QUE VOCÊ CONHECE 
const rony = {
    nome: "Rony",
    sobrenome: "Fonseca",
    idade: 18, 
    sexo: "Masculino"
}

const rauan = {
    nome: "Rauan",
    sobrenome: "Fonseca",
    idade: 19,
    sexo: "Masculino"
}


//VER SE SÃO IGUAIS
if (rony.nome == rauan.nome){
    console.log("True")
}else {
    console.log("False")
}

//VER SE SÃO IGUAIs EM UM MESMO OBJETO SEGUNDO NOME
if (rony.nome == rony.sobrenome){
    console.log("True")
}else {
    console.log("False")
}

//GERAR UM NUMERO ALEATORIO DE 1 A 10
console.log(parseInt(Math.random()*100))


//IMPRIMIR O RESTO DA DIVISÃO
const div = (x, y) => x%y
console.log(div(7,3))

//COMPARAR DOIS NÚMEROS 
const comp = (x, y) => {
    if(x > y){
        console.log("True")
    }else {
        console.log("False")
    }
}

comp(2,5)

//FALAR O TAMANHO DO ARRAY 
const arr = [1,2,3,4,5]
console.log(arr.length)