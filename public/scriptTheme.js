// Editar scriptTheme.js

/*Variável que armazenará o estilo do tema*/
var myTheme = '';

export function getMyTheme() {
  return myTheme;
}

export function setMyTheme(newTheme, cookeTheme) {
  myTheme = newTheme;
  setTheme();
  setCookie('theme', cookeTheme, 365);
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setTheme() {
  document.documentElement.style.setProperty('--backColor1', backColor1);
  document.documentElement.style.setProperty('--backColor2', backColor2);
  document.documentElement.style.setProperty('--backColor3', backColor3);
  document.documentElement.style.setProperty('--backColor4', backColor4);
  document.documentElement.style.setProperty('--backColor1t', backColor1t);
  document.documentElement.style.setProperty('--backColor2t', backColor2t);
  document.documentElement.style.setProperty('--backColor1s', backColor1s);
  document.documentElement.style.setProperty('--backColor2s', backColor2s);
  document.documentElement.style.setProperty('--buttonColor1', buttonColor1);
  document.documentElement.style.setProperty('--buttonColor2', buttonColor2);
  document.documentElement.style.setProperty('--buttonColor3', buttonColor3);
  document.documentElement.style.setProperty('--fontColor1', fontColor1);
  document.documentElement.style.setProperty('--fontColor2', fontColor2);
  document.documentElement.style.setProperty('--fontColor3', fontColor3);
  document.documentElement.style.setProperty('--fontColor4', fontColor4);
  document.documentElement.style.setProperty('--aColor', aColor);
  document.documentElement.style.setProperty('--backgroundImage', backgroundImage);
}

export function getTheme() {
  myTheme = getCookie('theme');
  switch (myTheme) {
    case '':
      myTheme = dark();
      setTheme()
      break;
    case 'dark':
      myTheme = dark();
      setTheme()
      break;
    case 'light':
      myTheme = light();
      setTheme()
      break;
    case 'solid_dark':
      myTheme = solidDark();
      setTheme()
      break;
    case 'solid_light':
      myTheme = solidLight();
      setTheme()
      break;
  }
}

// // Adiciona um ouvinte de evento a todos os radio buttons
// const radioButtons = document.querySelectorAll('input[name="options"]');
// radioButtons.forEach(radio => {
//   radio.addEventListener('click', function () {
//     for (i = 0; i < myTheme.length; i++) {
//       if (this.value) {
//         switch (this.value) {
//           case 'dark': {
//             myTheme = dark();
//             setCookie('theme', 'dark', 365);
//             setTheme();
//             break;
//           }
//           case 'light': {
//             myTheme = light();
//             setCookie('theme', 'light', 365);
//             setTheme();
//             break;
//           }
//           case 'solid_dark': {
//             myTheme = solidDark();
//             setCookie('theme', 'solid_dark', 365);
//             setTheme();
//             break;
//           }
//           case 'solid_light': {
//             myTheme = solidLight();
//             setCookie('theme', 'solid_light', 365);
//             setTheme();
//             break;
//           }
//         }
//       }
//     }
//   });
// });

// getTheme();