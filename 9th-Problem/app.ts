//1. Method:-
export function palindrome(string: string): boolean {
    let str: string = string.split("").reverse().join("");
    return string === str ? true : false;
}
console.log(palindrome("level"));

//2.Method:-
function checkPalindrome(string: string): boolean {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("level"))