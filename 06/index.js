const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];




const cidadesFiltradas = cidades.filter((cidade) => {
    return cidade.length < 9;
});

console.log(cidadesFiltradas);

console.log(cidadesFiltradas.join(", "));