export function secondLargestNum(array: any[]): number {
    array.sort((a: number, b: number) => a - b);
    return array[array.length - 2];
}
console.log(secondLargestNum([1000, 12, 34, 11, 48, 90, 100, 999]));