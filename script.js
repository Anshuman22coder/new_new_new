document.addEventListener('DOMContentLoaded', function() {
  // Get the phone number and email spans
  var phoneSpan = document.getElementById('phone');
  var personalEmailSpan = document.getElementById('personal-email');
  var collegeEmailSpan = document.getElementById('college-email');

  // Add click event listeners to the spans
  phoneSpan.addEventListener('click', function() {
      var phoneNumber = phoneSpan.textContent;
      window.location.href = 'tel:' + phoneNumber;
  });

  personalEmailSpan.addEventListener('click', function() {
      var email = personalEmailSpan.textContent;
      window.location.href = 'mailto:' + email;
  });

  collegeEmailSpan.addEventListener('click', function() {
      var email = collegeEmailSpan.textContent;
      window.location.href = 'mailto:' + email;
  });
});
