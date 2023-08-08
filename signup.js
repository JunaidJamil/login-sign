import {auth ,database} from "/firebase.mjs"
import{createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{ref, set, get,child} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"



let btn = document.getElementById('sign')
btn.addEventListener('click',()=>{
  let username = document.getElementById('username').value
  let email = document.getElementById('Email').value
  let password = document.getElementById('password').value
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const userId = userCredential.user.uid;
      console.log('user', userId)
       set(ref(database, 'Public/' + username ), {
          username: username,
          email: email,
        
        });
      
      window.location.href = './index.html'
  // ...
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('errorCode', errorCode)
  console.log('errorMessage', errorMessage)
  })
  
  
  })