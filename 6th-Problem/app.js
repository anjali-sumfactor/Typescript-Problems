"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(num) {
    var facto = 1;
    for (var i = num; i > 0; i--) {
        facto = facto * i;
    }
    return facto;
}
exports.factorial = factorial;
console.log(factorial(5));
