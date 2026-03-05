import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyC9c9mUFCvUd3HhbE4ePOFFeb66ZgvYMSc",
authDomain: "meu-caixa-f130f.firebaseapp.com",
projectId: "meu-caixa-f130f",
storageBucket: "meu-caixa-f130f.firebasestorage.app",
messagingSenderId: "185078430495",
appId: "1:185078430495:web:2ef34d0a3d8b514cc44e2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async () => {

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

await signInWithEmailAndPassword(auth,email,senha);

}

window.criarConta = async () => {

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

await createUserWithEmailAndPassword(auth,email,senha);

}

onAuthStateChanged(auth,user=>{

if(user){

document.getElementById("loginBox").style.display="none";
document.getElementById("app").style.display="block";

}

});
