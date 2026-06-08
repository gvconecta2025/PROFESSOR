# Portfólio Institucional - Professor Luiz Henrique

Este projeto foi desenvolvido utilizando a arquitetura Vanilla (HTML5, CSS3, JS Puro) para garantir altíssima performance, SEO otimizado e fácil manutenção. 

## Como rodar o projeto localmente

Devido à política de segurança dos navegadores (CORS), requisições `fetch()` para arquivos locais (`data.json`) não funcionam se você apenas abrir o `index.html` com um clique duplo no arquivo. É necessário usar um servidor local simples.

### Opção 1: Usando VS Code (Recomendado)
1. Abra a pasta `/portfolio-professor` no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Usando Python
Se você possui Python instalado no seu computador, abra o terminal na pasta do projeto e digite:
- Python 3: `python -m http.server 8000`
- Acesse no navegador: `http://localhost:8000`

## Como editar as informações
Para alterar textos, adicionar novos livros, prêmios ou serviços, basta editar o arquivo `/data/data.json`. A interface se reconstruirá automaticamente com base nestes dados, respeitando o modelo padrão de design.
