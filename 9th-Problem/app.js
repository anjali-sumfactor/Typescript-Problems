"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
function palindrome(string) {
    var str = string.split("").reverse().join("");
    return string === str ? true : false;
}
exports.palindrome = palindrome;
console.log(palindrome("level"));
