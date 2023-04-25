"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseAString = void 0;
//1.Method:-
function reverseAString(string) {
    var revStr = "";
    for (var i = string.length - 1; i >= 0; i--) {
        revStr += string[i];
    }
    return revStr;
}
exports.reverseAString = reverseAString;
console.log(reverseAString("hello"));
//2.Method:-
function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString("hello world"));
