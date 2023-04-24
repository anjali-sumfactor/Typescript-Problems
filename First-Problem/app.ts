function sumOfAllNum(array: any): number {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfAllNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));