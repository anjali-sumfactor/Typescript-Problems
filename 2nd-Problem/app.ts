//1.Method:-
export function reverseAString(string: string): string {
    let revStr: string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revStr += string[i];
    }
    return revStr;
}
console.log(reverseAString("hello"));

//2.Method:-
function reverseString(string: string): string {
    return string.split("").reverse().join("");
}
console.log(reverseString("hello world"));