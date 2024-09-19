export class Modal {
  constructor(texto) {
    this.texto = texto;
    this.modalElement = null;
    this.createModal(texto);
  }

  createModal(texto) {
    // Cria o container do modal
    const modal = document.createElement('div');

    // Adiciona estilos diretamente via JavaScript
    modal.style.setProperty('display', 'flex');
    modal.style.setProperty('flex-direction', 'column');
    modal.style.setProperty('position', 'fixed');
    modal.style.setProperty('left', 'calc(50vw - 9rem)');
    modal.style.setProperty('top', 'calc(50vh - 6rem)');
    modal.style.setProperty('width', '18rem');
    modal.style.setProperty('min-height', '6rem');
    modal.style.setProperty('justify-content', 'center');
    modal.style.setProperty('align-items', 'center');
    modal.style.setProperty('z-index', '1000');
    modal.style.setProperty('padding', '1rem');
    modal.style.setProperty('background-color', 'var(--backColor1s)');
    modal.style.setProperty('border-radius', '10px');
    modal.style.setProperty('border', '2px solid var(--fontColor3)');


    // Adiciona o texto passado na criação do modal
    const modalText = document.createElement('p');
    modalText.style.setProperty('color', 'var(--fontColor3)');
    modalText.style.setProperty('font-size', '1.25rem');
    modalText.style.setProperty('text-align', 'center');
    modalText.style.setProperty('justify-content', 'center');
    modalText.style.setProperty('flex', '1');
    modalText.style.setProperty('padding-bottom', '1rem');

    modalText.textContent = texto;

    // Botão de fechar
    const closeButton = document.createElement('button');
    closeButton.style.setProperty('color', 'var(--fontColor3)');
    closeButton.style.setProperty('display', 'flex');
    closeButton.style.setProperty('font-size', '1rem');
    closeButton.style.setProperty('justify-content', 'center');
    closeButton.style.setProperty('align-items', 'center');
    closeButton.style.setProperty('width', '3rem');
    closeButton.style.setProperty('height', '3rem');
    closeButton.style.setProperty('border-radius', '1.5rem');


    closeButton.textContent = 'OK';
    closeButton.addEventListener('click', () => this.closeModal());

    // Adiciona o texto e o botão ao conteúdo do modal
    modal.appendChild(modalText);
    modal.appendChild(closeButton);

    // Adiciona o modal ao body
    document.body.appendChild(modal);
    // Armazena o modal para referência futura

    this.modalElement = modal;
  }

  // Método para fechar o modal
  closeModal() {
    if (this.modalElement) {
      this.modalElement.style.setProperty('display', 'none');
      this.modalElement.remove();
    }
  }
}