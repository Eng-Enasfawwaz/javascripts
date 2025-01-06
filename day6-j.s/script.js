// const form = document.getElementById('registrationForm');
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');
// const usernameError = document.getElementById('usernameError');
// const passwordError = document.getElementById('passwordError');
// const registerButton = document.getElementById('registerButton');
// const successMessage = document.getElementById('successMessage');

// const validateInputs = () => {
//   let isValid = true;

//   if (!username.value.trim()) {
//     usernameError.textContent = 'Username is required';
//     isValid = false;
//   } else {
//     usernameError.textContent = '';
//   }


//   if (password.value !== confirmPassword.value) {
//     passwordError.textContent = 'Passwords do not match';
//     isValid = false;
//   } else {
//     passwordError.textContent = '';
//   }

//   registerButton.disabled = !isValid;
// };

// form.addEventListener('input', validateInputs);


//task3

//  const password = document.getElementById('password');
//  const confirmPassword = document.getElementById('confirmPassword');
//  const passwordError = document.getElementById('passwordError');
//  function validatePasswordMatch() {
//   if (password.value !== confirmPassword.value) {
//          passwordError.textContent = 'Passwords do not match';
//    } else {
//     passwordError.textContent = '';
//    } }

// // // Add event listeners for real-time validation
//  password.addEventListener('input', validatePasswordMatch);
//  confirmPassword.addEventListener('input', validatePasswordMatch);
 


//task4
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');
// const registerButton = document.getElementById('registerButton');

// function validateInputs() {
//   // Check if all fields are filled
//   const isUsernameValid = username.value.trim() !== '';
//   const isEmailValid = email.value.trim() !== '' && email.checkValidity();
//   const arePasswordsFilled = password.value.trim() !== '' && confirmPassword.value.trim() !== '';
//   const doPasswordsMatch = password.value === confirmPassword.value;

//   // Enable the button only if all validations pass
//   registerButton.disabled = !(isUsernameValid && isEmailValid && arePasswordsFilled && doPasswordsMatch);
// }

// // Add event listeners to validate on input
// username.addEventListener('input', validateInputs);
// email.addEventListener('input', validateInputs);
// password.addEventListener('input', validateInputs);
// confirmPassword.addEventListener('input', validateInputs);

//task5

// const form = document.getElementById('registrationForm');
// const successMessage = document.getElementById('successMessage');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form from refreshing the page
//   successMessage.style.display = 'block'; // Show the success message
//   successMessage.textContent = 'User registered successfully!';
//   form.reset(); // Clear the form inputs
//   registerButton.disabled = true; // Disable the register button again
// });



//task1 mid
// const textElement = document.getElementById('text');

// function highlightLongWords() {
//   const words = textElement.textContent.split(' ');
//   const highlightedText = words
//     .map(word => word.length > 8 ? `<span class="highlight">${word}</span>` : word)
//     .join(' ');
//   textElement.innerHTML = highlightedText;
// }

// highlightLongWords();
 


//advanced task1
const shoppingForm = document.getElementById('shoppingForm');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');

// Function to add an item to the shopping list
function addItem(event) {
  event.preventDefault(); // Prevent form submission
  
  const itemName = itemInput.value.trim();
  
  if (itemName) {
    // Create a new list item
    const li = document.createElement('li');
    li.className = 'list-group-item shopping-list-item';

    // Add item name
    li.textContent = itemName;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.addEventListener('click', () => li.remove());

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to the shopping list
    shoppingList.appendChild(li);

    // Clear input field and focus
    itemInput.value = '';
    itemInput.focus();
  }
}

// Attach event listener to the form
shoppingForm.addEventListener('submit', addItem);
