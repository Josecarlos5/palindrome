
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const userInputElement = document.getElementById('user-input');
const checkButton = document.getElementById('check-button');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const userInput = userInputElement.value; 

    if (userInput.toLowerCase() === 'exit') {
        userInputElement.value = ''; // Clear the input on 'exit'
        resultElement.textContent = ''; // Clear the result
        return; 
    }

    const result = isPalindrome(userInput);
    resultElement.textContent = `"${userInput}" is ${result ? 'a palindrome' : 'not a palindrome'}.`;
    resultElement.classList.toggle('palindrome', result);
    resultElement.classList.toggle('not-palindrome', !result);
});
