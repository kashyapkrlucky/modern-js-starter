// DOM Elements
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const contactForm = document.getElementById('contact-form');
const ctaButton = document.getElementById('cta-button');

// Initialize the application
function init() {
  // Set up event listeners
  setupEventListeners();

  // Show the home page by default
  showPage('home');
}

// Set up event listeners
function setupEventListeners() {
  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      showPage(page);
      updateActiveNav(link);
    });
  });

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // CTA button
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Thanks for your interest! This is a demo button.');
    });
  }
}

// Show the specified page
function showPage(pageId) {
  // Hide all pages
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Show the selected page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }

  // Update URL hash
  window.location.hash = pageId;
}

// Update active navigation link
function updateActiveNav(activeLink) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  activeLink.classList.add('active');
}

// Handle form submission
async function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData.entries());

  try {
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formValues);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    contactForm.reset();

  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your message. Please try again.');
  }
}

// Handle page load and hash changes
window.addEventListener('DOMContentLoaded', () => {
  // Check for hash on page load
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);

  // Update active nav link
  const activeLink = document.querySelector(`.nav-link[data-page="${hash}"]`);
  if (activeLink) {
    updateActiveNav(activeLink);
  }

  // Initialize the app
  init();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1) || 'home';
  showPage(hash);

  const activeLink = document.querySelector(`.nav-link[data-page="${hash}"]`);
  if (activeLink) {
    updateActiveNav(activeLink);
  }
});
