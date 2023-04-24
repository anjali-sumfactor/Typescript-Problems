"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productOfTwoNum = void 0;
function productOfTwoNum(num1, num2) {
    var n = num1;
    for (var i = 0; i < num2 - 1; i++) {
        n += num1;
    }
    return n;
}
exports.productOfTwoNum = productOfTwoNum;
console.log(productOfTwoNum(20, 30));
