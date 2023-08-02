const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);
    let livroMenosPreco = livros[menor];
    console.log('livro atual', livros[menor]);

    livros[atual] = livroMenosPreco
    livros[menor] = livroAtual

}

console.log(livros);