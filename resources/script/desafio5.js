function mudarCorTexto() {
      const corSelecionada = document.getElementById('selectCor').value;
      const texto = document.getElementById('texto');

      if (corSelecionada === 'red') {
        texto.style.color = 'red';
      } else if (corSelecionada === 'blue') {
        texto.style.color = 'blue';
      } else if (corSelecionada === 'green') {
        texto.style.color = 'green';
      } else {
        texto.style.color = 'black'; 
      }
    }
