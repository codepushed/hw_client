import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import productConfigs from ".";



const firebaseConfig = {
  apiKey: productConfigs.FIREBASE_API_KEY,
  authDomain: productConfigs.FIREBASE_AUTH_DOMAIN,
  projectId: productConfigs.FIREBASE_PROJECT_ID,
  storageBucket: productConfigs.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: productConfigs.FIREBASE_MESSAGING_SENDER_ID,
  appId: productConfigs.FIREBASE_APP_ID,
  measurementId: productConfigs.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);