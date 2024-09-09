import * as scriptTheme from './scriptTheme.js';

// |- Manipulação do layout
//elementos maniplados:
const buttonMenuLeft = document.getElementById('buttonMenuLeft');
const buttonMenuRight = document.getElementById('buttonMenuRight');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
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
const buttonHome = document.getElementById('buttonHome');

var buttonsLeftMenu = new Array();
var divCenterContent = new Array();
var btClosePanel = new Array();

buttonsLeftMenu.push(document.getElementById('btPanel1'));
buttonsLeftMenu.push(document.getElementById('btPanel2'));
buttonsLeftMenu.push(document.getElementById('btPanel3'));
buttonsLeftMenu.push(document.getElementById('btPanel4'));
buttonsLeftMenu.push(document.getElementById('btPanel5'));
buttonsLeftMenu.push(document.getElementById('buttonHome'));

divCenterContent.push(document.getElementById('panel1'));
divCenterContent.push(document.getElementById('panel2'));
divCenterContent.push(document.getElementById('panel3'));
divCenterContent.push(document.getElementById('panel4'));
divCenterContent.push(document.getElementById('panel5'));
divCenterContent.push(document.getElementById('panelHome'));

btClosePanel.push(document.getElementById('btColse1'));
btClosePanel.push(document.getElementById('btColse2'));
btClosePanel.push(document.getElementById('btColse3'));
btClosePanel.push(document.getElementById('btColse4'));
btClosePanel.push(document.getElementById('btColse5'));

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
var panelHome = divCenterContent[5];
var servicos = divCenterContent[0];
var planos = divCenterContent[1];
var parceiros = divCenterContent[2];
var contato = divCenterContent[3];
var panelConfig = divCenterContent[4];


/*Ações dos botões divChildTop_btClose*/
btClosePanel.forEach(element => {
  element.addEventListener('click', () => {
    var i = btClosePanel.indexOf(element);
    divCenterContent[i].style.setProperty('display', 'none');
    panelHome.style.setProperty('display', 'flex');
  })
});

//iniciar com painel home aberto:
activeContentArea(panelHome);

// Ação dos botões de mudança de tema:
const radioButtonsThemes = document.querySelectorAll('input[name="options"]');
radioButtonsThemes.forEach(radio => {
  radio.addEventListener('click', function () {
    if (this.value) {
      switch (this.value) {
        case 'dark': {
          scriptTheme.setMyTheme(dark(), 'dark');
          break;
        }
        case 'light': {
          scriptTheme.setMyTheme(light(), 'light');
          break;
        }
        case 'solid_dark': {
          scriptTheme.setMyTheme(solidDark(), 'solid_dark');
          break;
        }
        case 'solid_light': {
          scriptTheme.setMyTheme(solidLight(), 'solid_light');
          break;
        }
      }
    }
  });
});

scriptTheme.getTheme();