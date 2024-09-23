import { Clipboard } from './scriptClipboard.js';
import * as scriptTheme from './scriptTheme.js';

// |- Manipulação do layout
//elementos maniplados:
const divLoading = document.getElementById('divLoading');
const myBody = document.getElementById('body');
const myHeader = document.getElementById('myHeader');
const btMenuLeft = document.getElementById('btMenuLeft');
const btMenuRight = document.getElementById('btMenuRight');
const myDivContainer = document.getElementById('myDivContainer');
const myDivCenter = document.getElementById('myDivCenter');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
const myFooter = document.getElementById('myFooter');
const divChildCenter = document.getElementsByClassName('divChildCenter');
const divCenterContent = document.getElementsByClassName('divCenterContent');


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
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
  document.documentElement.style.setProperty('--mobileHeight', `${window.innerHeight}px`);
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
    if (distance < -5) {
      myHeader.style.setProperty('height', '0');
      startY = currentY;
    }
    // Ocultar header
    else if (distance > 5) {
      myHeader.style.setProperty('height', 'var(--headerHeigth)');
      startY = currentY;
    }
  });
  checkOrientation();
}
else {
  document.getElementById('body').style.setProperty('height', `100vh`);
  document.documentElement.style.setProperty('--mobileHeight', `100vh`);
}


// |- - Layout inicial
if (window.innerWidth < 600) {
  myDivLeft.classList.add('close');
  myDivRight.classList.add('close');
  document.documentElement.style.setProperty('--menuWidth', '100vw');

  //mover elementos:
  // myBody.appendChild(myDivLeft);
  // myBody.appendChild(myDivCenter);
  // myBody.appendChild(myDivRight);
  // myDivContainer.style.setProperty('display', 'none');
  // myDivCenter.style.setProperty('overflow', 'none');

}
else if (window.innerWidth < 800) {
  myDivLeft.classList.add('close');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');

  //mover elementos:
  // myDivContainer.appendChild(myDivLeft);
  // myDivContainer.appendChild(myDivCenter);
  // myDivContainer.appendChild(myDivRight);
  // myDivContainer.style.setProperty('display', 'flex');
  // myDivCenter.style.setProperty('overflow', 'auto');
}
else {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');

  //mover elementos:
  // myDivContainer.appendChild(myDivLeft);
  // myDivContainer.appendChild(myDivCenter);
  // myDivContainer.appendChild(myDivRight);
  // myDivContainer.style.setProperty('display', 'flex');
  // myDivCenter.style.setProperty('overflow', 'auto');
}

function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
    document.documentElement.style.setProperty('--mobileHeight', `${window.innerHeight}px`);
  }
  else {
    document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
    document.documentElement.style.setProperty('--mobileHeight', `${window.innerWidth}px`);
  }
}

window.addEventListener('orientationchange', checkOrientation);

// Modificar layout da página caso seja redimencionada -> evento(resize)
// |- - Redimencionada (onresize)
onresize = (event) => {
  if (isMobile)
    checkOrientation();
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
    myDivLeft.classList.replace('close', 'open'); //substituir .close por .open
    myDivRight.classList.replace('close', 'open'); //substituir .close por .open
    document.documentElement.style.setProperty('--menuWidth', '18rem'); //variável css (--menuWidth):
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
});

myDivLeft.addEventListener('animationend', () => {
  AnimationEnd(myDivLeft, btMenuLeft); //executar AnimationEnd()
});

myDivRight.addEventListener('animationstart', () => {
  btMenuRight.disabled = true; //desativar botão do menu
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

//---------------------------------------------------------
// Configurar demais elementos que irão compor a página:
//---------------------------------------------------------

const dHome = document.getElementById('dHome');
const panelL1 = document.getElementById('panelL1');
const panelL2 = document.getElementById('panelL2');
const panelL3 = document.getElementById('panelL3');

/*função responsável por ativar painel relacionado ao botão clicado*/
function openPenel(panel) {
  dHome.style.setProperty('display', 'none');
  panelL1.style.setProperty('display', 'none');
  panelL2.style.setProperty('display', 'none');
  panelL3.style.setProperty('display', 'none');

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

const activePage = () => {
  myBody.classList.remove('loading');
  myBody.classList.add('body');
  divLoading.remove();
  myHeader.style.setProperty('display', 'flex');
  myDivContainer.style.setProperty('display', 'flex');
  myFooter.style.setProperty('display', 'flex');
  divLoading.style.setProperty('display', 'none');
  scriptTheme.getTheme();
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


const btColseL1 = document.getElementById('btColseL1');
btColseL1.addEventListener('click', () => { closePanel(panelL1) });

const btColseL2 = document.getElementById('btColseL2');
btColseL2.addEventListener('click', () => { closePanel(panelL2) });

const btColseL3 = document.getElementById('btColseL3');
btColseL3.addEventListener('click', () => { closePanel(panelL3) });

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