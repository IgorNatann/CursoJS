function troca2(lista, analise, menor) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[menor];

    lista[analise] = itemAnterior
    lista[menor] = itemAnalise
}

module.exports = troca2;