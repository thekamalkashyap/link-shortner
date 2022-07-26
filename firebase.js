import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCIofesNCrXuQJXVF0oVHcA2GOdHZ_XE-s',
  authDomain: 'ur1-shortner.firebaseapp.com',
  projectId: 'ur1-shortner',
  storageBucket: 'ur1-shortner.appspot.com',
  messagingSenderId: '603666400802',
  appId: '1:603666400802:web:4accd9dbc8f2a17148ec7b',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
