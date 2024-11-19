// Seleciona os elementos necessários
const botao = document.getElementById('botao');
const lampada = document.getElementById('lampada');
const statusTexto = document.getElementById('status');

// Função para alternar o estado da Lâmpada
function alternarLampada() {
    if (botao.textContent == 'Ligar') {
        // Muda para o estado "acesso"
        lampada.src = 'ligado.png'; // Caminho da imagem acesa
        botao.textContent ='Desligar'; // MUda o texto do botão para "Apagar"
        statusTexto.textContent = 'Aceso'; // Muda o status para "Aceso"
        statusTexto.style.color = 'grey'; // Muda a cor do texto para Amarelo
        statusTexto.style.fontSize = '30px';

    } else {
        // Muda para o estado"apagado"
        lampada.src = 'apagado.png'; // Caminho da imagem, apagada
        botao.textContent = 'Ligar'; // Muda o texto do botão para "Ligar"
        statusTexto.textContent = 'Apagado'; // Muda o status para "Apagado"
        statusTexto.style.fontSize = '30px';
        statusTexto.style.color = 'rgb(126, 125, 125)'; // Muda a cor do texto para cinza 
    }
}
// Adiciona o evento de clique ao botão
botao.addEventListener('click', alternarLampada);