// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Click on the button to generate a password


// Prompt user for password criteria which use can select and customize
// Prompt options: lowercase, uppercase, numeric, and/or special characters
// Prompts user for password length - between 8 and 128 characters
// Code validates input - Criteria: at least one character type should be selected and all prompts should be answered
// A password is generated that matches the selected criteria and is displayed in an alert or written on the page