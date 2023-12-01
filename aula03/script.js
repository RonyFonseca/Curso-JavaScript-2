function test(){
    let nome = "Rony"; //--> aqui funciona em todos que estão dentro do escopo dele ou pra cima 
    if(true){
        //let nome = "Rony"; --> ele iria só funcionar em 1 pq o let funciona do escopo dele para cima
        console.log(nome);
    }
    console.log(nome);
}

test();
console.log(nome);