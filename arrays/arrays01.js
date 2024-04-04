const arr =[1,5,10,"olá",true]

let sohNumeros =arr.every(function(el){
    console.log(el)
    return typeof el === "number"
})

console.log(sohNumeros)