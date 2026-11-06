btnComparar.addEventListener('click', function() {
            // Obtém os valores dos inputs e converte para número
            const num1 = parseFloat(document.getElementById('numero1').value);
            const num2 = parseFloat(document.getElementById('numero2').value);

            // Valida se os campos foram preenchidos corretamente
            if (isNaN(num1) || isNaN(num2)) {
                tagResultado.textContent = 'Por favor, insira números válidos nos dois campos.';
                return;
            }

            // Lógica para verificar qual número é maior
            if (num1 > num2) {
                tagResultado.textContent = `O maior número é ${num1}.`;
            } else if (num2 > num1) {
                tagResultado.textContent = `O maior número é ${num2}.`;
            } else {
                tagResultado.textContent = 'Os dois números são iguais!';
            }
        });
