  // Import the functions you need from the SDKs you need
import { acceptsLanguage } from "express/lib/request";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBw2BNuCZkgYv2xTvfgeoh7eOZHsWHvinM",
    authDomain: "helpdesk-b512f.firebaseapp.com",
    projectId: "helpdesk-b512f",
    storageBucket: "helpdesk-b512f.appspot.com",
    messagingSenderId: "215116846322",
    appId: "1:215116846322:web:6f06425b24f815c446ec6b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  const registrere = document.getElementById("registrere");
  const elevCollection = collection(db, "elever");


  
  const output = document.getElementById('ouput');
// Lager et nytt dokument i samlinga "elever"
registrere.addEventListener("submit", async(event) =>{
  event.preventDefault();
  const nyElev = await addDoc(
    elevCollection, {
      fornavn: fornavn.value,
      etternavn: etternavn.value,
      telefon: telefon.value,
      epost: epost.value,
      usertype: usertype.value
  });
  console.log('Ny elev med ID: ' + nyElev.id);
})

// import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

const snapshot = await getDocs(
  collection(db, "elever")
);

output.innerHTML = '';
snapshot.forEach((docSnap) => {
  console.log(
    docSnap.data().fornavn,
  );
}); 

window.alert("Register Successfull");

