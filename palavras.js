var palavras = [
    "JAVA",
    "HTML",
    "ALURA",
    "CSS",
    "ONE",
    "PYTHON"
    
];

function palavraAleatoria() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase()
}


const letrasErradas = []
const letrasCorretas = [];