"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondLargestNum = void 0;
function secondLargestNum(array) {
    array.sort(function (a, b) { return a - b; });
    return array[array.length - 2];
}
exports.secondLargestNum = secondLargestNum;
console.log(secondLargestNum([1000, 12, 34, 11, 48, 90, 100, 999]));
