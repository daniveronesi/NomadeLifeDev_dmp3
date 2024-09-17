import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}


const firebaseConfig = {

        apiKey: "AIzaSyAuOofKQdVmtyY8WBVHytXFvkKeBImzzow",
        authDomain: "nomadelife-dn.firebaseapp.com",
        projectId: "nomadelife-dn",
        storageBucket: "nomadelife-dn.appspot.com",
        messagingSenderId: "836289455676",
        appId: "1:836289455676:web:54a0709dbac5b793434539",
        measurementId: "G-EZ7LJLJ464"
      
};



const db = getFirestore(app)
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export{db}