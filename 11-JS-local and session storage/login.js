document.getElementById("loginBtn").addEventListener("click", function () {
    const emailInput = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    
  
    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailRegex.test(emailInput)) {
      emailError.textContent = "Invalid email. Please enter a valid email address.";
    } else {
      emailError.textContent = ""; // Clear error
      const username = emailInput.split("@")[0]; // Extract username
      sessionStorage.setItem("username", username); // Store username
      window.location.href = "todotask.html"; // Redirect to To-Do List page
    }


    document.addEventListener("DOMContentLoaded", () => {
      const email = prompt("Enter your email:");
      const username = email.split("@")[0]; // Extract the part before '@'
      const welcomeMessage = document.getElementById("welcomeMessage");
  
   
  });
  
  });
  