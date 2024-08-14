

function isPalindrome(str) {

    //  converting to lowercase without alphanumericos
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse 
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Check string equal to the reverse
    return cleanedStr === reversedStr;
}

// Examples
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("arara")); // true
console.log(isPalindrome("cegid")); // false
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Pat Nat Tan ; TAP?¿")); // true (example with spaces, uppercases and punctuation)