export function productOfTwoNum(num1: number, num2: number): number {
    let n= num1;
    for (let i = 0; i < num2-1; i++) {
        n+= num1;
    }
    return n;
}
console.log(productOfTwoNum(20, 30));