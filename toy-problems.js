/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers 
after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
var plusOneSum = [1, 2, 3, 4];

function arrSum (arrNum) {
    var newArr = [];
    var sumNumArr = 0;
    for (var i in arrNum) {
        newArr.push(arrNum[i]+1);
    }
    for (var j in newArr) {
        sumNumArr = sumNumArr + newArr[j];
    }
    return sumNumArr;
}

arrSum(plusOneSum);

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
var exDimArr = [1, 2, [3, [4], 5, 6], 7];

function flatten (cArr) {
    for (var i = 0; i < cArr.length; i++) {
        if (cArr[i].constructor === Array) {
               
        }
    }
}

flatten(exDimArr);

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to 
[a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

function organizeArr(messArr) {
    
    
}

/*

There is an array of non-negative integers. A second array is formed by shuffling the 
elements of the first array and deleting a random element. Given these two arrays, 
find which element is missing in the second array.

*/

var sorted = [1, 3, 5, 7, 9, 11];
var shuffled = [3, 7, 11, 1, 9];

function findMissing(oldArr, newArr) {
    for (var i = 0; i < oldArr.length; i++) {
        if (newArr.indexOf(oldArr[i]) == -1) {
            return oldArr[i];
        }
    }
}

findMissing(sorted, shuffled);



/*

Write a function that returns the longest word(s) from a sentence. The function should 
not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // 
["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // 
["buffalo"] or ["Buffalo"]

*/

function longestWords(sent) {
    var words = sent.split(' ');
    var longLen = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longLen) {
            longLen = words[i].length;
            var longWord = [];
            longWord[0] = words[i];
        }
        else if (words[i].length === longLen) {
            for (var j = 0; j < longWord.length; j++) {
                if (words[i].toUpperCase() !== longWord[j].toUpperCase()) {
                    longWord.push(words[i]);
                }
            }
        }
    }
    return longWord;
}

longestWords("You are just an old antidisestablishmentarian") // 
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multSum(num) {
    var multArr = [];
    var sumMult = 0;
    for (var i = 1; i < num; i++) {
        if (i%3 === 0 || i%5 === 0) {
            multArr.push(i);
        }
    }
    for (var j = 0; j < multArr.length; j++) {
        sumMult = sumMult + multArr[j];
    }
    return sumMult;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. 
For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
