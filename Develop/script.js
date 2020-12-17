// Click on the button to generate a password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    window.alert("Generated Password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user for password criteria which user can select and customize
var generatePassword = function() {
    // Code validates input - Criteria: at least one character type should be selected and all prompts should be answered
    // Prompts user for password length - between 8 and 128 characters
    var passwordLength = window.prompt("How long does the password need to be? (must be between 8 and 128 characters long, and passwords are required to have at least one character type", 8);
    passwordLength = validateNumberInput(passwordLength);
    // Prompt options: lowercase, uppercase, numeric, and/or special characters
    var numberLowercase = window.prompt("How many lowercase letters should be generated?", 3);
    numberLowercase = validateNumberInput(numberLowercase);
    ensureCapacity(passwordLength, numberLowercase);
    var totalNumber = passwordLength + numberLowercase;
    var numberUppercase = window.prompt("How many uppercase letters should be generated?", 2);
    numberUppercase = validateNumberInput(numberUppercase);
    totalNumber += numberUppercase;
    ensureCapacity(totalNumber, numberUppercase);
    var numberNumeric = window.prompt("How many characters should be numeric?", 2);
    numberNumeric = validateNumberInput(numberNumeric);
    totalNumber += numberNumeric;
    ensureCapacity(totalNumber, numberNumeric);
    var numberSpecialCharacter = window.prompt("How many special characters should be generated?", 1);
    totalNumber += numberSpecialCharacter;
    numberSpecialCharacter = validateNumberInput(numberSpecialCharacter);
    if (totalNumber >= passwordLength || totalNumber <= 0) {
        window.alert("Invalid selection, try again");
        generatePassword();
    } else { return randomPasswordGenerator(passwordLength, numberLowercase, numberUppercase, numberNumeric, numberSpecialCharacter); }

}
var validateNumberInput = function(string) {
    var number = parseInt(string);
    if (!number.isInteger() || number <= 8 || number >= 128) {
        window.alert("Invalid input: Enter a positive digit between 8 and 128!")
        generatePassword();
    } else { return number; }
}
var ensureCapacity = function(currentTotal, newNumber) {
    if (newNumber > currentTotal || newNumber > passwordLength) {
        window.alert("Invalid selection, try again");
        generatePassword();
    }
}

// Produces the requested "random"" elements
var randomPasswordGenerator = function(length, lowercase, uppercase, numeric, specialCharacter) {
    var result = '';
    var upperCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseCharacterSet = 'abcdefghijklmnopqrstuvwxyz';
    var numberNumeric = '';
    var specialCharacterSet = "!\"#$%&\'()*+,-./:;<=>?@[\ ]^_`{}|~";
    if (lowercase > 0) {
        for (var i = 0; i < lowercase; i++) {
            result += lowercaseCharacterSet.charAt(getRandomNumber(lowercaseCharacterSet.length));
        }
    }
    if (upperCharacters > 0) {
        for (var i = 0; i < uppercase; i++) {
            result += upperCharacterSet.charAt(getRandomNumber(uppercaseCharacterSet.length));
        }
    }
    if (numberNumeric > 0) {
        for (var i = 0; i < numeric; i++) {
            result += getRandomNumber(10);
        }
    }
    if (specialCharacter > 0) {
        for (var i = 0; i < specialCharacter; i++) {
            result += specialCharacterSet.charAt(getRandomNumber(specialCharacterSet.length));
        }
    }
    if (result.length < length) {
        var difference = length - result.length;
        for (var i = 0; i < difference; i++) {
            result += getRandomNumber(10);
        }
    } else if (result.length > length) {
        window.alert("Invalid input: Something went wrong!  Try again!");
        generatePassword();
    } else { return result; }



    var getRandomNumber = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

/* A password is generated that matches the selected criteria and is displayed in an alert or written displayed on page */