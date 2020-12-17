// Prompt user for password criteria which user can select and customize
var generatePassword = function() {
        // Code validates input - Criteria: at least one character type should be selected and all prompts should be answered
        // Prompts user for password length - between 8 and 128 characters

        var passwordLength = window.prompt("How long does the password need to be? (must be between 8 and 128 characters long, and passwords are required to have at least one character type", 8);
        // Enures the length is valid
        passwordLength = validateNumberInput(passwordLength);
        if (!isValidRange(passwordLength)) {
            inputError();
            // If invlaid length, handles the error
        } else {
            // Prompt options: lowercase, uppercase, numeric, and/or special characters
            var numberLowercase = window.prompt("How many lowercase letters should be generated?", 3);
            numberLowercase = validateNumberInput(numberLowercase);

            // Converts String to number and makes sure it is a number
            var totalNumber = numberLowercase;


            var numberUppercase = window.prompt("How many uppercase letters should be generated?", 2);
            numberUppercase = validateNumberInput(numberUppercase);


            totalNumber += numberUppercase;

            var numberNumeric = window.prompt("How many characters should be numeric?", 2);
            numberNumeric = validateNumberInput(numberNumeric);


            totalNumber += numberNumeric;

            var numberSpecialCharacter = window.prompt("How many special characters should be generated?", 1);
            numberSpecialCharacter = validateNumberInput(numberSpecialCharacter);

            totalNumber += numberSpecialCharacter;
            if (totalNumber <= 0) {
                inputError();
            } else if (totalNumber > 0) {
                // Produces the requested "random"" elements
                var result = "";
                var upperCharacterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var lowercaseCharacterSet = "abcdefghijklmnopqrstuvwxyz";
                var specialCharacterSet = "!\"#$%&\'()*+,-./:;<=>?@[\ ]^_`{}|~";
                var numericSet = "0123456789";
                // I could have used random numbers  for numeric but I thought I would keep things strings so I don't have to worry about changing types
                for (var i = 0; i < numberLowercase; i++) {
                    result += lowercaseCharacterSet.charAt(getRandomNumber(lowercaseCharacterSet.length));
                }

                for (var i = 0; i < numberUppercase; i++) {
                    result += upperCharacterSet.charAt(getRandomNumber(upperCharacterSet.length));
                }

                for (var i = 0; i < numberNumeric; i++) {
                    result += numericSet.charAt(getRandomNumber(numericSet.length));
                }

                for (var i = 0; i < numberSpecialCharacter; i++) {
                    result += specialCharacterSet.charAt(getRandomNumber(specialCharacterSet.length));
                }
                // If the user doesn't specify all of the characters it just fills those extra slots with random numbers
                if (result.length < passwordLength) {
                    var difference = passwordLength - result.length;
                    for (var i = 0; i < difference; i++) {
                        result += numericSet.charAt(getRandomNumber(numericSet.length));
                    }
                }
                //this calls the shuffleCharacters method with mixes the random characters up for a more fun password
                return shuffleCharacters(result);
            }
        }

    }
    // End generatePassword function.


// Ensures an input is a number
var validateNumberInput = function(string) {
        var number = parseInt(string);
        if (!isNaN(number)) {
            return number;
        } else {
            inputError();
        }
    }
    // Ensures a valid range
var isValidRange = function(numberToCheck) {
        if (numberToCheck >= 8 && numberToCheck <= 128) { return true; } else { return false; }
    }
    // Handles situations that do not fit in our app's parameters of functioning
var inputError = function() {
        window.alert("Invalid selection, try again");
        generatePassword();
    }
    // Mixes up the chatacters in a string randomly using split and join
var shuffleCharacters = function(myString) {
        var stringArray = myString.split("");
        for (var i = 0; i < stringArray.length; i++) {
            var randomIndex = getRandomNumber(stringArray.length);
            var temporary = stringArray[i];
            stringArray[i] = stringArray[randomIndex];
            stringArray[randomIndex] = temporary;
        }
        myString = stringArray.join("");
        return myString;
    }
    // produces random numbers within a range
var getRandomNumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// This section links to HTML to use the javascript when the button is clicked

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

// A password is generated that matches the selected criteria and is displayed in an alert or written displayed on page