"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countStringChar = void 0;
//1.Method:-
function countStringChar(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        count += 1;
    }
    return count;
}
exports.countStringChar = countStringChar;
console.log(countStringChar("hello world"));
//2.Method:-
function countStrChar(string) {
    return string.length;
}
console.log(countStrChar("hello world"));
