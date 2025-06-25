/*
CRUD
Create - post - insert into
Read - get - select
Update - put - update
Delete - delete - delete from
*/
 
/*
Tabela: livros
Colunas: id, titulo, autor, ano_publicacao, genero, url_capa
Exemplo de dados:
| id | nome                   | autor             | ano          | genero       | url_capa                     
| 1  | Ainda estou aqui       | Maria Clara       | 2025         | Drama        | https://example.com/imagem-01.jpg 
| 2  | Harry Potter e a Pedra | Rodrigo           | 2010          | Fantasia     | https://example.com/imagem-02.jpg 
| 3  | O Senhor das Armas           | Nicolas Cage      | 2023          | Ação         | https://example.com/imagem-03.jpg 
*/

function listarLivros() {
    const livros = [
        {
            id: 1,
            nome: "Ainda estou aqui",
            autor: "Maria clara",
            ano: 2025,
            genero: "Drama",
            capa_url: "https://example.com/imagem-01.jpg "
        },

        {
            id: 2,
            nome: "Harry Potter e a PEdra Filosofal",
            autor: "Rodrigo",
            ano: 2010,
            genero: "Fantasia",
            capa_url: "https://example.com/imagem-02.jpg "
        },

        {
            id: 3,
            nome: "O senhor das Armas",
            autor: "Nicolas Cage",
            ano: 2023,
            genero: "Ação",
            capa_url: "https://example.com/imagem-03.jpg "
        }
    ]

    return livros;
}

module.exports = {
    listarLivros
}