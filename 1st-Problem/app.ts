export function sumOfAllNum(array: any[]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfAllNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumOfArray(array: any[]) {
    return array.reduce((sum, num) => sum + num, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));