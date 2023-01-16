// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//defined the constants from which the choices vcan be made

const lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberPw = [1,2,3,4,5,6,7,8,9,0]
const specialCharacter = ["!", "%", "*", "(", ")", "~"];

// defining the function to generate password

function generatePassword () {

  //-------------------- length of the password ------------------------------------------
  var pwLength = prompt("select length between 8 and 128 characters");
      //console.log("entered length " + pwLength);

      // validate input is a number and within desired length
      console.log ("input is " + typeof parseInt(pwLength) + " " + Number.isInteger(parseInt(pwLength)));

      // if pw is of incorrect datatype and incorrect length then prompt will happen again and again
      while ( Number.isInteger(parseInt(pwLength)) == false || pwLength < 8 || pwLength > 128) {
      // reset prompt if incorrect length was given  
        var pwLength = prompt("you have selected " + pwLength+ ". select length between 8 and 128 characters") ;
    };


  // empty array to have list of elements that are selected by the user
  var passwordParameters = [];  
  var elementFromEach = [];
  //-------------------- confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // --------- -------- if true add that array to a new array passwordParameters

      var pwLower = confirm("password can have lowercase characters ") ;
          if (pwLower == true) {(passwordParameters.push.apply(passwordParameters, lowerAlpha));
           elementFromEach.push(lowerAlpha[Math.floor(Math.random()*lowerAlpha.length)]);
            };

      var pwUpper = confirm("password can have Uppercase characters ") ;
          if (pwUpper == true) {passwordParameters.push.apply(passwordParameters,upperAlpha);
            elementFromEach.push(upperAlpha[Math.floor(Math.random()*upperAlpha.length)]);
              };

      var num = confirm("password can have numbers ") ;
          if (num == true) {passwordParameters.push.apply(passwordParameters,numberPw);
            elementFromEach.push(numberPw[Math.floor(Math.random()*numberPw.length)]);
          };    

      var specialChar = confirm("password can have special characters ") ;
          if (specialChar == true) {passwordParameters.push.apply(passwordParameters,specialCharacter);
            elementFromEach.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)]);
          };        

  // --------------------------------loging 
          console.log("final array " + passwordParameters);
          console.log("length of pw should be " + pwLength);
          console.log("for sure array  " + elementFromEach);
        
            
  // -----------------------------------if none of the specifications are mentioned 
      if  (pwLower == false && pwUpper == false && num == false && specialChar == false ) {
        alert ("no specifications are selected, please try again");
        return "Please try again by selecting atleast one specifications" ;
      }   

//-----------------------------------------------randomly selecting elements
// making sure one element from each selected category
var passwordParameter = elementFromEach.join("")  
     
    for (i=0; i < pwLength - elementFromEach.length; i++) {
    passwordParameter = passwordParameter + passwordParameters[Math.floor(Math.random()*passwordParameters.length)];
     };

// final password to be returned when clicked 
console.log("this is" + passwordParameter);
console.log("length of password check: requested " + pwLength + " = available " + (passwordParameter.length))

// --------------------------final output
return passwordParameter;

}


