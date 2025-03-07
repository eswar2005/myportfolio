// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get form data
    const formData = new FormData(this);
  
    // Send form data to Formspree
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); // Reset the form
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      alert('Oops! Something went wrong. Please try again.');
    });
  });