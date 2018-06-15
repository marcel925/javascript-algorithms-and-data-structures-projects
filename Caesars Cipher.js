/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function rot13(str) { // LBH QVQ VG!

    //for loop to get ASCII Code from letter & if statements to shift it by 13, then push to an array

    var letterCodeArray = [];

    for (var i = 0; i < str.length; i++) {
      var letterCode = parseInt(str.charCodeAt(i));

      if (letterCode >= 78 && letterCode <= 90) {
        letterCode = letterCode - 13;
      } else if (letterCode >= 65 && letterCode <= 77) {
        letterCode = letterCode + 13;
      }
      
      letterCodeArray.push(letterCode);
    }

    //loop through letterCodeArray & get letter from ASCII code & push it to array. Then return joined arrray
    
    var letterArray = [];

    for (var i = 0; i < letterCodeArray.length; i++) {
      var letter = String.fromCharCode(parseInt(letterCodeArray[i]));
      letterArray.push(letter);
    }

    var finalString = letterArray.join("");

    return finalString;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");



/*
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/