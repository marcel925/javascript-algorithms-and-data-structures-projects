/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function convertToRoman(num) {

    var array = [];

    //vars below calculate how many in num of thousands, hundreds, tens and remainder10

    var remainder10 = num % 10;

    var tens = ((num % 100) - remainder10) / 10;

    var hundreds = ((num % 1000) - (tens * 10) - remainder10) / 100;

    var thousands = ((num % 10000) - (hundreds * 100) - (tens * 10) - remainder10) / 1000;

    if (thousands > 0) {
        for (var i = 0; i < thousands; i++) {
            array.push("M");
        }
    }

    // below switch case adds appropriate characters depending on how many hundreds are in num
    
    if (hundreds > 0) {

        switch(hundreds) {
            case 1:
                array.push("C");
                break;
            case 2:
                array.push("CC");
                break;
            case 3:
                array.push("CCC");
                break;
            case 4:
                array.push("CD");
                break;
            case 5:
                array.push("D");
                break;
            case 6:
                array.push("DC");
                break;
            case 7:
                array.push("DCC");
                break;
            case 8:
                array.push("DCCC");
                break;
            case 9:
                array.push("CM");
                break;
        }    
    }

    // below switch case adds appropriate characters depending on how many tens are in num

    if (tens > 0) {

        switch(tens) {
            case 1:
                array.push("X");
                break;
            case 2:
                array.push("XX");
                break;
            case 3:
                array.push("XXX");
                break;
            case 4:
                array.push("XL");
                break;
            case 5:
                array.push("L");
                break;
            case 6:
                array.push("LX");
                break;
            case 7:
                array.push("LXX");
                break;
            case 8:
                array.push("LXXX");
                break;
            case 9:
                array.push("XC");
                break;
        }    
    }

    //below adds the last remaining characters based on remainder10

    if (remainder10 > 0) {

        switch(remainder10) {
            case 1:
                array.push("I");
                break;
            case 2:
                array.push("II");
                break;
            case 3:
                array.push("III");
                break;
            case 4:
                array.push("IV");
                break;
            case 5:
                array.push("V");
                break;
            case 6:
                array.push("VI");
                break;
            case 7:
                array.push("VII");
                break;
            case 8:
                array.push("VIII");
                break;
            case 9:
                array.push("IX");
                break;   
        }
    }       

    return array.join("");
}

convertToRoman(36);



/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/