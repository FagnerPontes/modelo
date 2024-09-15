class Modal {
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
   modal.style.setProperty('display', 'none');
   modal.style.setProperty('position', 'fixed');
   modal.style.setProperty('left', 'calc(50vw - 9rem)');
   modal.style.setProperty('top', 'calc(50vh - 6rem)');
   modal.style.setProperty('width', '18rem');
   modal.style.setProperty('height', '9rem');
   modal.style.setProperty('background-color', 'var(--fontColor4)');
   modal.style.setProperty('justify-content', 'center');
   modal.style.setProperty('align-items', 'center');
   modal.style.setProperty('border-radius', '10px');
   modal.style.setProperty('z-index', '1000');
   modal.style.setProperty('padding', '.5rem');

   // Cria o conteúdo do modal
   const modalContent = document.createElement('div');

   // Estilos para o conteúdo do modal
   modalContent.style.setProperty('display', 'flex');
   modalContent.style.setProperty('flex-direction', 'column');
   modalContent.style.setProperty('background-color', 'var(--backColor1s)');
   modalContent.style.setProperty('border-radius', '6px');
   modalContent.style.setProperty('justify-content', 'center');
   modalContent.style.setProperty('align-items', 'center');
   modalContent.style.setProperty('flex', '1');
   modalContent.style.setProperty('padding', '.5rem');
   modalContent.style.setProperty('height', '8rem');

   // Adiciona o texto passado na criação do modal
   const modalText = document.createElement('p');
   modalText.style.setProperty('color', 'var(--fontColor1)');
   modalText.style.setProperty('text-align', 'center');
   modalText.style.setProperty('justify-content', 'center');
   modalText.style.setProperty('flex', '1');
   modalText.style.setProperty('padding', '.5rem');

   modalText.textContent = texto;

   // Botão de fechar
   const closeButton = document.createElement('button');
   closeButton.style.setProperty('display', 'flex');
   closeButton.style.setProperty('justify-content', 'center');
   closeButton.style.setProperty('width', '4rem');
   closeButton.style.setProperty('height', '2rem');
   closeButton.style.setProperty('padding', '.5rem');
   closeButton.style.setProperty('border-radius', '8px');

   closeButton.textContent = 'OK';
   closeButton.addEventListener('click', () => this.closeModal());

   // Adiciona o texto e o botão ao conteúdo do modal
   modalContent.appendChild(modalText);
   modalContent.appendChild(closeButton);
   modal.appendChild(modalContent);

   // Adiciona o modal ao body
   document.body.appendChild(modal);

   // Armazena o modal para referência futura
   this.modalElement = modal;
   this.modalElement.style.setProperty('display', 'flex');
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