/*Editar scriptAcrion.js*/

// |- Manipulação do layout
//elementos maniplados:
const buttonMenuLeft = document.getElementById('buttonMenuLeft');
const buttonMenuRight = document.getElementById('buttonMenuRight');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
const pHeader = document.getElementById('pHeader')
const buttonHedaer_DR_Child = document.getElementById('buttonHedaer_DR_Child');
const i_DR_Child = document.getElementById("i_DR_Child");


// |- - isMobile
var isMobile = false;
if (navigator.userAgentData && navigator.userAgentData.mobile) {
  isMobile = true;
} else if (/Mobi|Android/i.test(navigator.userAgent)) {
  isMobile = true;
}

if (isMobile) {
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
  myDivRight.classList.add('openMyDivRight');
  checkOrientation();
}
else
  document.getElementById('body').style.setProperty('height', `100vh`);

// |- - Layout inicial
if (window.innerWidth < 600) {
  myDivRight.classList.add('openMyDivRight');
  myDivLeft.classList.add('close');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '100vw');
}
else if (window.innerWidth < 800) {
  myDivLeft.classList.add('close');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');
}
else {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');
}

function checkOrientation() {
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
}

window.addEventListener('orientationchange', checkOrientation);

// Modificar layout da página caso seja redimencionada -> evento(resize)
onresize = (event) => {
  if (isMobile)
    checkOrientation();
  //caso a largura da janela seja menor que 800px (mobile) -> fechar os menus
  if (event.target.innerWidth < 600) {
    if (myDivRight.classList.contains('closeMyDivRight'))
      myDivRight.classList.remove('closeMyDivRight');
    myDivRight.classList.add('openMyDivRight');
    myDivLeft.classList.replace('open', 'close'); //substituir .open por .close
    document.documentElement.style.setProperty('--menuWidth', '100vw'); //variável css (--menuWidth):
  }
  else if (event.target.innerWidth < 900) {
    if (i_DR_Child.classList.contains('rotated'))
      i_DR_Child.classList.remove('rotated');
    if (myDivRight.classList.contains('closeMyDivRight'))
      myDivRight.classList.remove('closeMyDivRight');
    myDivLeft.classList.replace('open', 'close'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
  }
  //caso a largura da janela seja maoir que 800px (monitor) -> abrir os menus
  else {
    if (i_DR_Child.classList.contains('rotated'))
      i_DR_Child.classList.remove('rotated');
    if (myDivRight.classList.contains('closeMyDivRight'))
      myDivRight.classList.remove('closeMyDivRight');
    myDivLeft.classList.replace('close', 'open'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
  }
};

//função para o encerramento da animação (abertura/fechamento) dos menus:
function AnimationEnd(myDivMenu, myButton) {
  // se o menu foi fechado remova .closeDivMenu, se não, remova .openDivMenu:
  (myDivMenu.classList.contains('closeDivMenu')) ?
    myDivMenu.classList.remove('closeDivMenu') :
    myDivMenu.classList.remove('openDivMenu');
  // se o menu possuir .open substitua por .colse, se não, substitua por .open:
  (myDivMenu.classList.contains('open')) ?
    myDivMenu.classList.replace('open', 'close') :
    myDivMenu.classList.replace('close', 'open');
  myButton.disabled = false; //ativando o botão;
}

//função acionada quando os botões dos menus forem clicados
function SliceMenu(myDivMenu1, myDivMenu2) {
  // se o menu estiver aberto feche o menu, se não, abra o menu:
  (myDivMenu1.classList.contains('open')) ?
    myDivMenu1.classList.add('closeDivMenu') :
    myDivMenu1.classList.add('openDivMenu');
}

//eventos de animação para o menu esquerdo:
myDivLeft.addEventListener('animationstart', () => {
  buttonMenuLeft.disabled = true; //desativar botão do menu
});

myDivLeft.addEventListener('animationend', () => {
  AnimationEnd(myDivLeft, buttonMenuLeft); //executar AnimationEnd()
});

//eventos de animação para o menu direito:
myDivRight.addEventListener('animationstart', () => {
  buttonMenuRight.disabled = true; //desativar botão do menu
});

myDivRight.addEventListener('animationend', () => {
  AnimationEnd(myDivRight, buttonMenuRight); //executar AnimationEnd()
});

//evento ao clicar no botão do menu esquerdo:
buttonMenuLeft.addEventListener('click', () => {
  SliceMenu(myDivLeft, myDivRight); //executar SliceMenu()
})

//evento ao clicar no botão do menu direito:
buttonMenuRight.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft); //executar SliceMenu()
})

buttonHedaer_DR_Child.addEventListener('click', () => {
  i_DR_Child.classList.toggle('rotated');
  (myDivRight.classList.contains('openMyDivRight')) ?
    myDivRight.classList.replace('openMyDivRight', 'closeMyDivRight') :
    myDivRight.classList.replace('closeMyDivRight', 'openMyDivRight')
})


//---------------------------------------------------------
// Configurar demais elementos que irão compor a página:
//---------------------------------------------------------
const divCenter = document.getElementById('myDivCenter');
const buttonHome = document.getElementById('buttonHome');
const pHome = document.createElement('p');

