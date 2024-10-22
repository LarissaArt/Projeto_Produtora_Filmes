// Função para mostrar a seção correspondente ao clique do menu
function mostrarSecao(secaoId) {
    // Esconder todas as seções
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    // Mostrar apenas a seção selecionada
    const secaoSelecionada = document.getElementById(secaoId);
    secaoSelecionada.classList.add('ativa');
}


// Carrossel de fotos //

const imagens = document.querySelectorAll('.daniel');
let index = 0;

function mostrarProximaImagem() {
imagens[index].classList.remove('active');
index = (index + 1) % imagens.length;
imagens[index].classList.add('active');
}

setInterval(mostrarProximaImagem, 4000);




// Menu fixo //


let lastScrollTop = 0;
const topMenu = document.getElementById('header-container'); // Menu do topo
const lateralMenu = document.getElementById('menu-lateral'); // Menu lateral

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo - esconde os menus
        topMenu.style.top = '-50px'; 
        lateralMenu.style.left = '-100px'; 
    } else if (currentScroll === 0) {
        // Quando chega ao topo da página - mostra os menus
        topMenu.style.top = '0'; 
        lateralMenu.style.left = '0'; 
    }

    // Atualiza o último valor do scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



    

    


    // Playlist do youtube //


    const apiKey = 'SUA_API_KEY_AQUI'; // Substitua pela sua API Key
const playlistId = 'PLTsEQq4Ps9_osrT2AXCnRjI0UsuXqk8Td'; // ID da sua playlist
const playlistContainer = document.getElementById('playlist');
const player = document.getElementById('player');

// Função para buscar vídeos da playlist
async function fetchPlaylistVideos() {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayVideos(data.items);
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
    }
}

// Função para exibir os vídeos na página
function displayVideos(videos) {
    videos.forEach(video => {
        const videoId = video.snippet.resourceId.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.default.url;

        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <img src="${thumbnail}" alt="${title}" />
            <p>${title}</p>
        `;

        videoElement.addEventListener('click', () => {
            player.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        });

        playlistContainer.appendChild(videoElement);
    });
}

// Chama a função ao carregar a página
fetchPlaylistVideos();


let currentIndex = 0;
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsPerPage = 3; // Número de thumbnails por página
const mainPlayer = document.querySelector('.player-principal'); // Player principal

// Função para mostrar as thumbnails da página atual
function showThumbnails() {
    // Esconde todas as thumbnails
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
        thumbnail.style.display = 'none'; // Esconde as não usadas
    });

    // Mostra apenas as thumbnails da página atual
    for (let i = currentIndex; i < currentIndex + thumbnailsPerPage; i++) {
        if (thumbnails[i]) {
            thumbnails[i].classList.add('active');
            thumbnails[i].style.display = 'inline-block'; // Exibe as atuais
        }
    }

    // Adiciona eventos de clique às thumbnails ativas
    addClickEvents();
}

// Função para mudar de página
function changeThumbnails(direction) {
    // Atualiza o índice atual
    currentIndex += direction * thumbnailsPerPage;

    // Limita o índice dentro dos limites do array
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    if (currentIndex >= thumbnails.length) {
        currentIndex = thumbnails.length - thumbnailsPerPage;
    }

    // Atualiza a visualização das thumbnails
    showThumbnails();
}

// Função para adicionar eventos de clique nas thumbnails ativas
function addClickEvents() {
    const activeThumbnails = document.querySelectorAll('.thumbnail.active');
    activeThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id');
            mainPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            mainPlayer.scrollIntoView({ behavior: 'smooth' }); // Opcional
        });
    });
}

// Inicializa mostrando as thumbnails iniciais
showThumbnails();
