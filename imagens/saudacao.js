(function(){
    const nomeUsuario= null
    if(nomeUsuario){
         //document.querySelector(".top-bar p").textContent ="Bem-vindo(a)," +nomeUsuario
    const elemento =document.querySelector(".top-bar p")
    console.log(elemento.textContent)
   // elemento.textContent ="Bem-vindo(a)," +nomeUsuario
   elemento.innerHTML += "<b>" + nomeUsuario +"</b>"
    }
    
})()

