"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
//1. Method:-
function palindrome(string) {
    var str = string.split("").reverse().join("");
    return string === str ? true : false;
}
exports.palindrome = palindrome;
console.log(palindrome("level"));
//2.Method:-
function checkPalindrome(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("level"));
