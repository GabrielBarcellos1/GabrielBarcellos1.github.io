// EVENTO DE SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
});
//HOME
ScrollReveal().reveal('.name-scroll', { delay: 200 });
ScrollReveal().reveal('.about-scroll', { delay: 200 });
ScrollReveal().reveal('.you-about', { delay: 300 });
ScrollReveal().reveal('.dev', { delay: 200 });

//ABOUT
ScrollReveal().reveal('.p1', { delay: 400 });
ScrollReveal().reveal('.p2', { delay: 500 });
ScrollReveal().reveal('.p3', { delay: 600 });
ScrollReveal().reveal('.p4', { delay: 700 });

//PROJETOS
ScrollReveal().reveal('.box-scroll', { delay: 100 });
ScrollReveal().reveal('.box-scroll1', { delay: 200 });
ScrollReveal().reveal('.box-scroll2', { delay: 400 });
ScrollReveal().reveal('.box-scroll3', { delay: 600 });
ScrollReveal().reveal('.box-scroll4', { delay: 800 });
ScrollReveal().reveal('.box-scroll5', { delay: 1000 });
ScrollReveal().reveal('.box-scroll6', { delay: 1200 });
ScrollReveal().reveal('.box-scroll7', { delay: 1400 });
ScrollReveal().reveal('.box-scroll8', { delay: 1600 });

//HABILIDADES
ScrollReveal().reveal('.eventos', { delay: 100 });
ScrollReveal().reveal('.html', { delay: 300 });
ScrollReveal().reveal('.css', { delay: 500 });
ScrollReveal().reveal('.js', { delay: 700 });
ScrollReveal().reveal('.c', { delay: 900 });
ScrollReveal().reveal('.sass', { delay: 1100 });
ScrollReveal().reveal('.python', { delay: 1300 });
ScrollReveal().reveal('.material', { delay: 1500 });
ScrollReveal().reveal('.next', { delay: 1700 });

//SERVIÇOS
ScrollReveal().reveal('.services-h2', { delay: 100 });
ScrollReveal().reveal('.box-services1', { delay: 200 });
ScrollReveal().reveal('.box-services2', { delay: 400 });
ScrollReveal().reveal('.box-services3', { delay: 600 });
ScrollReveal().reveal('.box-services4', { delay: 800 });

//CONTATOS
ScrollReveal().reveal('.sociais-scroll', { delay: 100 });
ScrollReveal().reveal('.sociais-scroll1', { delay: 200 });
ScrollReveal().reveal('.sociais-scroll2', { delay: 300 });
ScrollReveal().reveal('.sociais-scroll3', { delay: 400 });
ScrollReveal().reveal('.sociais-scroll4', { delay: 500 });
ScrollReveal().reveal('.sociais-scroll5', { delay: 600 });
ScrollReveal().reveal('.sociais-scroll6', { delay: 700 });

// DECLARANDO AS VARIÁVEIS DOS BOXES
let html = document.querySelector('.html');
let css = document.querySelector('.css');
let js = document.querySelector('.js');
let c = document.querySelector('.c');
let sass = document.querySelector('.sass');
let python = document.querySelector('.python');
let material = document.querySelector('.material');
let next = document.querySelector('.next');
let evento = document.querySelector('.evento');

// NOVAS VARIÁVEIS PARA OS NOVOS ELEMENTOS
let helpdesk = document.querySelector('#helpdesk');
let kaspersky = document.querySelector('#kaspersky');
let crowdstrike = document.querySelector('#crowdstrike');
let zohoassist = document.querySelector('#zohoassist');
let managementengine = document.querySelector('#managementengine');
let activedirectory = document.querySelector('#activedirectory');
let office365 = document.querySelector('#office365');
let azure = document.querySelector('#azure');

// ADICIONANDO EVENTOS
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
helpdesk.addEventListener('mouseenter', entrarHelpdesk);  // Novo evento
helpdesk.addEventListener('mouseout', sairHelpdesk);  // Novo evento
kaspersky.addEventListener('mouseenter', entrarKaspersky);  // Novo evento
kaspersky.addEventListener('mouseout', sairKaspersky);  // Novo evento
crowdstrike.addEventListener('mouseenter', entrarCrowdstrike);  // Novo evento
crowdstrike.addEventListener('mouseout', sairCrowdstrike);  // Novo evento
zohoassist.addEventListener('mouseenter', entrarZohoassist);  // Novo evento
zohoassist.addEventListener('mouseout', sairZohoassist);  // Novo evento
managementengine.addEventListener('mouseenter', entrarManagementengine);  // Novo evento
managementengine.addEventListener('mouseout', sairManagementengine);  // Novo evento
activedirectory.addEventListener('mouseenter', entrarActivedirectory);  // Novo evento
activedirectory.addEventListener('mouseout', sairActivedirectory);  // Novo evento
office365.addEventListener('mouseenter', entrarOffice365);  // Novo evento
office365.addEventListener('mouseout', sairOffice365);  // Novo evento
azure.addEventListener('mouseenter', entrarAzure);  // Novo evento
azure.addEventListener('mouseout', sairAzure);  // Novo evento

// DECLARANDO FUNCTIONS

// Funções para os novos eventos
function entrarHelpdesk() {
  evento.innerText = 'HelpDesk é um serviço de suporte ao usuário, oferecendo soluções para problemas técnicos e dúvidas sobre sistemas e software.';
}
function sairHelpdesk() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarKaspersky() {
  evento.innerText = 'Kaspersky é um software de segurança que oferece proteção contra vírus, malware, ransomware e outras ameaças cibernéticas.';
}
function sairKaspersky() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarCrowdstrike() {
  evento.innerText = 'CrowdStrike é uma plataforma de segurança cibernética baseada em nuvem, focada em proteger endpoints e fornecer detecção de ameaças em tempo real.';
}
function sairCrowdstrike() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarZohoassist() {
  evento.innerText = 'Zoho Assist é uma ferramenta de suporte remoto que permite conectar-se a computadores e fornecer assistência técnica à distância.';
}
function sairZohoassist() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarManagementengine() {
  evento.innerText = 'ManagementEngine é uma solução de gestão de TI que oferece automação de processos, gerenciamento de ativos e monitoramento de infraestrutura.';
}
function sairManagementengine() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarActivedirectory() {
  evento.innerText = 'Active Directory é um serviço de diretório que facilita a gestão de usuários, computadores e outros recursos em redes corporativas.';
}
function sairActivedirectory() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarOffice365() {
  evento.innerText = 'Office 365 é uma suíte de aplicativos de produtividade da Microsoft, incluindo Word, Excel, PowerPoint, e serviços como o OneDrive e Outlook.';
}
function sairOffice365() {
  evento.innerText = "passe o cursor no card para ler";
}
function entrarAzure() {
  evento.innerText = 'Azure é uma plataforma de nuvem da Microsoft que oferece serviços de computação, armazenamento, redes e muito mais, com foco em soluções empresariais.';
}
function sairAzure() {
  evento.innerText = "passe o cursor no card para ler";
}


