const botao = document.getElementById('btnMudarCor');

botao.addEventListener('click', function() {
           
const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = corAleatoria;        
});
    
