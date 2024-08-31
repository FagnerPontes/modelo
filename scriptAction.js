/*Editar arquivo scriptAcrion.js*/

//elementos maniplados:
const buttonMenuLeft = document.getElementById('buttonMenuLeft');
const buttonMenuRight = document.getElementById('buttonMenuRight');
const myDivLeft = document.getElementById('myDivLeft');
const myDivRight = document.getElementById('myDivRight');
const pHeader = document.getElementById('pHeader')
const buttonHedaer_DR_Child = document.getElementById('buttonHedaer_DR_Child');
const i_DR_Child = document.getElementById("i_DR_Child");


var isMobile = false;
if (navigator.userAgentData && navigator.userAgentData.mobile) {
  isMobile = true;
} else if (/Mobi|Android/i.test(navigator.userAgent)) {
  isMobile = true;
}
if (isMobile) {
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
  myDivRight.classList.add('openMyDivRight');
}
else
  document.getElementById('body').style.setProperty('height', `100vh`);

//caso a largura da janela seja maior que 800px (monitor) -> iniciar menu aberto.
if (window.innerWidth >= 800) {
  myDivLeft.classList.add('open');
  myDivRight.classList.add('open');
  document.documentElement.style.setProperty('--menuWidth', '18rem');
}
//caso a largura da janela seja menor que 800px (mobile)) -> iniciar menu fechado
else {
  isMobile = true;
  myDivRight.classList.add('openMyDivRight');
  myDivLeft.classList.add('close'); //adicionar classe (.close) ao menu esquerdo
  myDivRight.classList.add('open'); //adicionar classe (.close) ao menu direito
  document.documentElement.style.setProperty('--menuWidth', '100%'); //variável css (--menuWidth):
}

// Modificar layout da página caso seja redimencionada -> evento(resize)
onresize = (event) => {
  //caso a largura da janela seja menor que 800px (mobile) -> fechar os menus
  if (event.target.innerWidth < 800) {
    isMobile = true;
    myDivRight.classList.add('openMyDivRight');
    myDivLeft.classList.replace('open', 'close'); //substituir .open por .close
    document.documentElement.style.setProperty('--menuWidth', '100%'); //variável css (--menuWidth):
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

  // if (window.innerWidth < 800) {//se for mobile
  //   if (myDivMenu2.classList.contains('open')) //verifique se o outro menu está aberto
  //     myDivMenu2.classList.add('closeDivMenu'); //feche o outro menu
  // }
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

const menuIncos = [
  'bi bi-paperclip', //Nossos serviços
  'bi bi-bag-check', //Nossos planos
  'bi bi-person-hearts', //Seja nosso parceiro
  'bi bi-envelope-arrow-up', //Entre em contato
  'bi bi-gear', //Configurações
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
var titulos = new Array();
var paragrafos = new Array();


/*criar elementos que serão utilizados na página*/
for (var i = 0; i < menuIncos.length; i++) {
  buttonsLeftMenu.push(document.createElement('button'));
  icons.push(document.createElement('i'));
  spans.push(document.createElement('span'));
  divCenterContent.push(document.createElement('div'));
  divChildTop.push(document.createElement('div'));
  titulos.push(document.createElement('h3'));
  paragrafos.push(document.createElement('p'));
}

// Adicionar propriedades e atributos ao elementos criados:
for (var i = 0; i < menuIncos.length; i++) {
  icons[i].setAttribute('class', menuIncos[i]);
  spans[i].innerText = buttonsName[i];
  divChildTop[i].setAttribute('class', "divChildTop"); //adicionar a classe .divChildTop
  divCenterContent[i].setAttribute('id', painelsIds[i])
  divCenterContent[i].setAttribute('class', "divCenterContent"); //adicionar a classe .divCenterContent
}

var servicos = divCenterContent[0];
var planos = divCenterContent[1];
var parceiros = divCenterContent[2];
var contato = divCenterContent[3];
var config = divCenterContent[4];

// Atribuir aos elementos os seus respectivos nós:
for (var i = 0; i < menuIncos.length; i++) {
  buttonsLeftMenu[i].append(icons[i]);
  buttonsLeftMenu[i].append(spans[i]);
  myDivLeft.append(buttonsLeftMenu[i]);
  divChildTop[i].append(paragrafos[i]);
  divCenterContent[i].append(divChildTop[i]);
  divCenter.append(divCenterContent[i]);
  divChildTop[i].innerHTML = `<h1>${buttonsName[i]}</h1>`;
}

paragrafos.push(document.createElement('p'));

/*Criar divChildTop para o botão home*/
divChildTop.push(document.createElement('div'));

/*Adicionar textos aos parágrados das divChildTop*/
divChildTop[divChildTop.length - 1].innerHTML = `<h1>${titulo_Home}</h1>`;
paragrafos.forEach(element => {
  var i = paragrafos.indexOf(element);
  element.innerText = meusTextos[i];
});
divChildTop[divChildTop.length - 1].append(paragrafos[paragrafos.length - 1]);
divChildTop[divChildTop.length - 1].setAttribute('class', "divChildTop");

/*Criar divCenterContent para receber o divChildTop do botão home*/
divCenterContent.push(document.createElement('div'));
divCenterContent[divChildTop.length - 1].setAttribute('class', "divCenterContent");
divCenterContent[divChildTop.length - 1].append(divChildTop[divChildTop.length - 1]);

/*adicionar divCenterContent do botão home à divCenter*/
divCenter.append(divCenterContent[divChildTop.length - 1]);

/*Adicionar botão home a lista de botões*/
buttonsLeftMenu.push(buttonHome);

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


// // Adiciona um ouvinte de evento a todos os radio buttons
// const radioButtons = document.querySelectorAll('input[name="options"]');
// radioButtons.forEach(radio => {
//   radio.addEventListener('click', function () {
//     alert("Valor selecionado: " + this.value);
//   });
// });


/*texto no parágrafo do cabeçalho*/
pHeader.innerText = texto_pHeader;

/*Preenchendo divRigth*/
myDivRight.append(document.createElement('h1'));
myDivRight.append(document.createElement('p'));
// myDivRight.querySelector('p').innerText += tituloDivRight;
// myDivRight.querySelector('p').innerText = `${Informacoes}`;

activeContentArea(divCenterContent[divCenterContent.length - 1]);