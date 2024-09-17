export class Clipboard {
  constructor(texto) {
    this.texto = texto;
    this.modalElement = null;
    this.createModal(texto);
  }

  createModal(texto) {
    // Cria o container do modal
    navigator.clipboard.writeText(texto).then(() => {
      const modal = document.createElement('div');

      // Adiciona estilos diretamente via JavaScript
      modal.style.setProperty('display', 'flex');
      modal.style.setProperty('position', 'fixed');
      modal.style.setProperty('left', 'calc(50vw - 9rem)');
      modal.style.setProperty('top', '0');
      modal.style.setProperty('width', '18rem');
      modal.style.setProperty('height', '5rem');
      modal.style.setProperty('background-color', 'var(--backColor3)');
      modal.style.setProperty('justify-content', 'center');
      modal.style.setProperty('align-items', 'center');
      modal.style.setProperty('border-radius', '2.5rem');
      modal.style.setProperty('z-index', '1000');
      modal.style.setProperty('padding', '.5rem');
      modal.style.setProperty('opacity', '0');

      // Adiciona o texto passado na criação do modal
      const modalText = document.createElement('p');
      modalText.style.setProperty('color', 'var(--fontColor1)');
      modalText.style.setProperty('font-size', '1.25rem');
      modalText.style.setProperty('text-align', 'center');
      modalText.style.setProperty('justify-content', 'center');
      modalText.style.setProperty('flex', '1');
      modalText.style.setProperty('padding', '.5rem');

      modalText.textContent = `${texto}, copiado`;

      // Adiciona o texto e o botão ao conteúdo do modal
      modal.appendChild(modalText);
      document.body.appendChild(modal);

      // Armazena o modal para referência futura
      this.modalElement = modal;

      var opacity = 0;
      var graus = 0;
      // Definindo o intervalo de animação
      const intervalId = setInterval(() => {
        opacity = Math.sin(graus * (Math.PI / 180))
        this.modalElement.style.setProperty('opacity', `${opacity}`);
        graus += 3.75;
      }, 50);

      // Interrompendo o intervalo após 5 segundos
      setTimeout(() => {
        clearInterval(intervalId);
        this.closeModal();
      }, 2400);
    });
  }

  // Método para fechar o modal
  closeModal() {
    if (this.modalElement) {
      this.modalElement.style.setProperty('display', 'none');
      this.modalElement.remove();
    }
  }
}