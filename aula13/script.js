function soma(...num){
    var res = 0;
    for(i=0; i<num.length; i++){
        res += num[i]
    }
    return res
}

console.log(soma(10,5,5,5))