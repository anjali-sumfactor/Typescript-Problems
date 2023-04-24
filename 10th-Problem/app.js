"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOfEvenNum = void 0;
function arrayOfEvenNum(array) {
    var evenArray = [];
    for (var i = 0; i < array.length; i++) {
        array[i] % 2 === 0 && evenArray.push(array[i]);
    }
    return evenArray;
}
exports.arrayOfEvenNum = arrayOfEvenNum;
console.log(arrayOfEvenNum([12, 23, 46, 11, 29, 10]));
