export function longestStringInArray(array: any) {
    let longestStr: string = "";
    for (let i = 0; i < array.length; i++) {
        if (longestStr.length < array[i].length) {
            longestStr = array[i];
        }
    }
    return longestStr;
}
console.log(longestStringInArray(["hello", "world", "typescript", "react", "html"]));