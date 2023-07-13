// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCunJhw-EM3UWaQggBZtuaGMqC2ts5EGqE',
  authDomain: 'tech-net-b1533.firebaseapp.com',
  projectId: 'tech-net-b1533',
  storageBucket: 'tech-net-b1533.appspot.com',
  messagingSenderId: '559826777224',
  appId: '1:559826777224:web:8c5a38ff02e9296cbd1b3d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
