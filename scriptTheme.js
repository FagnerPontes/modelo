// Editar scriptTheme.js
const buttonTheme = document.getElementById('buttonTheme');

/*Variável que armazenará o estilo do tema*/
var myTheme = '';

/*checagem do tema no cookie*/
if (getCookie("theme") != '') {
 myTheme = getCookie('theme');
 if (myTheme == 'dark') {
  myTheme = dark();
  setTheme()
 }
 else if (myTheme == 'light') {
  myTheme = light();
  setTheme()
 }
}
else {
 /*Tema que iniciará o site*/
 myTheme = dark();
 setTheme()
}

function setTheme() {
 document.documentElement.style.setProperty('--backColor1', backColor1);
 document.documentElement.style.setProperty('--backColor2', backColor2);
 document.documentElement.style.setProperty('--backColor3', backColor3);
 document.documentElement.style.setProperty('--backColor4', backColor4);
 document.documentElement.style.setProperty('--backColor6', backColor6);
 document.documentElement.style.setProperty('--backColor7', backColor7);
 document.documentElement.style.setProperty('--backColor8', backColor8);
 document.documentElement.style.setProperty('--backColor9', backColor9);
 document.documentElement.style.setProperty('--buttonColor1', buttonColor1);
 document.documentElement.style.setProperty('--buttonColor2', buttonColor2);
 document.documentElement.style.setProperty('--buttonColor3', buttonColor3);
 document.documentElement.style.setProperty('--fontColor1', fontColor1);
 document.documentElement.style.setProperty('--fontColor2', fontColor2);
 document.documentElement.style.setProperty('--fontColor3', fontColor3);
 document.documentElement.style.setProperty('--aColor', aColor);
 document.documentElement.style.setProperty('--border1', border1);
 document.documentElement.style.setProperty('--border2', border2);
 document.documentElement.style.setProperty('--border3', border3);
 document.documentElement.style.setProperty('--backgroundImage', backgroundImage);
}

// Adiciona um ouvinte de evento a todos os radio buttons
const radioButtons = document.querySelectorAll('input[name="options"]');
radioButtons.forEach(radio => {
 radio.addEventListener('click', function () {
  for (i = 0; i < myTheme.length; i++) {
   if (this.value) {
    switch (this.value) {
     case 'dark': {
      myTheme = dark();
      setCookie('theme', 'dark', 365);
      setTheme()
      break
     }
     case 'light': {
      myTheme = light();
      setCookie('theme', 'light', 365);
      setTheme()
      break;
     }
    }
   }
  }
 });
});