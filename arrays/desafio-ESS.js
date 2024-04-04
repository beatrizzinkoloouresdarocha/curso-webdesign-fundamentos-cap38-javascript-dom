function sum (){
    const arr =[]
    for (let i = 0; i  <arguments.length;i++){
        arr.push(arguments[i])
    }
    console.log(arr)
}
sum(1,2,3,4,5)