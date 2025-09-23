const botaoMostraPalavra = document.querySelector ("#botao-palavrachave");

botaoMostraPalavra.addEventListener("click", mostraPalavrasChaves);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value ;
    const campoResultado = document.querySelector("#resultado-palavrachave")
    const palavrasChave = processaTexto (texto);
    
    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

let frequencias = {};
for (let i of palavras) {
    frequencia[i] =0;
    for(let j of palavtras) {
        if(i==j) {
            frequencias[i]++;
        }
    }
}
    return palavras;
}