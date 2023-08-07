const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function localizarLivro(biblioteca, livro){
    const posicaoLivro = biblioteca.indexOf(livro);

    if(posicaoLivro != -1) {
        return `O livro está na posição ${posicaoLivro}`;
    } else {
        return `Não temos esse livro`;
    }
};

console.log(localizarLivro(livros, nomeDoLivro));


