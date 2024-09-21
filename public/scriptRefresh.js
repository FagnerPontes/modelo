let startY = 0;

window.addEventListener('touchstart', (e) => {
  // Armazena a posição inicial do toque
  startY = e.touches[0].pageY;
});

window.addEventListener('touchmove', (e) => {
  const currentY = e.touches[0].pageY;
  const distance = currentY - startY;

  if (distance > 25) {
    // Deslizando para baixo (Pull-to-Refresh)
    console.log('Deslizando para baixo');
  } else if (distance < -25 && window.scrollY > 0) {
    // Deslizando para cima
    console.log('Deslizando para cima');
  }
});