import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

//tähän config-tiedot

const firebaseConfig = {
  apiKey: "AIzaSyDzXAqC_HDQmoKDeApycfNrlvgDoapPDcI",
  authDomain: "chat-8d270.firebaseapp.com",
  projectId: "chat-8d270",
  storageBucket: "chat-8d270.appspot.com",
  messagingSenderId: "666949478504",
  appId: "1:666949478504:web:bfffa0074ff288f5dd33dd"
};

initializeApp(firebaseConfig)

const firestore = getFirestore()

export {
    firestore
}

console.log("Firebase toimii!")