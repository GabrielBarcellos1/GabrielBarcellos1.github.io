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
helpdesk.addEventListener('mouseenter', () => evento.innerText = 'HelpDesk é um serviço de suporte ao usuário, oferecendo soluções para problemas técnicos e dúvidas sobre sistemas e software.');
helpdesk.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

kaspersky.addEventListener('mouseenter', () => evento.innerText = 'Kaspersky é um software de segurança que oferece proteção contra vírus, malware, ransomware e outras ameaças cibernéticas.');
kaspersky.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

crowdstrike.addEventListener('mouseenter', () => evento.innerText = 'CrowdStrike é uma plataforma de segurança cibernética baseada em nuvem, focada em proteger endpoints e fornecer detecção de ameaças em tempo real.');
crowdstrike.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

zohoassist.addEventListener('mouseenter', () => evento.innerText = 'Zoho Assist é uma ferramenta de suporte remoto que permite conectar-se a computadores e fornecer assistência técnica à distância.');
zohoassist.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

managementengine.addEventListener('mouseenter', () => evento.innerText = 'ManagementEngine é uma solução de gestão de TI que oferece automação de processos, gerenciamento de ativos e monitoramento de infraestrutura.');
managementengine.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

activedirectory.addEventListener('mouseenter', () => evento.innerText = 'Active Directory é um serviço de diretório que facilita a gestão de usuários, computadores e outros recursos em redes corporativas.');
activedirectory.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

office365.addEventListener('mouseenter', () => evento.innerText = 'Office 365 é uma suíte de aplicativos de produtividade da Microsoft, incluindo Word, Excel, PowerPoint, e serviços como o OneDrive e Outlook.');
office365.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");

azure.addEventListener('mouseenter', () => evento.innerText = 'Azure é uma plataforma de nuvem da Microsoft que oferece serviços de computação, armazenamento, redes e muito mais, com foco em soluções empresariais.');
azure.addEventListener('mouseout', () => evento.innerText = "Passe o cursor no card para ler");
