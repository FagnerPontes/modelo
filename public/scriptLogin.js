import * as scriptFirebase from './scriptFirebase.js';
import * as scriptTheme from './scriptTheme.js';

document.getElementById("loginEmailButton").addEventListener("click", (e) => {
  e.preventDefault(); // Impede o refresh da página e permite o location.href = 'page.html'
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  scriptFirebase.login(email, password);
});

/* |- Configuração de layouts */
var isMobile = false;
if (navigator.userAgentData && navigator.userAgentData.mobile) {
  isMobile = true;
} else if (/Mobi|Android/i.test(navigator.userAgent)) {
  isMobile = true;
}
if (isMobile) {
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
}
else
  document.getElementById('body').style.setProperty('height', `100vh`);

// Aplicação de tema:
scriptTheme.getTheme();