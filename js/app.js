document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            renderEditorialHero(data.professor, data.trustBar);
            renderTimeline(data.timeline);
            renderLibrary(data.livros);
            renderServices(data.servicos);
        })
        .catch(error => console.error("Erro:", error));
});

function renderEditorialHero(professor, tags) {
    const container = document.getElementById('hero-container');
    
    // Pegando as duas primeiras tags do TrustBar para simular a categoria do artigo
    const categoryTags = `${tags[0]} • ${tags[2]}`.toUpperCase();

    container.innerHTML = `
        <div class="editorial-tags">${categoryTags}</div>
        <h1 class="editorial-title">${professor.nome}</h1>
        <p class="editorial-subtitle">${professor.titulo}</p>
        
        <div class="author-block">
            <img src="${professor.foto}" alt="Foto ${professor.nome}" class="author-photo">
            <div class="author-meta">
                <p class="author-name">Por <strong>${professor.nome}</strong></p>
                <p class="author-role">Especialista Ativo | ${professor.localizacao}</p>
            </div>
        </div>
        
        <p class="content-text">${professor.bio}</p>
    `;
}

function renderTimeline(timeline) {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timeline.map(item => `
        <div class="timeline-item">
            <span class="timeline-year">${item.ano}</span>
            <h3 class="timeline-title">${item.marco}</h3>
            <p>${item.descricao}</p>
        </div>
    `).join('');
}

function renderLibrary(livros) {
    const container = document.getElementById('library-container');
    container.innerHTML = livros.map(livro => `
        <div class="book-item">
            <img class="book-cover" src="${livro.capa}" alt="${livro.titulo}">
            <div>
                <h3 class="book-title">${livro.titulo}</h3>
                <p>${livro.sinopse}</p>
            </div>
        </div>
    `).join('');
}

function renderServices(servicos) {
    const container = document.getElementById('services-container');
    container.innerHTML = servicos.map(servico => `
        <div class="service-item">
            <i data-lucide="${servico.icone}" style="color: var(--color-brand-blue); width: 32px; height: 32px; flex-shrink: 0;"></i>
            <div>
                <h3 class="service-title">${servico.nome}</h3>
                <p>${servico.descricao}</p>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}
