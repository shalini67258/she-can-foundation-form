const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');
const errorMsg = document.getElementById('errorMsg');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate() {
  let valid = true;

  // Reset
  [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('invalid'));
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Name is required.';
    nameInput.classList.add('invalid');
    valid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required.';
    emailInput.classList.add('invalid');
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('invalid');
    valid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message is required.';
    messageInput.classList.add('invalid');
    valid = false;
  }

  return valid;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  successMsg.classList.add('hidden');
  errorMsg.classList.add('hidden');

  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      successMsg.classList.remove('hidden');
      form.reset();
    } else {
      errorMsg.textContent = data.error || 'Something went wrong. Please try again.';
      errorMsg.classList.remove('hidden');
    }
  } catch (err) {
    errorMsg.textContent = 'Could not reach the server. Please try again.';
    errorMsg.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});
