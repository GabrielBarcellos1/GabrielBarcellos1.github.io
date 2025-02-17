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
  evento.innerText = "passe o cursor no card para ler"
}
function entrarHelpdesk(){
  evento.innerText = 'HelpDesk é um serviço de suporte ao usuário, oferecendo soluções para problemas técnicos e dúvidas sobre sistemas e software.'
}
function sairHelpdesk(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarKaspersky(){
  evento.innerText = 'Kaspersky é um software de segurança que oferece proteção contra vírus, malware, ransomware e outras ameaças cibernéticas.'
}
function sairKaspersky(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarCrowdstrike(){
  evento.innerText = 'CrowdStrike é uma plataforma de segurança cibernética baseada em nuvem, focada em proteger endpoints e fornecer detecção de ameaças em tempo real.'
}
function sairCrowdstrike(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarZohoassist(){
  evento.innerText = 'Zoho Assist é uma ferramenta de suporte remoto que permite conectar-se a computadores e fornecer assistência técnica à distância.'
}
function sairZohoassist(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarManagementengine(){
  evento.innerText = 'ManagementEngine é uma solução de gestão de TI que oferece automação de processos, gerenciamento de ativos e monitoramento de infraestrutura.'
}
function sairManagementengine(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarActivedirectory(){
  evento.innerText = 'Active Directory é um serviço de diretório que facilita a gestão de usuários, computadores e outros recursos em redes corporativas.'
}
function sairActivedirectory(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarOffice365(){
  evento.innerText = 'Office 365 é uma suíte de aplicativos de produtividade da Microsoft, incluindo Word, Excel, PowerPoint, e serviços como o OneDrive e Outlook.'
}
function sairOffice365(){
  evento.innerText = "passe o cursor no card para ler"
}
function entrarAzure(){
  evento.innerText = 'Azure é uma plataforma de nuvem da Microsoft que oferece serviços de computação, armazenamento, redes e muito mais, com foco em soluções empresariais.'
}
function sairAzure(){
  evento.innerText = "passe o cursor no card para ler"
