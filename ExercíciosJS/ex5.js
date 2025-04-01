function ContarLetras() {
  var palavra = prompt("Digite uma palavra:");
  var letra = prompt("Digite uma letra:");

  if (letra.length !== 1) {
      alert("Por favor, digite apenas uma letra.");
      return;
  }

  var contador = 0;
  for (var i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
          contador++;
      }
  }

  alert("A letra '" + letra + "' aparece " + contador + " vez(es) na palavra '" + palavra + "'.");
} 

