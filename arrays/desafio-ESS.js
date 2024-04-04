function sum (){
    const numbers =[]
    for (let i = 0; i  <arguments.length;i++){
    numbers.push(arguments[i])
   }
    console.log(numbers)

   //Array.prototype
}
 //sum(1,2,3,4,5)

 //sum.call (null,1,2,3,4,5)
 sum.apply(null,[1,2,3,4,5])