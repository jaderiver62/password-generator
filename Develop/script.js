// Click on the button to generate a password

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // Write password to the #password input
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user for password criteria which user can select and customize
var generatePassword = function() {
    // Code validates input - Criteria: at least one character type should be selected and all prompts should be answered
    // Prompts user for password length - between 8 and 128 characters
    var passwordLength = prompt("How long does the password need to be? (must be between 8 and 128 characters long)", 8);
    passwordLength = validateNumberInput(passwordLength);
    // Prompt options: lowercase, uppercase, numeric, and/or special characters
    alert("Passwords are required to have at least one character type")
    var numberLowercase = prompt("How many lowercase letters should be generated?", 3);
    numberLowercase = validateNumberInput(numberLowercase);
    ensureCapacity(passwordLength, numberLowercase);
    var totalNumber = passwordLength + numberLowercase;
    var numberUppercase = prompt("How many uppercase letters should be generated?", 2);
    numberUppercase = validateNumberInput(numberUppercase);
    totalNumber += numberUppercase;
    ensureCapacity(totalNumber, numberUppercase);
    var numberNumeric = prompt("How many characters should be numeric?", 2);
    numberNumeric = validateNumberInput(numberNumeric);
    totalNumber += numberNumeric;
    ensureCapacity(totalNumber, numberNumeric);
    var numberSpecialCharacter = prompt("How many special characters should be generated?", 1);
    totalNumber += numberSpecialCharacter;
    numberSpecialCharacter = validateNumberInput(numberSpecialCharacter);
    if (totalNumber > passwordLength || totalNumber <= 0) {
        alert("Invalid selection, try again");
        generatePassword();
    } else { return passwordGenerator(passwordLength, numberLowercase, numberUppercase, numberNumeric, numberSpecialCharacter); }


    var validateNumberInput = function(string) {
        var number = parseInt(string);
        if (!number.isInteger() || number < 8 || number > 128) {
            alert("Invalid input: Enter a positive digit between 8 and 128!")
            generatePassword();
        } else { return number; }
    }
    var ensureCapacity = function(currentTotal, newNumber) {
        if (newNumber > currentTotal || newNumber > passwordLength) {
            alert("Invalid selection, try again");
            generatePassword();
        }
    }
}

/* A password is generated that matches the selected criteria and is displayed in an alert or written displayed on page */