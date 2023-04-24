"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestStringInArray = void 0;
function longestStringInArray(array) {
    var longestStr = "";
    for (var i = 0; i < array.length; i++) {
        if (longestStr.length < array[i].length) {
            longestStr = array[i];
        }
    }
    return longestStr;
}
exports.longestStringInArray = longestStringInArray;
console.log(longestStringInArray(["hello", "world", "typescript", "react", "html"]));
