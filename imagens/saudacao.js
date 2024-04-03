(function(){
    const nomeUsuario ="Daniel"

    if(nomeUsuario) {
        const topBarElemento=document.createElement("div")
        topBarElemento.className="top-bar"
        topBarElemento.innerHTML =<p>OLÁ ,<b> $(nomeUsuario)</b></p>

        //elementoPai.insertBefore(novoElemento,elementoReferencia)
        constelementoPai=document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento,elementoPai.firstElementChild)
        console.log(elementoPai,firstElementChild)

    }

})()