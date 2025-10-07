// Simple form alert message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "✅ Message sent successfully!";
});
