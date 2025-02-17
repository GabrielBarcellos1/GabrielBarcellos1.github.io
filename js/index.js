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
evento.innerText = 'O HelpDesk é responsável por fornecer suporte técnico e solucionar problemas de hardware e software para os usuários finais, garantindo a continuidade do funcionamento das operações de TI.'
}
function sairHtml(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarCss(){
evento.innerText = 'Kaspersky é um software de segurança cibernética que oferece proteção contra vírus, malware, ransomwares e outras ameaças digitais, garantindo a segurança de dispositivos e dados.'
}
function sairCss(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarJs(){
evento.innerText = 'CrowdStrike é uma plataforma de segurança baseada em nuvem que protege dispositivos e redes contra ameaças cibernéticas avançadas, como ataques de malware e ransomware, utilizando inteligência artificial e análise em tempo real.'
}
function sairJs(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarC(){
evento.innerText = 'ZohoAssist é uma ferramenta de suporte remoto que permite aos técnicos acessarem e resolverem problemas nos dispositivos dos usuários de forma segura, facilitando o atendimento e a assistência técnica à distância.'
}
function sairC(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarSass(){
evento.innerText = 'ManagementEngine é um conjunto de ferramentas de gerenciamento de TI que oferece soluções para monitoramento de rede, gerenciamento de dispositivos, automação de tarefas e segurança, com foco na eficiência operacional.'
}
function sairSass(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarPython(){
evento.innerText = 'Active Directory é um serviço de diretório da Microsoft que facilita a administração de usuários e dispositivos em uma rede, garantindo a autenticação e controle de acesso com base em políticas organizacionais.'
}
function sairPython(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarMaterial(){
evento.innerText = 'Office 365 é uma plataforma de produtividade em nuvem da Microsoft que oferece ferramentas como Word, Excel, PowerPoint e Outlook, além de armazenamento em nuvem e colaboração em tempo real.'
}
function sairMaterial(){
evento.innerText = "Passe o cursor no card para ler"
}
function entrarNext(){
evento.innerText = 'Azure é a plataforma de computação em nuvem da Microsoft, que oferece serviços de infraestrutura, desenvolvimento de aplicativos, armazenamento e inteligência artificial, ajudando empresas a gerenciar e escalar suas operações na nuvem.'
}
function sairNext(){
evento.innerText = "Passe o cursor no card para ler"
}
