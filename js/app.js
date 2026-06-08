document.addEventListener("DOMContentLoaded", () => {
    // Inicializar ícones do Lucide
    lucide.createIcons();

    // Carregar dados dinamicamente
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            renderHero(data.professor);
            renderTrustBar(data.trustBar);
            renderTimeline(data.timeline);
            renderLibrary(data.livros);
            renderServices(data.servicos);
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});

function renderHero(professor) {
    const container = document.getElementById('hero-text-container');
    const image = document.getElementById('hero-image');

    container.innerHTML = `
        <h1>${professor.nome}</h1>
        <p class="subtitle">${professor.titulo} | ${professor.localizacao}</p>
        <p>${professor.bio}</p>
    `;
    
    image.src = professor.foto;
}

function renderTrustBar(trustItems) {
    const container = document.getElementById('trust-container');
    container.innerHTML = trustItems.map(item => `<div>${item}</div>`).join('');
}

function renderTimeline(timeline) {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timeline.map(item => `
        <article class="timeline-item">
            <span class="timeline-year">${item.ano}</span>
            <h3 class="timeline-title">${item.marco}</h3>
            <p>${item.descricao}</p>
        </article>
    `).join('');
}

function renderLibrary(livros) {
    const container = document.getElementById('library-container');
    container.innerHTML = livros.map(livro => `
        <article class="book-card">
            <img class="book-cover" src="${livro.capa}" alt="Capa do livro ${livro.titulo}" loading="lazy">
            <div class="book-info">
                <h3 class="book-title">${livro.titulo}</h3>
                <p class="book-synopsis">${livro.sinopse}</p>
                <a href="${livro.link}" class="btn-link" aria-label="Conheça a obra ${livro.titulo}">Conheça a obra</a>
            </div>
        </article>
    `).join('');
}

function renderServices(servicos) {
    const container = document.getElementById('services-container');
    // Requer Lucide Icons no HTML para renderizar os ícones
    container.innerHTML = servicos.map(servico => `
        <article class="service-card">
            <i data-lucide="${servico.icone}" class="service-icon" width="48" height="48"></i>
            <h3>${servico.nome}</h3>
            <p>${servico.descricao}</p>
        </article>
    `).join('');
    
    // Recriar ícones para os elementos recém-injetados no DOM
    lucide.createIcons();
}
