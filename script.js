function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
// toLowerCase() method to return the calling string value converted to lowercase
// replace() method to return a new string with some or all matches of a pattern replaces by a replacement
// split() method splits a String object into an array of strings by separtaing the string into sub strings
// reverse() method reverses an array in place. The first array element becomes the last and the last becomes the firs.
// join() method joins all elements of an array into a string.
// at last check if reverseStr is equal to lowRegStr. If it is, it will be true.

let myForm = document.getElementById('palindrome');
let wordInput = document.getElementById('text');
let answer = document.getElementById('answer');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let userInput = wordInput.value;
    answer.innerHTML = palindrome(userInput);
})


// Regular Expressions: /[^A-Za-z0–9]/g  or  /[\W_]/g
// \W removes all non-alphanumeric characters:
// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets
// It means:
// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _
// g means g flag for global search
//