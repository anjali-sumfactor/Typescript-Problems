export function arrayOfEvenNum(array: any): any {
    let evenArray: any = [];
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 === 0 && evenArray.push(array[i]);
    }
    return evenArray;
}
console.log(arrayOfEvenNum([12, 23, 46, 11, 29, 10]));