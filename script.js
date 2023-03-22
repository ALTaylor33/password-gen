const generateBtn = document.querySelector("#generate");

const specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.',];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
const lowerCasedCharacters = [  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z',];
  
const upperCasedCharacters = [  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z',];

function getPassword(){
  var newPassword = "";
  var userInput = prompt("Please enter a number between 8 and 128");
  
  
  
  if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
    alert("Please enter a valid number between 8 and 128.");
    return;
  }

  let userSpChar = confirm("Include special characters?");
  let userNumbs = confirm("Include numbers?");
  let userLowerC = confirm("Include lower case letters?");
  let userUpperC = confirm("Include upper case letters?");

  if (!userSpChar && !userNumbs && !userLowerC && !userUpperC) {
    alert("Please select at least one character type.");
    return;
  }

  possibleChars = [];

  if (userSpChar) {
    possibleChars = specialCharacters.concat(specialCharacters);
  }
  if (userNumbs) {
    possibleChars = possibleChars.concat(numericCharacters);
  }
  if (userLowerC) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
  }
  if (userUpperC) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
  }

   newPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  newPassword += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  newPassword += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  newPassword += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];

   for (var i = 0; i < userInput - 4; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    newPassword += possibleChars[randomIndex];
  }
  function shuffleString(str) {
    var arr = str.split('');
    arr.sort(function() { return Math.random() - 0.5; });
    return arr.join('');
  }
  

  newPassword = shuffleString(newPassword);
  let passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  
}

generateBtn.addEventListener("click", getPassword);