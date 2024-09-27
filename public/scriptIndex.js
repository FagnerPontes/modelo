import { Clipboard } from './scriptClipboard.js';
import * as scriptTheme from './scriptTheme.js';

scriptTheme.getTheme();

// |- Manipulação do layout
//elementos maniplados:
const divLoading = document.getElementById('divLoading');
const myBody = document.getElementById('body');
const myHeader = document.getElementById('myHeader');
const btMenuLeft = document.getElementById('btMenuLeft');
const btMenuRight = document.getElementById('btMenuRight');
const myDivContainer = document.getElementById('myDivContainer');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
const myFooter = document.getElementById('myFooter');
const btColseMl = document.getElementById('btColseMl');
const btColseMr = document.getElementById('btColseMr');

// |- - isMobile
const getMobile = () => {
  if (navigator.userAgentData && navigator.userAgentData.mobile) {
    return true;
  } else if (/Mobi|Android/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

var isMobile = getMobile();

if (isMobile) {
  let startY = 0;
  var currentY = 0;
  var distance = 0;

  window.addEventListener('touchstart', (e) => {
    // Armazena a posição inicial do toque
    startY = e.touches[0].pageY;
  });
  window.addEventListener('touchmove', (e) => {
    currentY = e.touches[0].pageY;
    distance = currentY - startY;
    if (distance < -25) {
      myHeader.style.setProperty('height', '0');
      startY = currentY;
    }
    // Ocultar header
    else if (distance > 25) {
      myHeader.style.setProperty('height', 'var(--headerHeigth)');
      startY = currentY;
    }
  });
  checkOrientation();
}


// |- - Layout inicial
if (window.innerWidth < 600) {
  document.documentElement.style.setProperty('--menuWidth', '100vw');
  myDivLeft.classList.add('close');
  myDivRight.classList.add('close');
}
else if (window.innerWidth < 900) {
  document.documentElement.style.setProperty('--menuWidth', '18rem');
  myDivLeft.classList.add('close');
  myDivRight.classList.add('open');
}
else {
  document.documentElement.style.setProperty('--menuWidth', '18rem');
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
}

function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.documentElement.style.setProperty('--mobileHeight', `100vh`);
  }
  else {
    document.documentElement.style.setProperty('--mobileHeight', `100vw`);
  }
}
window.addEventListener('orientationchange', checkOrientation);


// Modificar layout da página caso seja redimencionada -> evento(resize)
// |- - Redimencionada (onresize)
onresize = (event) => {
  if (isMobile)
    checkOrientation()

  //caso a largura da janela seja menor que 800px (mobile) -> fechar os menus
  if (event.target.innerWidth < 600) {
    myDivLeft.classList.replace('open', 'close'); //substituir .open por .close
    myDivRight.classList.replace('open', 'close'); //substituir .open por .close
    document.documentElement.style.setProperty('--menuWidth', '100vw'); //variável css (--menuWidth):
  }
  else if (event.target.innerWidth < 900) {
    myDivLeft.classList.replace('open', 'close'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
  }
  //caso a largura da janela seja maoir que 800px (monitor) -> abrir os menus
  else {
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
    myDivLeft.classList.replace('close', 'open'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
  }
};

//função para o encerramento da animação (abertura/fechamento) dos menus:
// |- - Menus: AnimationEnd()
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
// |- - Menus: SliceMenu()
function SliceMenu(myDivMenu1, myDivMenu2) {
  // se o menu estiver aberto feche o menu, se não, abra o menu:
  (myDivMenu1.classList.contains('open')) ?
    myDivMenu1.classList.add('closeDivMenu') :
    myDivMenu1.classList.add('openDivMenu');

  if (window.innerWidth < 800) {//se for mobile
    if (myDivMenu2.classList.contains('open')) //verifique se o outro menu está aberto
      myDivMenu2.classList.add('closeDivMenu'); //feche o outro menu
  }
}


// |- - Eventos de animação
myDivLeft.addEventListener('animationstart', () => {
  btMenuLeft.disabled = true; //desativar botão do menu
  if (myDivLeft.classList.contains('close'))
    myBody.style.setProperty('overflow-y', 'hidden');
  else
    myBody.style.setProperty('overflow-y', 'auto');
});

myDivLeft.addEventListener('animationend', () => {
  AnimationEnd(myDivLeft, btMenuLeft); //executar AnimationEnd()
});

myDivRight.addEventListener('animationstart', () => {
  btMenuRight.disabled = true; //desativar botão do menu
  if (myDivRight.classList.contains('close'))
    myBody.style.setProperty('overflow-y', 'hidden');
  else
    myBody.style.setProperty('overflow-y', 'auto');
});

myDivRight.addEventListener('animationend', () => {
  AnimationEnd(myDivRight, btMenuRight); //executar AnimationEnd()
});

btMenuLeft.addEventListener('click', () => {
  SliceMenu(myDivLeft, myDivRight);
})

btMenuRight.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft);
})

