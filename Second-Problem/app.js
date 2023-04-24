"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseAString = void 0;
//1.:-
function reverseAString(string) {
    var revStr = "";
    for (var i = string.length; i >= 0; i--) {
        revStr += string[i];
    }
    return revStr;
}
exports.reverseAString = reverseAString;
console.log(reverseAString("hello"));
//2.:-
function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString("hello world"));
