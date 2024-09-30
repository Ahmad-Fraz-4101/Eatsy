// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyAVpCVJ1zCWxqErnki-KwxMc-WxYhbgRKQ",
  authDomain: "auth-4101-1da4e.firebaseapp.com",
  projectId: "auth-4101-1da4e",
  storageBucket: "auth-4101-1da4e.appspot.com",
  messagingSenderId: "265854715114",
  appId: "1:265854715114:web:168c8ba81de5852eaf8393"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, { 
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

