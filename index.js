// index.js

// Toggle hamburger menu for mobile nav
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Form validation function (called on form submit)
function formvalidation() {
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Name validation: not empty and at least 2 characters
  if (name.length < 2) {
    alert('Please enter a valid name with at least 2 characters.');
    return false;
  }

  // Contact validation: digits only and length between 7 and 15 (adjust as needed)
  if (!/^\d{7,15}$/.test(contact)) {
    alert('Please enter a valid contact number (7 to 15 digits).');
    return false;
  }

  // Email validation basic pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Subject validation: not empty
  if (subject.length === 0) {
    alert('Please enter a subject.');
    return false;
  }

  // Message validation: at least 10 characters
  if (message.length < 10) {
    alert('Please enter a message of at least 10 characters.');
    return false;
  }

  // If all validations pass, return true to submit form
  return true;
}

// Optional: Close mobile menu if clicking outside
document.addEventListener('click', (e) => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});
