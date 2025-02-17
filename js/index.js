// Definir as variáveis
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const c = document.querySelector('.c');
const sass = document.querySelector('.sass');
const python = document.querySelector('.python');
const material = document.querySelector('.material');
const next = document.querySelector('.next');
const evento = document.querySelector('.evento');

// Adicionar eventos
html.addEventListener('mouseenter', entrarHtml);
html.addEventListener('mouseout', sairHtml);
css.addEventListener('mouseenter', entrarCss);
css.addEventListener('mouseout', sairCss);
js.addEventListener('mouseenter', entrarJs);
js.addEventListener('mouseout', sairJs);
c.addEventListener('mouseenter', entrarC);
c.addEventListener('mouseout', sairC);
sass.addEventListener('mouseenter', entrarSass);
sass.addEventListener('mouseout', sairSass);
python.addEventListener('mouseenter', entrarPython);
python.addEventListener('mouseout', sairPython);
material.addEventListener('mouseenter', entrarMaterial);
material.addEventListener('mouseout', sairMaterial);
next.addEventListener('mouseenter', entrarNext);
next.addEventListener('mouseout', sairNext);

// Funções de texto
function entrarHtml() {
    evento.innerText = 'O HTML é a base de todo sistema web, é com ele que adicionamos em nossa página os Textos, Imagens, Formulários, Vídeos e etc.';
}
function sairHtml() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarCss() {
    evento.innerText = 'Com o CSS adicionamos estilos em nossa página: Cores, Tamanhos, Posicionamentos, Sombras, Grids, Efeitos, Animações, etc.';
}
function sairCss() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarJs() {
    evento.innerText = 'O JavaScript torna o site dinâmico. Ele permite que a página interaja com o usuário, alterando conteúdo, validando formulários, realizando animações, etc.';
}
function sairJs() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarC() {
    evento.innerText = 'O C é uma linguagem de programação amplamente utilizada no desenvolvimento de software, sistemas embarcados e na criação de aplicativos de baixo nível.';
}
function sairC() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarSass() {
    evento.innerText = 'O Sass é um pré-processador CSS que facilita a criação de estilos reutilizáveis e organizados com variáveis, mixins, funções e aninhamento de seletores.';
}
function sairSass() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarPython() {
    evento.innerText = 'O Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. É amplamente usada no desenvolvimento web, automação, inteligência artificial e análise de dados.';
}
function sairPython() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarMaterial() {
    evento.innerText = 'O Material Design é um sistema de design criado pelo Google que proporciona uma experiência consistente e intuitiva em todos os dispositivos e plataformas.';
}
function sairMaterial() {
    evento.innerText = 'Passe o cursor no card para ler';
}
function entrarNext() {
    evento.innerText = 'O Next.js é um framework baseado no React que permite o desenvolvimento de aplicações web com renderização do lado do servidor, geração de sites estáticos e recursos como roteamento dinâmico.';
}
function sairNext() {
    evento.innerText = 'Passe o cursor no card para ler';
}
