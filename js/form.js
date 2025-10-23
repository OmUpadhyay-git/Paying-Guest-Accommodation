// Basic form validation for Google Forms (if using custom form)
// For iframe, minimal JS needed unless adding custom validation before submit

document.addEventListener('DOMContentLoaded', function() {
    // Example: If you add a custom form above the iframe for quick inquiries
    const contactForm = document.getElementById('quick-contact-form'); // If exists
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Validate and submit logic here
            alert('Thank you! Your inquiry has been sent. We\'ll respond soon.');
            contactForm.reset();
        });
    }
});
