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