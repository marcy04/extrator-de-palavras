const botaoMostraPalavra = document.querySelector ("#botao-palavrachave");

botaoMostraPalavra.addEventListener("click", mostraPalavrasChaves);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value ;
    const campoResultado = document.querySelector("#resultado-palavrachave")
    const palavrasChave = processaTexto (texto);
    
    campoResultado.textContent = palavras;
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}
