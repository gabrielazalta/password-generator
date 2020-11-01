// Assignment code here - password between 8 and 128 chracters

//Array options
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwd = [];
var passwordFinal = "";


function generatePassword (){

// Welcome message
window.onload = alert("Welcome! Please click 'OK' to begin generating your secure password.")  

  // Confirm password length
  var confirmLength = (prompt ("How many characters would you like your password to have? Please enter a number between 8 and 128"));
  
  if (confirmLength <= 8 || confirmLength >= 128) {
    alert("You have selected an invalid answer. Please try again.");
    return generatePassword();
  }
  
  if (confirmLength >= 8 && confirmLength <= 128) {
    alert("Your password will contain " + confirmLength + " characters.");
    
    // Choose password parameters
      var confirmUpperChar = (confirm ("Would you like to include upper case letters in your password?"));
      var confirmLowerChar = (confirm ("Would you like to include lower case letters in your password?"));
      var confirmSpecialChar = (confirm ("Would you like to include special characters in your password?"));
      var confirmNumChar = (confirm ("Would you like to include numbers in your password?"));


    // Set password per user parameters 
    if (confirmUpperChar && confirmLowerChar && confirmSpecialChar && confirmNumChar){
      pwd = upperChar.concat(lowerChar, specialChar, numChar);
    } 
    else if (confirmUpperChar && confirmLowerChar && confirmSpecialChar){
      pwd = upperChar.concat(lowerChar, specialChar);
    }
    else if (confirmUpperChar && confirmLowerChar && confirmNumChar){
      pwd = upperChar.concat(lowerChar, numChar);
    }
    else if (confirmUpperChar && confirmSpecialChar && confirmNumChar){
      pwd = upperChar.concat(specialChar, numChar);
    }
    else if (confirmLowerChar && confirmSpecialChar && confirmNumChar){
      pwd = lowerChar.concat(specialChar, numChar);
    }
    else if (confirmUpperChar && confirmLowerChar){
      pwd = upperChar.concat(lowerChar);
    }
    else if (confirmUpperChar && confirmSpecialChar){
      pwd = upperChar.concat(specialChar);
    }
    else if (confirmUpperChar && confirmNumChar){
      pwd = upperChar.concat(numChar);
    }
    else if (confirmLowerChar && confirmSpecialChar){
      pwd = lowerChar.concat(specialChar);
    }
    else if (confirmLowerChar && confirmNumChar){
      pwd = lowerChar.concat(numChar);
    }
    else if (confirmNumChar && confirmSpecialChar){
      pwd = numChar.concat(specialChar);
    }
    else if (confirmUpperChar){
      pwd = upperChar;
    }
    else if (confirmLowerChar){
      pwd = lowerChar;
    }
    else if (confirmSpecialChar){
      pwd = specialChar;
    }
    else if (confirmNumChar){
      pwd = numChar;
    }
    
    // Make sure user selects at least one parameter
    if (confirmUpperChar === false && confirmLowerChar === false && confirmSpecialChar === false && confirmNumChar === false) {
    alert("You must select at least one parameter. Please try again.");
    return generatePassword();
    }

    // Confirm all OK
    alert("You have set the password parameters succesfully, click OK to view your password.");

    //Loop for multiple passwords
      for (var i = 0; i < confirmLength; i++) {
        var random = Math.floor(Math.random () * pwd.confirmLength);
        passwordFinal += pwd[random];
      }
  }
  }
  document.getElementById("password").innerHTML = passwordFinal;



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
