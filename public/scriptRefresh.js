let startY = 0;
let isPulling = false;

window.addEventListener('touchstart', (e) => {
 if (window.scrollY === 0) {
  startY = e.touches[0].pageY;
  isPulling = true;
 }
});

window.addEventListener('touchmove', (e) => {
 if (isPulling) {
  const distance = e.touches[0].pageY - startY;

  // Defina um limite para ativar a atualização
  if (distance > 50) {
   console.log('Pull to refresh ativado');
   location.reload(); // Atualiza a página
   isPulling = false;
  }
 }
});

window.addEventListener('touchend', () => {
 isPulling = false;
});