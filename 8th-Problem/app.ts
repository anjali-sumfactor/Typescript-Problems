export function commonElements(array1: any[], array2: any[]): any[] {
    let arr: any[] = [];
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr;
}
console.log(commonElements([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));

function commonItems(array1: any[], array2: any[]): any[] {
    let common: any[] = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                common.push(array1[i]);
            }
        }
    }
    return common;
}
console.log(commonItems([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));