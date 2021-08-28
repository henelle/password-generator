// Assignment code here

// Function for upper case letters only
function upperCase(length) {
  var bigLetters = "";
  var upperCaseSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseLength = upperCaseSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    bigLetters += upperCaseSymbols.charAt(Math.floor(Math.random() * upperCaseLength));
  }
  return bigLetters;
}

// Function for lower case letters only
function lowerCase(length) {
  var smallLetters = "";
  var lowerCaseSymbols = "abcdefghijklmnopqrstuxwxyz";
  var lowerCaseLength = lowerCaseSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    smallLetters += lowerCaseSymbols.charAt(Math.floor(Math.random() * lowerCaseLength));
  }
  return smallLetters;
}

// Function for special characters only
function special(length) {
  var specialLetters = "";
  var specialSymbols =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var specialLength = specialSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    specialLetters += specialSymbols.charAt(Math.floor(Math.random() * specialLength));
  }
  return specialLetters;
}

// Function to generate a random password based on which parameters is selected
var generatePassword = function() {
  
};

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
