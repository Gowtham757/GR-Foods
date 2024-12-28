
function switchToLogin() {
    document.getElementById('registrationPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}

function switchToRegister() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registrationPage').style.display = 'block';
}

function validateRegistration() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        switchToLogin();
    }
}

function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Invalid password.';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    }
}
