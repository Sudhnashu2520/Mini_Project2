const roles = [
  "Mobile App Developer",
  "Mern Stack Developer",
  "FrontEnd Developer",
];

let index = 0;

function rotate() {
  document.getElementById("role").innerText = roles[index];
  index = (index + 1) % roles.length;
  setTimeout(rotate, 2000); 
}
rotate();



function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show the back to top button when scrolling down
  window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  });

  
  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  })
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
  let valid = true;
  
  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const message = document.getElementById('formMessage').value;
  
  // Reset errors
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';
  
  // Validate name
  if (name.trim() === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      valid = false;
  }
  
  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
  if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address';
      valid = false;
  }
  
  // Validate message
  if (message.trim() === '') {
      document.getElementById('messageError').innerText = 'Message is required';
      valid = false;
  }
  
  if (!valid) {
      event.preventDefault();
  } else {
    //  event.preventDefault();
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
  }
});