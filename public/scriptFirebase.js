// Importações de módulos Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

var user = undefined;
var credential = undefined;
var uid = undefined;
var userData = undefined;

export function getUser() { return user; }
export function setUser(newUser) { user = newUser; }
export function getCredential() { return credential; }
export function setCredential(newCredential) { credential = newCredential; }
export function getUid() { return uid; }
export function setUid(newUid) { uid = newUid; }
export function getUserData() { return userData; }
export function setUserData(newUserData) { userData = newUserData; }


// |- Fazer login no Firestore
export const login = async (email, password) => {
 try {
  // Faz login e define as credenciais
  setCredential(await signInWithEmailAndPassword(auth, email, password));
  // Define o usuário e o UID
  setUser(getCredential().user);
  setUid(getUser().uid);
  // Redireciona para a página com o UID
  window.location.href = `page.html?uid=${getUid()}`;
  /*
    página dinâmica: window.location.href = `page.html?uid=${uid}`;
    page.html?uid=${uid}, resulta em uma nova página html apenas no lado do cliente
    baseada no arquivo page.html mas personalizada pelo parâmetro ?uid=${uid}?
  */
 } catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(`Erro: ${errorCode}, ${errorMessage}`);
 }
};

// |- Fazer logout no Firestore
export const logout = async () => {
 try {
  await signOut(auth);
  console.log("Usuário deslogado com sucesso.");
  window.location.href = 'index.html';
 } catch (error) {
  console.error("Erro ao deslogar usuário:", error);
 }
}

// |- Criar ou substituir .json
export const createUserProfile = async (data) => {
 try {
  await setDoc(doc(db, "users", getUid()), data);
  console.log("Perfil do usuário criado com sucesso!");
 } catch (error) {
  console.error("Erro ao criar perfil do usuário:", error);
 }
};

// |- Registrar novo usuário
export const register = async (email, password, userData) => {
 try {
  setCredential(await createUserWithEmailAndPassword(auth, email, password)); // Registra o usuário
  setUser(getCredential().user); // Define o usuário
  setUid(getUser().uid); // Define o UID do usuário
  await createUserProfile(userData);
  await logout()
 }
 catch (error) {
  const errorCodeData = error.code; // Código do erro
  const errorMessageData = error.message; // Mensagem do erro
  alert(`Erro: ${errorCodeData}, ${errorMessageData}`);
 }
};

// |- Atualizar json no Firestore
export const updateUserProfile = async (updates) => {
 try {
  // Atualiza campos específicos do documento do usuário
  await updateDoc(doc(db, "users", getUid()), updates);
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
// updateUserProfile(uid, userUpdates);


// |- Importar valores do usuário
// | - - obter parâmetro 'uid' da URL
export const getUidFromUrl = () => {
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 return urlParams.get('uid');
};

// |- - Pegar dados do usuário
export const fetchUserData = async () => {
 const uid = getUidFromUrl(); // Obtém o uid da URL
 if (uid) {
  try {
   // Obtenha a referência do documento do usuário
   const docRef = doc(db, 'users', uid); // Correção: use doc() para acessar o documento
   const docSnap = await getDoc(docRef); // Correção: use getDoc() para obter os dados do documento

   if (docSnap.exists()) {
    setUserData(docSnap.data()); // Obtém os dados do documento
    // Aplicar os dados na página
    if (getUserData()) {
     try {
      console.log(getUserData().birthdate);
      console.log(getUserData().name);
      console.log(getUserData().phone);
     } catch (error) {
      console.log('Erro ao aplicar o background: ' + error.message);
     }
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
// window.onload = fetchUserData;