// Assignment code here
var startPasswordGenerater = function() {
    var confirmationCheck = confirm("Do you want to generate a password?");
    if (confirmationCheck) {
        getPassword();
        var generateBtn = document.querySelector("#generate");



    } else {
        alert("Good Bye!");
        break;

    };
    // Click on the button to generate a password
    var getPassword = function() {
        function writePassword() {
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
            // Write password to the #password input
            passwordText.value = password;

        }

        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
    }
    var generatePassword = function() {
            var passwordLength = prompt("How long does the password need to be? (must be between 8 and 128 characters long) ");
            passwordLength = validateNumberInput(passwordLength);
            var numberLowercase = prompt("How many lowercase letters should be generated?");
            var numberUppercase = prompt("How many uppercase letters should be generated?");
            var numberNumeric = prompt("How many characters should be numeric?");
            var numberSpecialCharacter = prompt("How many special characters should be generated?");
            var validateNumberInput = function(string) {
                var number = parseInt(string);
                if (!number.isInteger() || number < 8 || number > 128) {
                    alert("Invalid input: Enter a positive digit between 8 and 128!")
                    startPasswordGenerater();
                } else { return number }
            }
        }
        /*
                    var passwordInfo = {

                        setDefaultParameters: function() {
                            this.passwordLength = 8;
                            this.numberLowercase = 3;
                            this.numberUppercase = 2;
                            this.numberNumeric = 2;
                            this.numberSpecialCharacter = 1;
                        },
          */
}

startPasswordGenerater();

// Prompt user for password criteria which use can select and customize
// Prompt options: lowercase, uppercase, numeric, and/or special characters
// Prompts user for password length - between 8 and 128 characters
// Code validates input - Criteria: at least one character type should be selected and all prompts should be answered
// A password is generated that matches the selected criteria and is displayed in an alert or written on the page
/*

 */