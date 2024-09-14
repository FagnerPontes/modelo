import * as scriptFirebase from './scriptFirebase.js';
import * as scriptTheme from './scriptTheme.js';

const myBody = document.getElementById('body');
const divFormParent = document.getElementById('divFormParent');
const divLoading = document.getElementById('divLoading');

document.getElementById("loginEmailButton").addEventListener("click", async (e) => {
  e.preventDefault(); // Impede o refresh da página e permite o location.href = 'page.html'
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await scriptFirebase.login(email, password);
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

const activePage = () => {
  myBody.classList.remove('loading');
  myBody.classList.add('body');
  divLoading.remove();
  divFormParent.style.setProperty('display', 'flex');
  divLoading.style.setProperty('display', 'none');
  scriptTheme.getTheme();
}

window.onload = activePage;