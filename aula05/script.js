let num1 = 10; 
let num2 = 11; 


//USANDO O AND

//let res = num1 & num2

//console.log(res);

//CALUCLO
//1010 = 10 
//1011 = 11
//-----
//1010 = 10
//OS DOIS NÚMEROS TEM QUE SEREM IGUAIS CASO CONTRARIO DARÁ 0



//AGORA USANDO O OR |

//let res = num1 | num2;
//console.log(res);

//CALULO
//1010 = 10
//1011 = 11
//-----
//1011 = 11
//OS DOIS NÚMEROS PODEM SER DIFERENTES MAS TENDO 1 VAI DAR 1



//MANIPULAR OS BITS

let res = num1 << 1; //PEGA O VALOR DE NUM1 E DOBRA 
console.log(res);


let res2 = num1 >> 1; //PEGA O VALOR DE NUM1 E DIVIDE
console.log(res2);