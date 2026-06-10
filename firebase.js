import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "leoingrid.firebaseapp.com",
  projectId: "leoingrid",
  storageBucket: "leoingrid.firebasestorage.app",
  messagingSenderId: "818431056128",
  appId: "1:818431056128:web:373e55e44e176f1d173be5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
