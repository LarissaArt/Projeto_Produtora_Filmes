// Função para mostrar a seção correspondente ao clique do menu
function mostrarSecao(secaoId) {
    // Esconder todas as seções
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    // Mostrar apenas a seção selecionada
    const secaoSelecionada = document.getElementById(secaoId);
    if (secaoSelecionada) {
        secaoSelecionada.classList.add('ativa');
    }
}

// Exemplo de como chamar a função ao clicar em links do menu
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => mostrarSecao(item.dataset.secaoId));
});

// Carrossel de fotos
const imagens = document.querySelectorAll('.daniel img');
let index = 0;

function mostrarProximaImagem() {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
}

setInterval(mostrarProximaImagem, 4000);

// Menu fixo
let lastScrollTop = 0;
const topMenu = document.getElementById('header-container'); // Menu do topo

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo - esconde os menus
        topMenu.style.top = '-100px';
    } else if (currentScroll === 0) {
        // Quando chega ao topo da página - mostra os menus
        topMenu.style.top = '0';
    }

    // Atualiza o último valor do scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});








// CURTAS E WEB


// Função para configurar os vídeos e miniaturas
function initializeVideoSection(playerClass, thumbnailsContainerId) {
    const player = document.querySelector(playerClass);  // Player principal
    const thumbnails = document.querySelectorAll(`${thumbnailsContainerId} .thumbnail`);  // Miniaturas
    let currentIndex = 0;  // Índice atual das miniaturas
    const thumbnailsPerPage = 3;  // Número de miniaturas por página

    // Função para mudar o vídeo no player
    function changeVideo(videoId) {
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    // Adiciona o evento de clique para as miniaturas
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id');
            changeVideo(videoId);  // Chama a função para alterar o vídeo no player
        });
    });

    // Função para exibir as miniaturas da página atual
    function showThumbnails() {
        thumbnails.forEach((thumbnail, index) => {
            if (index >= currentIndex && index < currentIndex + thumbnailsPerPage) {
                thumbnail.style.display = 'inline-block';  // Mostrar a miniatura
            } else {
                thumbnail.style.display = 'none';  // Esconder a miniatura
            }
        });
    }

    // Função para navegar entre as páginas de miniaturas
    function changeThumbnails(direction) {
        currentIndex += direction * thumbnailsPerPage;

        // Limitar a navegação dentro do número de miniaturas
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= thumbnails.length) currentIndex = thumbnails.length - thumbnailsPerPage;

        showThumbnails();
    }

    // Exibir as miniaturas na página inicial
    showThumbnails();

    // Adicionando os eventos de navegação nos botões
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (prevButton) {
        prevButton.addEventListener('click', () => changeThumbnails(-1));  // Navegar para a esquerda
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => changeThumbnails(1));  // Navegar para a direita
    }

    // Retornar a função de navegação de miniaturas, caso precise
    return {
        changeThumbnails
    };
}

// Inicializar a primeira seção
initializeVideoSection('.player-principal', '#thumbnails-primeira-secao');

// Inicializar a segunda seção
initializeVideoSection('.player-principal-2', '#thumbnails-outra-secao');






// SESSÃO FILMOGRAFIA
const modal = document.getElementById("movieModal");
const span = document.getElementsByClassName("close")[0];

function showModal(title, description, image) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalImage").src = image;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// contato


// Função para mostrar a seção desejada e rolar para ela
function mostrarSecao(secaoId) {
    // Oculta todas as seções primeiro
    const todasAsSecoes = document.querySelectorAll('.secao');
    todasAsSecoes.forEach(secao => {
        secao.style.display = 'none';
    });

    // Exibe a seção que o usuário clicou
    const secao = document.getElementById(secaoId);
    secao.style.display = 'block';

    // Rola suavemente até a seção visível
    secao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Função para rolar para a seção de Contato dentro da Home
function rolarParaContato() {
    // Exibe a Home primeiro
    mostrarSecao('secao1');  // Aqui você exibe a Home, mesmo se não estiver visível

    // Após um tempo de delay, rola para a seção de Contato
    setTimeout(() => {
        const secaoContato = document.getElementById('secaocontato');
        secaoContato.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);  // Delay para garantir que a Home foi exibida
}

// Inicializa a navegação com a primeira seção (por exemplo, Home)
document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('secao1'); // Por padrão, a Home aparece quando a página é carregada
});


