// CONFIGURAÇÃO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD2TXACQ5t8vIsH2iZLq79oHeUI5y0Wo",
  authDomain: "meucaixa-d8d24.firebaseapp.com",
  projectId: "meucaixa-d8d24",
  storageBucket: "meucaixa-d8d24.firebasestorage.app",
  messagingSenderId: "486750418195",
  appId: "1:486750418195:web:4c33801663486abda796e6"
};

// inicializa
firebase.initializeApp(firebaseConfig);

// auth
window.auth = firebase.auth();
window.provider = new firebase.auth.GoogleAuthProvider();
