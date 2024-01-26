const f = function(){
    console.log("teste")
}

f()

const f2 = new Function("v1","v2","return v1+v2")
console.log(f2(10,5))