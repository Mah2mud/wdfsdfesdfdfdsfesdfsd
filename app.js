// Authentication Functions
function showAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

async function googleLogin() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebaseAuth.signInWithPopup(provider);
        alert('Login successful!');
        closeAuthModal();
    } catch (error) {
        alert('Login error: ' + error.message);
    }
}

async function emailLogin(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    
    try {
        await firebaseAuth.createUserWithEmailAndPassword(email, password);
        alert('Account created successfully!');
        closeAuthModal();
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

// Scroll to services function
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
}

// Check auth state
firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('loginBtn').textContent = 'Dashboard';
        console.log('User logged in:', user.email);
    } else {
        document.getElementById('loginBtn').textContent = 'Get Started';
    }
});