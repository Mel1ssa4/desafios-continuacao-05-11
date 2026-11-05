function somar() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);

      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
        return;
      }

      const soma = num1 + num2;
      document.getElementById('resultado').innerText = `Resultado: ${soma}`;
    }