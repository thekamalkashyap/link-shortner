// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIofesNCrXuQJXVF0oVHcA2GOdHZ_XE-s',
  authDomain: 'ur1-shortner.firebaseapp.com',
  projectId: 'ur1-shortner',
  storageBucket: 'ur1-shortner.appspot.com',
  messagingSenderId: '603666400802',
  appId: '1:603666400802:web:4accd9dbc8f2a17148ec7b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const data = getFirestore(app);
