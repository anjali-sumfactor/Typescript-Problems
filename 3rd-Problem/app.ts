export function secondLargestNum(array: any[]): number {
    array.sort((a: number, b: number) => a - b);
    return array[array.length - 2];
}
console.log(secondLargestNum([1000, 12, 34, 11, 48, 90, 100, 999]));

function secondLargest(array: any[]) {
    var max1st = array[0];
    var max2nd = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max1st) {
            max2nd = max1st;
            max1st = array[i];
        }
        else if (array[i] > max2nd && array[i] != max1st) {
            max2nd = array[i];
        }
    }
    return max2nd;
}
console.log(secondLargest([100, 2, 4, 54, 27, 98, 99]));