"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfAllNum = void 0;
function sumOfAllNum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
exports.sumOfAllNum = sumOfAllNum;
console.log(sumOfAllNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function sumOfArray(array) {
    // return array.reduce((a: number, b: number) => {
    //     a + b;
    // }, 0);
    return array.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
