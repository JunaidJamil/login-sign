import {auth , database} from "/firebase.mjs"
import{signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{ref, set, get,child,onValue} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"


let btn = document.getElementById('login')
btn.addEventListener('click',()=>{
    
const email = document.getElementById('Email').value;
const password =document.getElementById('password').value;

    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  //   console.log('user' , user);
  //   onValue(ref(database, 'users/' + userId ), (data) => {
  //  console.log('data ===>' , data.val());
  
    


  alert('login')
  location.replace('./home.html');
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode',errorCode)
    console.log('errorMessage',errorMessage)
    alert('Invalid Id')
});
})

