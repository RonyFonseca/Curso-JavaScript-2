
const soma = (...valores)=>{
    const somar = (valores) => {
        var res = 0
        for(i=0; i <valores.length; i++){
            res+=valores[i]
        }
        return res
    }
    return somar(valores)
}

console.log(soma(2,2,2,2))