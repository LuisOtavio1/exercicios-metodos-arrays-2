const numeros = [10, 987, -886, 0, 12, 199, -45, -67];


const numerosPositivo = numeros.filter((numeroAtual) => {
    return numeroAtual > 0;
})

console.log(numerosPositivo);