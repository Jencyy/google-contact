import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8w3DyViA2iNxc9LchbMEY2f7zlz0xST8",
  authDomain: "contact-c7627.firebaseapp.com",
  projectId: "contact-c7627",
  storageBucket: "contact-c7627.appspot.com",
  messagingSenderId: "163686506738",
  appId: "1:163686506738:web:f36428095894f65933f06b"
};



const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
