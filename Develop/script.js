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

// Function for upper case and lower case letters only
function bothLetters(length) {
  var twoLetters = "";
  var twoSymbols =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuxwxyz";
  var twoLength = twoSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    twoLetters += twoSymbols.charAt(Math.floor(Math.random() * twoLength));
  }
  return twoLetters;
}

// Function for upper case letters, lower case letters, and special characters
function allCharacters(length) {
  var allOfThem = "";
  var allTheSymbols =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuxwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var allTheLength = allTheSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    allOfThem += allTheSymbols.charAt(Math.floor(Math.random() * allTheLength));
  }
  return allOfThem;
}

// Function for lower case letters and special characters only
function lowerSpecial(length) {
  var lowerSpec = "";
  var lowerSpecSymbols =  "abcdefghijklmnopqrstuxwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerSpecLength = lowerSpecSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    lowerSpec += lowerSpecSymbols.charAt(Math.floor(Math.random() * lowerSpecLength));
  }
  return lowerSpec;
}

// Function for uppper case letters and special characrters only
function upperSpecial(length) {
  var upperSpec = "";
  var upperSpecSymbols =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var upperSpecLength = upperSpecSymbols.length;
  for ( var i = 0; i < length; i++ ) {
    upperSpec += upperSpecSymbols.charAt(Math.floor(Math.random() * upperSpecLength));
  }
  return upperSpec;
}

// Function to generate a random password based on which parameters is selected
var generatePassword = function() {
  
  // User decides the password length
  var passwordLength = "";
  
  while (passwordLength === "" || passwordLength === null){
    passwordLength = prompt("How long do you want your password? Pick between 8 and 128.");
  }
  
  passwordLength = parseInt(passwordLength);

  // User decides which parameters they want their passwords to contain
  var promptUpper = window.confirm("Do you want upper case letters? Type 'yes' or 'no'.");
  

  var promptLower = window.confirm("Do you want lower case letters ? Type 'yes' or 'no'.");
  

  var promptSpecial = window.confirm("Do you want special characters? Type 'yes' or 'no'.");
  
  // All of the possible selections the user can make that will then decide the password that will be generated
  if (promptUpper && promptLower && promptSpecial) {

    return allCharacters(passwordLength);

  } else if (promptUpper && promptLower) {

    return bothLetters(passwordLength);

  } else if (promptUpper && promptSpecial) {

    return upperSpecial(passwordLength);

  } else if (promptLower && promptSpecial) {

    return lowerSpecial(passwordLength);

  } else if (promptUpper) {

    return upperCase(passwordLength);

  } else if (promptLower) {

    return lowerCase(passwordLength);

  } else if (promptSpecial) {

    return special(passwordLength);
  }
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
