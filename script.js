// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input


// Possible password values

var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split ("");
var charLower = "abcdefghijklmnopqrstuvwxyz" .split ("");
var specialchar = "!@#$%^&*()_+=~`{}[]:;<>?/" .split ("");
var Numbers = "0123456789" .split ("");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword() {


  // Options within the criteria
  var passwordLength = "";
  var Upper;
  var Lower;
  var Special;
  var Num;



  //Asks the user for their input 

  var passwordLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128");

  // loop if user inputs outside of the criteria

  if (passwordLength < 8) {
    alert("The password must be at least 8 characters, try again!");
    return;
}
  if (passwordLength > 128) {
    alert("The password must be less than 128 characters, try again!");
    return;
}

  var Upper = confirm("Click OK to confirm if you would like to include any uppercase letters");
  var Lower = confirm ("Click OK to confirm if you would like to include lowercase letters");
  var Special = confirm("Click OK to confirm if you would like to include speical characters"); 
  var Num = confirm("Click OK to confirm if you would like to include any numbers");


// Loop if user inputs outside of the criteria 


  if (Upper === false && Lower === false && Special === false && Num === false) {
    alert("Your password must contain at least one uppercase, lowercase, special, or numeric character, try again!");
    var Upper = confirm("Click OK to confirm if you would like to include any uppercase letters");
    var Lower = confirm ("Click OK to confirm if you would like to include lowercase letters");
    var Special = confirm("Click OK to confirm if you would like to include speical characters"); 
    var Num = confirm("Click OK to confirm if you would like to include any numbers");

}

 //generating random password

 var passwordCharacters = []
      
if (Upper) {
  passwordCharacters = passwordCharacters.concat(charUpper)
}

if (Lower) {
  passwordCharacters = passwordCharacters.concat(charLower)
}
  
if (Special) {
  passwordCharacters = passwordCharacters.concat(specialchar)
}

if (Num) {
  passwordCharacters = passwordCharacters.concat(Numbers)
}

  console.log(passwordCharacters)
    
  var randomPassword = ""
      
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

    

    
}



  
  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
