// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4kw0DqCKQkSVfaH6KBwuy30so5itE724',
  authDomain: 'avalanche-a5d7b.firebaseapp.com',
  projectId: 'avalanche-a5d7b',
  storageBucket: 'avalanche-a5d7b.appspot.com',
  messagingSenderId: '11784413890',
  appId: '1:11784413890:web:3d0f621cf0e3755f3cd15b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsRef = collection(db, 'products');
export const ordersRef = collection(db, 'orders');
