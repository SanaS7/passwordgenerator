// Assignment code here
function generatePassword() {
  var outputPassword = "";
  var includeLowercase = document.querySelector('input[name="lowercase"]:checked').value;
  var includeUppercase = document.querySelector('input[name="uppercase"]:checked').value;
  var includeNumbers = document.querySelector('input[name="numbers"]:checked').value;
  var includeSpecialcharacters = document.querySelector('input[name="specialcharacters"]:checked').value;
  var passwordLength = document.getElementById('length').value;

  // checking if there are only digits in passwordLength
  const allowedCharacters = "0123456789";
  var containsOnlyDigits = true;
  for (let i = 0; i < passwordLength.length; i++) {
    if (!allowedCharacters.includes (passwordLength[i])) {
      containsOnlyDigits = false;
    }
  }


var allNos = false;

const LOWERCASELETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASELETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIALCHARACTERS = '!@#$%^&*()_+-=,./<>?;';

var fillerCharacters = '';

if (containsOnlyDigits) {
  if (passwordLength >= 8 && passwordLength <= 128) {
    // write code to generate password
    if (includeLowercase == "lowercaseYes") {
      outputPassword += "ab";
      fillerCharacters += LOWERCASELETTERS;
    }
    if (includeUppercase == "uppercaseYes") {
      outputPassword += "AB";
      fillerCharacters += UPPERCASELETTERS;
    }
    if (includeNumbers == "numbersYes") {
      outputPassword += "12";
      fillerCharacters += DIGITS;

    }
    if (includeSpecialcharacters == "specialcharacterYes") {
      outputPassword += "!@";
      fillerCharacters += SPECIALCHARACTERS;
    }

    if (includeLowercase == "lowercaseNo" && includeUppercase == "uppercaseNo" && includeNumbers == "numbersNo" && includeSpecialcharacters == "specialcharacterNo") {
      alert ("Please select 'Yes' for at least one character type.");
      allNos = true;
    }


    if (!allNos) {
      // fill in the rest of the password with random characters
      while (outputPassword.length < passwordLength) {
        outputPassword += fillerCharacters.charAt(Math.floor(Math.random() * passwordLength));
      }
    }




    // console.log (`The password is ${outputPassword}. It has ${outputPassword.length} characters`);

    return outputPassword;

  } else {
    alert ("Please enter whole numbers between 8 and 128 inclusive.");
  }
} else {
  alert ("Please only enter whole numbers between 8 and 128 inclusive!");
}
  return "Invalid user entry. Please try again after fixing your input(s).";

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password;
  console.log (document.getElementById ("prompts").style.display);
  if (document.getElementById ("prompts").style.display !== "block") {
    document.getElementById ("prompts").style.display = 'block';
    alert ("Before we generate your password, please answer the following prompt.");
    password = "Awaiting your input...";
  } else {
      var password = generatePassword();
      document.getElementById ("prompts").style.display = "none";
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
