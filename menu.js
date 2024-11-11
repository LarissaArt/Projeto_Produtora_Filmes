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


// Selecionando o iframe do player principal
const mainPlayer = document.querySelector('.player-principal');

// Selecionando as miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');

// Função para mudar o vídeo principal
function changeVideo(videoId) {
    mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

// Adicionando evento de clique nas miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoId = thumbnail.getAttribute('data-video-id');
        changeVideo(videoId);
    });
});

// Navegação de miniaturas (Caso você tenha mais de uma página de miniaturas)
let currentIndex = 0;
const thumbnailsPerPage = 3;  // Número de miniaturas por página

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



// WEB SÉRIE 


