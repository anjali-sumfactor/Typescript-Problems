//1.:-
export function reverseAString(string: string): string {
    let revStr = "";
    for (let i = string.length; i >= 0; i--) {
        revStr += string[i];
    }
    return revStr;
}
console.log(reverseAString("hello"));

//2.:-
function reverseString(string: string): string {
    return string.split("").reverse().join("");
}
console.log(reverseString("hello world"));