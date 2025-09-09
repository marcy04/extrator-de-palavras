const botaoMostraPalavra = document.querySelector ("#botao-palavrachave");

botaoMostraPalavra.addEventListener("click", mostraPalavrasChaves);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value ;

    const campoResultado = document.querySelector("#resultado-palavrachave")

    const palavras = texto.split(" ");
    
    campoResultado.textContent = palavras;
}