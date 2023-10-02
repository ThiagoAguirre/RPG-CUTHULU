document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.text-container');
    const textElement = document.getElementById('text');
    const text = ">> PORNOHUB É O MELHOR GOSTO DE MULHER D+++++++++++";
    
    textElement.textContent = ''; // Limpa o conteúdo do elemento
    
    // Função para mostrar o texto letra por letra
    function showTextLetterByLetter(index) {
        if (index < text.length) {
            textElement.textContent += text[index];
            textContainer.style.opacity = '1'; // Mostra o texto gradualmente
            index++;
            setTimeout(() => showTextLetterByLetter(index), 100); // Delay de 100ms entre as letras
        }
    }
    
    showTextLetterByLetter(0); // Inicia o processo de exibir letra por letra
});
