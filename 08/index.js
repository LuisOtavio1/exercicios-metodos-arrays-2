const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasModificadas = frutas.map((frutaAtual, index) => {
    return `${index} - ${frutaAtual[0][0].toUpperCase()}${frutaAtual.slice(1).toLowerCase()}`
});

console.log(frutasModificadas);