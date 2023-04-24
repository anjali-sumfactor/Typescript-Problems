"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonElements = void 0;
function commonElements(array1, array2) {
    var arr = [];
    for (var i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr;
}
exports.commonElements = commonElements;
console.log(commonElements([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));
