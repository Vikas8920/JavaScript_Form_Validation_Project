function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  clearErrors();

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate username
  if(username == ''){
    displayError('usernameError', 'Username is required')
  }
  else if (!isValidUsername(username)) {
    displayError('usernameError', 'Username must contain "@" and at least one number');
  }

  // Validate email
  if (email === '') {
    displayError('emailError', 'Email is required');
  } else if (!isValidEmail(email)) {
    displayError('emailError', 'Invalid email format');
  }

  // Validate password strength
  if (password === ''){
    displayError('passwordError', 'Password is required')
  }
  else if (!isStrongPassword(password)) {
    displayError('passwordError', 'Password must be strong');
  }

  // Validate confirm password
  if (confirmPassword === '') {
    displayError('confirmPasswordError', 'Confirm Password is required');
  } else if (confirmPassword !== password) {
    displayError('confirmPasswordError', 'Passwords do not match');
  }

  // If no errors, show success message
  if (!hasErrors()) {
    displaySuccess('Registration successful! 	&#128512;');
  }
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUsername(username) {
  // Username must contain "@" and at least one number
  const usernameRegex = /.*@.*\d.*/;
  return usernameRegex.test(username);
}

function isStrongPassword(password) {
  // Strong password criteria: min 8 characters, at least one uppercase, one lowercase, one digit, and one special character
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  return strongPasswordRegex.test(password);
}

function displayError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(element => element.textContent = '');
}

function hasErrors() {
  const errorElements = document.querySelectorAll('.error');
  return Array.from(errorElements).some(element => element.textContent !== '');
}

function displaySuccess(successMessage) {
  const successElement = document.getElementById('successMessage');
  successElement.innerHTML = successMessage;
}

function resetForm() {
  // Reset all input values and error messages
  document.getElementById('form').reset();
  clearErrors();
  document.getElementById('successMessage').textContent = '';
}