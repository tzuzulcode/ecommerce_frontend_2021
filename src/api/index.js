import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import credentials from './credentials';
// TODO: Replace the following with your app's Firebase project configuration


const app = initializeApp(credentials);

export const db = getFirestore(app)


