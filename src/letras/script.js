document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.text-container');
    const textElement = document.getElementById('text');
    const text = "  >> PRECISO DE AJUDA MEU NOME É TOBIAS HENRIQUE CAIO CODINOME ARROZ DA MAMAE ESPERO QUE RECEBAM MEU PENDRIVE PRECISO DA AJUDA DO GRUPO OS INTOCÁVEIS";
    
    textElement.textContent = ''; 
    
    function showTextLetterByLetter(index) {
        if (index < text.length) {
            textElement.textContent += text[index];
            textContainer.style.opacity = '1'; 
            index++;
            setTimeout(() => showTextLetterByLetter(index), 150);
        }
    }
    showTextLetterByLetter(0); 
});
