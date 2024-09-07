// Editar scriptRegistro.js
// Importações de módulos Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { doc, getFirestore, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


// Deve ser usado apartir de um servidor
const firebaseConfig = {
  apiKey: "AIzaSyBSk4FZXPVedVdBhDvo8UzYGhqiaDILlL0",
  authDomain: "forbys-d2e7f.firebaseapp.com",
  databaseURL: "https://forbys-d2e7f-default-rtdb.firebaseio.com",
  projectId: "forbys-d2e7f",
  storageBucket: "forbys-d2e7f.appspot.com",
  messagingSenderId: "826739439374",
  appId: "1:826739439374:web:0b8bc26953a717c25ec95f",
  measurementId: "G-GG8FXC09LL"
};

// Inicializar o Firebase
// Inicializar o Firebase Auth e Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Corrigido para passar o app

// Exemplo de uso: Criar um documento no Firestore

/*
método para exportar dados vinculados à uid para a nuvem.
Salvar (ou atualizar Documento completo) no Firestore Database
*/
// |- Criar json no Firestore
const createUserProfile = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data);
    console.log("Perfil do usuário criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar perfil do usuário:", error);
  }
};
// Exemplo de uso:
// const userId = "unique-user-id";
// const userData = {
//   name: "Alice Smith",
//   email: "alice.smith@example.com",
//   age: 25,
//   profilePictureUrl: "https://example.com/alice.jpg"
// };
// createUserProfile(userId, userData);

/*
método para exportar dados vinculados à uid para a nuvem.
Apenas atualizar campos específicos) no Firestore Database
*/
// |- Atualizar json no Firestore
const updateUserProfile = async (uid, updates) => {
  try {
    // Atualiza campos específicos do documento do usuário
    await updateDoc(doc(db, "users", uid), updates);
    console.log("Perfil do usuário atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar perfil do usuário:", error);
  }
};
// Exemplo de uso
// const userId = "unique-user-id";
// const userUpdates = {
//   email: "new.email@example.com",
//   age: 31
// };
// updateUserProfile(userId, userUpdates);


// |- Executar logout:
buttonSair.addEventListener('click', async () => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado com sucesso.");
    window.location.href = 'index.html';
  } catch (error) {
    console.error("Erro ao deslogar usuário:", error);
  }
});

// Função para obter o valor do parâmetro 'uid' da URL
// |- Importar valores do usuário
const getUidFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('uid');
};

// |- Personalizar página
const applyUserData = async () => {
  const uid = getUidFromUrl(); // Obtém o uid da URL

  if (uid) {
    try {
      // Obtenha a referência do documento do usuário
      const docRef = doc(db, 'users', uid); // Correção: use doc() para acessar o documento
      const docSnap = await getDoc(docRef); // Correção: use getDoc() para obter os dados do documento

      if (docSnap.exists()) {
        const userData = docSnap.data(); // Obtém os dados do documento

        // Aplicar os dados na página
        if (userData.background) {
          document.documentElement.style.setProperty('--backColor1', userData.background);
        }

        // if (userData.profilePictureUrl) {
        //   const profileImg = document.createElement('img');
        //   profileImg.src = userData.profilePictureUrl;
        //   profileImg.alt = 'Profile Picture';
        //   document.body.appendChild(profileImg);
        // }
      } else {
        console.log('Nenhum dado encontrado para o usuário:', uid);
      }
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  } else {
    console.log('UID não encontrado na URL.');
  }
};

// Executa a função quando a página carrega
window.onload = applyUserData;