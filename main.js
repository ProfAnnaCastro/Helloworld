let nomeUsuário = "";
let elemento = document.querySelector ("#nome-usuário")

while(nomeUsuário == ""){
    nomeUsuário = prompt ("Olá, como é seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja muito bem-vindo(a)"
}else{elemento.textContent = nomeUsuário;

}

