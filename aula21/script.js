//FOR OF - ELE É MAIS INTELIGENTE QUE O FOR

const name = "Rony"
const names = ["Bruno","Rauan","Felipe","Marianne"]

for(let letras of name){
    console.log(letras)
}

for(let apelidos of names){
    console.log(apelidos)
}

//FOR IN - TRABALHA MAIS COM OBJETOS 

const pessoa = {
    nome:"Rony",
    idade: 18,
    sexo: "Masculino"
}

for(let propriedades in pessoa){
    console.log(propriedades)
}

for(let propriedades in pessoa){
    console.log(pessoa[propriedades])
}