/* ==========================================================================
   The Kiran Academy (TKA) - Authentication & Demo Session Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAuthForms();
});

function initAuthForms() {
  const loginForm = document.getElementById('tkaLoginForm');
  const registerForm = document.getElementById('tkaRegisterForm');

  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
  }

  if (registerForm) {
    registerForm.addEventListener('submit', handleRegisterSubmit);
  }
}

function togglePasswordVisibility(inputId, iconBtn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    iconBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    iconBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('Please fill in all required fields', 'danger');
    return;
  }

  // Create demo session object
  const user = {
    id: 'user-' + Date.now(),
    fullName: email.split('@')[0].toUpperCase(),
    email: email,
    phone: '+91 98765 43210',
    enrolledBatch: 'Full Stack Java 2026',
    targetRole: 'Software Developer',
    joinedDate: new Date().toLocaleDateString()
  };

  localStorage.setItem('tka_user', JSON.stringify(user));
  showToast('Login successful! Redirecting to dashboard...', 'success');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
}

function handleRegisterSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    showToast('Passwords do not match!', 'danger');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters long', 'danger');
    return;
  }

  const newUser = {
    id: 'user-' + Date.now(),
    fullName: name,
    email: email,
    phone: phone,
    enrolledBatch: 'New Student Batch 2026',
    targetRole: 'Software Engineer Trainee',
    joinedDate: new Date().toLocaleDateString()
  };

  localStorage.setItem('tka_user', JSON.stringify(newUser));
  showToast('Registration successful! Welcome to TKA!', 'success');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
}

function fillDemoCredentials() {
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  if (emailInput && passwordInput) {
    emailInput.value = 'student@thekiranacademy.com';
    passwordInput.value = 'demo12345';
    showToast('Demo credentials loaded! Click Sign In.', 'info');
  }
}
