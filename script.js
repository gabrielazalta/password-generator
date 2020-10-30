// Assignment code here - password between 8 and 128 chracters

//Array options
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var confirmLength = "";

function generatePassword (){
  var confirmLength = (prompt ("How many characters would you like your password to have? Please enter a number between 8 and 128"));
  
  if (confirmLength >= 8 && confirmLength <= 128) {
    alert("Your password will contain " + confirmLength + " characters.");
  } else {
  alert("You entered an invalid response. Please try again");
  return generatePassword();
  }
};

generatePassword ();

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
