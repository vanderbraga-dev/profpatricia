document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    // Função para gerenciar envio de mensagens no formulário de contato
    const form = document.querySelector('.form-container form');
    const messageList = document.querySelector('#message-list');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Captura os valores dos campos do formulário
            const nome = document.querySelector('#nome').value;
            const mensagem = document.querySelector('#mensagem').value;

            // Adiciona a mensagem na lista
            const newMessage = document.createElement('li');
            newMessage.innerHTML = `<strong>${nome}:</strong> ${mensagem}`;
            messageList.appendChild(newMessage);

            // Limpa os campos do formulário
            form.reset();
        });
    }

    // Carrossel - Lógica para verificar imagens
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach((img, index) => {
        img.addEventListener('error', () => {
            console.error(`Erro ao carregar a imagem do projeto ${index + 1}`);
        });

        // Log para confirmar que as imagens estão sendo carregadas
        img.addEventListener('load', () => {
            console.log(`Imagem do projeto ${index + 1} carregada com sucesso!`);
        });
    });

    // Modal de sobreposição para o carrossel
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    if (modal && modalImg) {
        window.showModal = (index) => {
            modal.style.display = 'flex';
            modalImg.src = `/static/imagens/projeto${index}.jpg`;
            caption.innerHTML = `Projeto ${index}`;
        };

        // Fecha o modal ao clicar fora da imagem
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Efeito de hover no carrossel para sobreposição centralizada
    const overlay = document.getElementById('image-overlay');
    const overlayImg = document.getElementById('overlay-img');

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', (event) => {
        const item = event.target.closest('.carousel-item img');
        if (item) {
            overlay.style.display = 'flex'; // Exibe a sobreposição
            overlayImg.src = item.src; // Define a imagem ampliada no modal
        }
    });

    carousel.addEventListener('mouseout', () => {
        overlay.style.display = 'none'; // Oculta a sobreposição
        overlayImg.src = ''; // Reseta a imagem
    });
});
