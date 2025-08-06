document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert("Mesazhi u dërgua me sukses!");
    this.reset();
  });