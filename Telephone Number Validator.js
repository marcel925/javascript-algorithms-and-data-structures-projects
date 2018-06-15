/*
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555 (555)555-5555 (555) 555-5555 555 555 5555 5555555555 1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


  //To complete this challenge, I'll check for various potential invalid inputs, and if they exist, return false. Otherwise, the last line will return true

function telephoneCheck(str) {

  //3 step process below: 
  //Step 1: Use a regex and array.filter to cut input array to just the numbers
  //Step 2: Then, if length is lower than 10 or higher than 11, then it's invalid
  //Step 3: Then, if length is 11, the first digit has to be 1, or it's invalid

  var array = str.split("");

  var regexNumbers = (/[0-9]/);
  var filteredNumbers = array.filter(function(val){
    return regexNumbers.test(val);
  });

  if (filteredNumbers.length < 10 || filteredNumbers.length > 11) {
    return false;
  }

  if (filteredNumbers.length == 11) {
    if (filteredNumbers[0] !== "1") {
      return false;
    }
  }

  //The input may not contain anything other than digits, brackets, dashes or spaces. The code belows tests for invalid characters

  var arrayNoSpaces = array.filter((item) => item != " ");

  var regexInvalid = (/[^-()0-9]/);

  var filteredInvalid = arrayNoSpaces.filter(function(val){
    return regexInvalid.test(val);
  });

  if (filteredInvalid.length > 0) {
    return false;
  }

  //Use array.filter to cut input array to only the brackets. If result is not () or empty, then it's invalid

  var regexBrackets = (/[()]/);

  var filteredBrackets = array.filter(function(val){
    return regexBrackets.test(val);
  });

  var filteredBracketsString = filteredBrackets.join("");

  if (filteredBrackets.length != 0 && filteredBracketsString != "()") {
    return false;
  }

  //use array.filter to cut input to only the dashes (-). If there are more than 2 dashes, then it's invalid

  var regexDashes = (/[-]/);

  var filteredDashes = array.filter(function(val){
    return regexDashes.test(val);
  });

  if (filteredDashes.length > 2) {
    return false;
  }

  //A closing bracket ) may not be present in the first 4 or last 7 characters. The for loops below test for that

  for (var i = 0; i < 4; i++) {
    if (str[i] == ")") {
      return false;
    }
  }

  for (var i = str.length; i > str.length - 7; i--){
    if (str[i] == ")") {
      return false;
    }
  }

  //A dash (-) cannot be present in the first 3 or last 4 characters. The for loops below test for that

  for (var i = 0; i < 3; i++) {
    if (str[i] == "-") {
      return false;
    }
  }

  for (var i = str.length; i > str.length - 4; i--){
    if (str[i] == "-") {
      return false;
    }
  }

  return true;
}

telephoneCheck("0 (757) 622-7382");



/*
telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
*/