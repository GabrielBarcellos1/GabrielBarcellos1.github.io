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

//ADICIONANDO EVENTOS
html.addEventListener('mouseenter', entrarHtml)
html.addEventListener('mouseout', sairHtml)
css.addEventListener('mouseenter', entrarCss)
css.addEventListener('mouseout', sairCss)
js.addEventListener('mouseenter', entrarJs)
js.addEventListener('mouseout', sairJs)
c.addEventListener('mouseenter', entrarC)
c.addEventListener('mouseout', sairC)
sass.addEventListener('mouseenter', entrarSass)
sass.addEventListener('mouseout', sairSass)
python.addEventListener('mouseenter', entrarPython)
python.addEventListener('mouseout', sairPython)
material.addEventListener('mouseenter', entrarMaterial)
material.addEventListener('mouseout', sairMaterial)
next.addEventListener('mouseenter', entrarNext)
next.addEventListener('mouseout', sairNext)

//DECLARANDO FUNCTIONS
function entrarHtml(){
evento.innerText = 'teste123'
}
function sairHtml(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarCss(){
evento.innerText = 'Com o CSS adicionamos estilos em nossa página: Cores, Tamanhos, Posicionamentos Sombras, Grids, Efeitos, Animações e etc.'
}
function sairCss(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarJs(){
evento.innerText = 'Com o Javascript as possibilidades são imensas, validar formularios, processar dados, manipular elementos na tela, consultar APIs, etc.'
}
function sairJs(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarC(){
evento.innerText = 'O React é uma biblioteca Javascript desenvolvida pelos engenheiros do Facebook com o foco em criar interfaces de usuário. É atualmente a biblioteca mais requisitada no mercado.'
}
function sairC(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarSass(){
evento.innerText = 'O SASS é uma linguagem de extensão ao CSS, com ele vamos simplificar a escrita de CSS, além de ganhar mais dinamismo em nossas folhas de estil'
}
function sairSass(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarPython(){
evento.innerText = 'Redux é uma biblioteca JavaScript para gerenciar o estado da aplicação é similar e inspirada pela arquitetura Flux do Facebook, ela pode ser utilizada com o React ou outras bibliotecas JavaScript.'
}
function sairPython(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarMaterial(){
evento.innerText = 'Biblioteca de componentes React para um desenvolvimento ágil e fácil. O Material.ui é usado por grande empresas como Nasa, Walmart, Netflix, Amazon, Spotify, entre outras.'
}
function sairMaterial(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarNext(){
evento.innerText = 'O Next.js é o framework mais adotado pela comunidade do React. O seu maior objetivo é tornar nossa aplicação React mais performática e permitir a indexação do conteúdo da página pelos motores de busca.'
}
function sairNext(){
evento.innerText = "passe o cursor no card para ler"
}
