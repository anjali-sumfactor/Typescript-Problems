export function productOfTwoNum(num1: number, num2: number): number {
    let maxLimit = num1 > num2 ? num2 : num1;
    let product = num1 > num2 ? num1 : num2;
    let productOfNum = 0;

    for (let i = 0; i < maxLimit; i++) {
        productOfNum += product;
    }
    return productOfNum;
}
console.log(productOfTwoNum(2, 4));