export function commonElements(array1: any, array2: any): any {
    let arr: any = [];
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr;
}
console.log(commonElements([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));