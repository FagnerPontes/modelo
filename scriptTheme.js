const buttonTheme = document.getElementById('buttonTheme');

/*Variável que armazenará o estilo do tema*/
var myTheme = '';

function darkTheme() {
 document.documentElement.style.setProperty('--backColor1', backColor1_Dark);
 document.documentElement.style.setProperty('--backColor2', backColor2_Dark);
 document.documentElement.style.setProperty('--backColor3', backColor3_Dark);
 document.documentElement.style.setProperty('--backColor4', backColor4_Dark);
 document.documentElement.style.setProperty('--backColor6', backColor6_Dark);
 document.documentElement.style.setProperty('--backColor7', backColor7_Dark);
 document.documentElement.style.setProperty('--backColor8', backColor8_Dark);
 document.documentElement.style.setProperty('--buttonColor1', buttonColor1_Dark);
 document.documentElement.style.setProperty('--buttonColor2', buttonColor2_Dark);
 document.documentElement.style.setProperty('--buttonColor3', buttonColor3_Dark);
 document.documentElement.style.setProperty('--fontColor1', fontColor1_Dark);
 document.documentElement.style.setProperty('--fontColor2', fontColor2_Dark);
 document.documentElement.style.setProperty('--fontColor3', fontColor3_Dark);
 document.documentElement.style.setProperty('--aColor', aColor_Dark);
 document.documentElement.style.setProperty('--border1', border1_Dark);
 document.documentElement.style.setProperty('--border2', border2_Dark);
 document.documentElement.style.setProperty('--border3', border3_Dark);
 document.documentElement.style.setProperty('--backgroundImage', backgroundImage_Dark);
 document.documentElement.style.setProperty('--backgroundImageHeader', backgroundImageHeader_Dark);
}

function lightTheme() {
 document.documentElement.style.setProperty('--backColor1', backColor1_Light);
 document.documentElement.style.setProperty('--backColor2', backColor2_Light);
 document.documentElement.style.setProperty('--backColor3', backColor3_Light);
 document.documentElement.style.setProperty('--backColor4', backColor4_Light);
 document.documentElement.style.setProperty('--backColor6', backColor6_Light);
 document.documentElement.style.setProperty('--backColor7', backColor7_Light);
 document.documentElement.style.setProperty('--backColor8', backColor8_Light);
 document.documentElement.style.setProperty('--buttonColor1', buttonColor1_Light);
 document.documentElement.style.setProperty('--buttonColor2', buttonColor2_Light);
 document.documentElement.style.setProperty('--buttonColor3', buttonColor3_Light);
 document.documentElement.style.setProperty('--fontColor1', fontColor1_Light);
 document.documentElement.style.setProperty('--fontColor2', fontColor2_Light);
 document.documentElement.style.setProperty('--fontColor3', fontColor3_Light);
 document.documentElement.style.setProperty('--aColor', aColor_Light);
 document.documentElement.style.setProperty('--border1', border1_Light);
 document.documentElement.style.setProperty('--border2', border2_Light);
 document.documentElement.style.setProperty('--border3', border3_Light);
 document.documentElement.style.setProperty('--backgroundImage', backgroundImage_Light);
 document.documentElement.style.setProperty('--backgroundImageHeader', backgroundImageHeader_Light);
}

/*checagem do tema no cookie*/
if (getCookie("theme") != '') {
 myTheme = getCookie('theme');
 if (myTheme == 'dark') {
  darkTheme();
 }
 else if (myTheme == 'light') {
  lightTheme();
 }
}
else {
 /*Tema que iniciará o site*/
 lightTheme();
 myTheme = 'light';
}

/*função responsável por realizar a mudança do tema*/
function changeTheme() {
 if (myTheme == 'dark') {
  lightTheme();
  myTheme = 'light';
  setCookie('theme', 'light', 365);
 }
 else if (myTheme == 'light') {
  darkTheme();
  myTheme = 'dark';
  setCookie('theme', 'dark', 365);
 }
}

/*Ação ao clicar no botão de mudança de tema*/
buttonTheme.addEventListener("click", changeTheme);