// stings para criação de novos botões no menu esquerdo e paineis no conteiner central
const menuIncos = [
  'bi bi-paperclip', //----------Nossos serviços
  'bi bi-bag-check', //----------Nossos planos
  'bi bi-person-hearts', //------Seja nosso parceiro
  'bi bi-envelope-arrow-up', //--Entre em contato
  'bi bi-gear', //---------------Configurações
];

const painelsIds = [
  'servicos',
  'planos',
  'parceiros',
  'contato',
  'config'
];

var buttonsLeftMenu = new Array();
var icons = new Array();
var spans = new Array();
var divCenterContent = new Array();
var divChildTop = new Array();
var divChildTop_h1 = new Array();
var divChildTop_btClose = new Array();


/*criar elementos que serão utilizados na página*/
for (var i = 0; i < menuIncos.length; i++) {
  buttonsLeftMenu.push(document.createElement('button'));
  icons.push(document.createElement('i'));
  spans.push(document.createElement('span'));
  divCenterContent.push(document.createElement('div'));
  divChildTop.push(document.createElement('div'));
  divChildTop_h1.push(document.createElement('h1'));
  divChildTop_btClose.push(document.createElement('button'));
}

// Adicionar propriedades, atributos e conteúdo ao elementos criados:
for (var i = 0; i < menuIncos.length; i++) {
  icons[i].setAttribute('class', menuIncos[i]);
  spans[i].innerText = buttonsName[i];
  divChildTop_h1[i].innerText = buttonsName[i];
  divChildTop_btClose[i].innerHTML = '<i class="bi bi-x"></i>';
  divChildTop[i].setAttribute('class', "divChildTop"); //adicionar a classe .divChildTop
  divCenterContent[i].setAttribute('id', painelsIds[i])
  divCenterContent[i].setAttribute('class', "divCenterContent"); //adicionar a classe .divCenterContent
}

// Atribuir aos elementos os seus respectivos nós:
for (var i = 0; i < menuIncos.length; i++) {
  buttonsLeftMenu[i].append(icons[i]);
  buttonsLeftMenu[i].append(spans[i]);
  myDivLeft.append(buttonsLeftMenu[i]);
  divChildTop[i].append(divChildTop_h1[i]);
  divChildTop[i].append(divChildTop_btClose[i]);
  divCenterContent[i].append(divChildTop[i]);
  divCenter.append(divCenterContent[i]);
}

// ----Criar elementos para o painel inicial (home)---
// Criar elementos para o painel inicial (home)
buttonsLeftMenu.push(buttonHome);
divChildTop.push(document.createElement('div'));
divChildTop_h1.push(document.createElement('h1'));
divCenterContent.push(document.createElement('div'));

// Adicionar propriedades, atributos e conteúdo ao elementos criados:
divChildTop_h1[divChildTop_h1.length - 1].innerText = titulo_Home;
divChildTop[divChildTop.length - 1].setAttribute('class', "divChildTop"); //adicionar a classe .divChildTop
divCenterContent[divCenterContent.length - 1].setAttribute('id', 'home')
divCenterContent[divCenterContent.length - 1].setAttribute('class', "divCenterContent"); //adicionar a classe .divCenterContent
divCenterContent[divChildTop.length - 1].setAttribute('class', "divCenterContent");

// Atribuir aos elementos os seus respectivos nós:
divChildTop[divChildTop.length - 1].append(divChildTop_h1[divChildTop_h1.length - 1]);
divCenterContent[divChildTop.length - 1].append(divChildTop[divChildTop.length - 1]);
divCenter.append(divCenterContent[divChildTop.length - 1]);

/*função responsável por ativar painel relacionado ao botão clicado*/
function activeContentArea(myContentArea) {
  divCenterContent.forEach(element => {
    element.style.setProperty('display', 'none');
  });
  myContentArea.style.setProperty('display', 'flex');
  if (window.innerWidth < 800) {
    if (myDivLeft.classList.contains('open'))
      myDivLeft.classList.add('closeDivMenu');
  }
}

/*Ações dos botões do menu esquerdo e botão home*/
buttonsLeftMenu.forEach(element => {
  element.addEventListener('click', () => {
    if (element === buttonHome) {
      window.location.reload();
    }
    else {
      var i = buttonsLeftMenu.indexOf(element);
      activeContentArea(divCenterContent[i]);
    }
  })
});

//-----manipulação individual dos paineis centrais-----
//pegar variáveis individualmente para manipulação:
var home = divCenterContent[5];
var servicos = divCenterContent[0];
var planos = divCenterContent[1];
var parceiros = divCenterContent[2];
var contato = divCenterContent[3];
var config = divCenterContent[4];

//Painel de configurações: id='config'
var myConfigForm = document.createElement('form');
myConfigForm.setAttribute('id', myConfigForm);
myConfigForm.innerText = 'Escolha seu tema:'
config.append(myConfigForm);
/* Adicionar chekbox às divChildCenter*/
myThemes.forEach(theme => {
  myConfigForm.innerHTML += `
  <label>
    <input type="radio" name="options" value=${theme}>
    ${theme}
  </label>
  `;
});

/*Ações dos botões divChildTop_btClose*/
divChildTop_btClose.forEach(element => {
  element.addEventListener('click', () => {
    var i = divChildTop_btClose.indexOf(element);
    divCenterContent[i].style.setProperty('display', 'none');
    divCenterContent[divCenterContent.length - 1].style.setProperty('display', 'flex');
  })
});


//iniciar com painel home aberto:
activeContentArea(divCenterContent[divCenterContent.length - 1]);