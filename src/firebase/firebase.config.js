import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyBVy64FmvECFjswrwoh6rWaG0J3mHwpSYo",
  authDomain: "stay-vista-4b4c6.firebaseapp.com",
  projectId: "stay-vista-4b4c6",
  storageBucket: "stay-vista-4b4c6.appspot.com",
  messagingSenderId: "124902126534",
  appId: "1:124902126534:web:e283d29b0a39c54b3bf8c7"
}

export const app = initializeApp(firebaseConfig)
