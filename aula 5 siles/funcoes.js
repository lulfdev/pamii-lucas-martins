function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao('Leandro'));
//Utilizando a interface usuário fica assim
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Nome: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos']);
