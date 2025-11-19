// Firebase Configuration - مشروع fireutils
const firebaseConfig = {
    apiKey: "AIzaSyCzMBENZ11CC05nN8b6B9bF0f48",
    authDomain: "fireutils.firebaseapp.com",
    projectId: "fireutils",
    storageBucket: "fireutils.firebasestorage.app",
    messagingSenderId: "315867159914",
    appId: "1:315867159914:web:2e79e0177b0ae4eab75913"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export services
window.firebaseAuth = firebase.auth();
window.firebaseDb = firebase.firestore();

console.log('Firebase loaded successfully!');