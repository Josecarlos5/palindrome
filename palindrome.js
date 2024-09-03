function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Input menu loop
while (true) {
    const userInput = prompt("Enter a string to check if it's a palindrome (or type 'exit' to quit):");

    if (userInput === null || userInput.toLowerCase() === 'exit') {
        break; // Exit the loop if the user cancels or types 'exit'
    }

    const result = isPalindrome(userInput);
    alert(`"${userInput}" is ${result ? 'a palindrome' : 'not a palindrome'}.`);
}