btColseMl.addEventListener('click', () => {
  SliceMenu(myDivLeft, myDivRight);
})

btColseMr.addEventListener('click', () => {
  SliceMenu(myDivRight, myDivLeft);
})

//---------------------------------------------------------
// Configurar demais elementos que irão compor a página:
//---------------------------------------------------------

const dHome = document.getElementById('dHome');
const panelL1 = document.getElementById('panelL1');
const panelL2 = document.getElementById('panelL2');
const panelL3 = document.getElementById('panelL3');
const panelL4 = document.getElementById('panelL4');

/*função responsável por ativar painel relacionado ao botão clicado*/
function openPenel(panel) {
  dHome.style.setProperty('display', 'none');
  panelL1.style.setProperty('display', 'none');
  panelL2.style.setProperty('display', 'none');
  panelL3.style.setProperty('display', 'none');
  panelL4.style.setProperty('display', 'none');

  panel.style.setProperty('display', 'flex');
  if (window.innerWidth < 800) {
    if (myDivLeft.classList.contains('open'))
      myDivLeft.classList.add('closeDivMenu');
  }
}

function closePanel(panel) {
  panel.style.setProperty('display', 'none');
  dHome.style.setProperty('display', 'flex');
}

//iniciar com painel home aberto:
openPenel(dHome);

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

const activePage = () => {
  myBody.classList.remove('loading');
  myBody.classList.add('body');
  var d1 = document.getElementById('d1');
  var d2 = document.getElementById('d2');
  var d3 = document.getElementById('d3');
  d1.remove();
  d2.remove();
  d3.remove();
  myHeader.style.setProperty('display', 'flex');
  myDivContainer.style.setProperty('display', 'flex');
  myFooter.style.setProperty('display', 'flex');
  divLoading.classList.add('backImage');
}

/*|- EventsListeners */
// const buttonHome = document.getElementById('buttonHome');
// buttonHome.addEventListener('click', () => { window.location.reload(); });

const btOpenL1 = document.getElementById('btOpenL1');
btOpenL1.addEventListener('click', () => { openPenel(panelL1); });

const btOpenL2 = document.getElementById('btOpenL2');
btOpenL2.addEventListener('click', () => { openPenel(panelL2); });

const btOpenL3 = document.getElementById('btOpenL3');
btOpenL3.addEventListener('click', () => { openPenel(panelL3); });

const btOpenL4 = document.getElementById('btOpenL4');
btOpenL4.addEventListener('click', () => { openPenel(panelL4); });

const btColseL1 = document.getElementById('btColseL1');
btColseL1.addEventListener('click', () => { closePanel(panelL1) });

const btColseL2 = document.getElementById('btColseL2');
btColseL2.addEventListener('click', () => { closePanel(panelL2) });

const btColseL3 = document.getElementById('btColseL3');
btColseL3.addEventListener('click', () => { closePanel(panelL3) });

const btColseL4 = document.getElementById('btColseL4');
btColseL4.addEventListener('click', () => { closePanel(panelL4) });

const btClipboard = document.getElementsByClassName('btClipboard');
Array.from(btClipboard).forEach(element => {
  element.addEventListener('click', () => {
    var clipBoard = new Clipboard(`${element.value}`);
  })
});

const bt_Container = document.getElementsByClassName('bt_Container');
Array.from(bt_Container).forEach(element => {
  element.addEventListener('click', () => { openPenel(panelL3); });
});

window.onload = activePage;