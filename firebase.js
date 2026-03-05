import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "SUA_API_KEY",
authDomain: "SEU_PROJETO.firebaseapp.com",
projectId: "SEU_PROJETO"
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
