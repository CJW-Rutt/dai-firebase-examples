// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" //this is added during class, seems necessary

const firebaseConfig = {

  apiKey: "AIzaSyDQR1FMJuhCymH9XSsZBufH_8_3bL-7mbI",
  authDomain: "dai-firebase-examples.firebaseapp.com",
  projectId: "dai-firebase-examples",
  storageBucket: "dai-firebase-examples.appspot.com",
  messagingSenderId: "246233131183",
  appId: "1:246233131183:web:12212d6d0f6ed7598d8c5a"

};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // also added along with the getAuth import, required to export it.


/* 

getAuth requires further setup in the firebase app. 
Setup require goolge account and email login. 

*/