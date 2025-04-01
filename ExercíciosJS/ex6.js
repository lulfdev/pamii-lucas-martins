function InverteString() {
    var str = prompt("Digite uma string:");
    var strInvertida = str.split('').reverse().join('');
    alert("A string invertida é: " + strInvertida);
}
